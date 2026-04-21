#!/bin/bash
# Create AWS Budget with Anomaly Detection
# Requires: AWS CLI, budgets:CreateBudget, budgets:CreateAnomalyMonitor, budgets:CreateAnomalySubscription
# Run: ./04-budget-anomaly.sh [MONTHLY_BUDGET_USD] [EMAIL]

set -e

BUDGET_AMOUNT="${1:-50}"
EMAIL="${2}"

if [ -z "$EMAIL" ]; then
  echo "Usage: $0 MONTHLY_BUDGET_USD EMAIL"
  echo "Example: $0 50 you@example.com"
  exit 1
fi

ACCOUNT_ID=$(aws sts get-caller-identity --query Account --output text 2>/dev/null || echo "YOUR_ACCOUNT_ID")

echo "=== Creating Budget: \$$BUDGET_AMOUNT/month ==="
echo "Notifications to: $EMAIL"
echo ""

# Create budget with forecasted and actual alerts
aws budgets create-budget \
  --account-id "$ACCOUNT_ID" \
  --budget "{
    \"BudgetName\": \"panetteria-monthly\",
    \"BudgetLimit\": {
      \"Amount\": \"$BUDGET_AMOUNT\",
      \"Unit\": \"USD\"
    },
    \"TimeUnit\": \"MONTHLY\",
    \"BudgetType\": \"COST\",
    \"CostFilters\": {},
    \"CostTypes\": {
      \"IncludeTax\": true,
      \"IncludeSubscription\": true,
      \"UseBlended\": false,
      \"IncludeRefund\": false,
      \"IncludeCredit\": false,
      \"IncludeUpfront\": true,
      \"IncludeRecurring\": true,
      \"IncludeOtherSubscription\": true,
      \"IncludeSupport\": true,
      \"IncludeDiscount\": true,
      \"UseAmortized\": false
    }
  }" \
  --notifications-with-subscribers "[
    {
      \"Notification\": {
        \"NotificationType\": \"FORECASTED\",
        \"ComparisonOperator\": \"GREATER_THAN\",
        \"Threshold\": 80,
        \"ThresholdType\": \"PERCENTAGE\"
      },
      \"Subscribers\": [{\"SubscriptionType\": \"EMAIL\", \"Address\": \"$EMAIL\"}]
    },
    {
      \"Notification\": {
        \"NotificationType\": \"ACTUAL\",
        \"ComparisonOperator\": \"GREATER_THAN\",
        \"Threshold\": 100,
        \"ThresholdType\": \"PERCENTAGE\"
      },
      \"Subscribers\": [{\"SubscriptionType\": \"EMAIL\", \"Address\": \"$EMAIL\"}]
    }
  ]" 2>/dev/null || {
  echo "Budget may already exist. Use Console: Billing -> Budgets -> Create budget"
  exit 1
}

echo "Budget created. Enabling Anomaly Detection..."

# Anomaly monitor (tracks spend patterns)
aws budgets create-anomaly-monitor \
  --anomaly-monitor "{
    \"AnomalyMonitorName\": \"panetteria-anomaly\",
    \"MonitorType\": \"DIMENSIONAL\",
    \"MonitorDimension\": \"SERVICE\"
  }" 2>/dev/null || echo "Anomaly monitor may exist. Check Billing -> Cost Anomaly Detection."

# Anomaly subscription
MONITOR_ARN=$(aws budgets describe-anomaly-monitors --query "AnomalyMonitors[?AnomalyMonitor.AnomalyMonitorName=='panetteria-anomaly'].AnomalyMonitor.MonitorArn" --output text 2>/dev/null | head -1)
if [ -n "$MONITOR_ARN" ] && [ "$MONITOR_ARN" != "None" ]; then
  aws budgets create-anomaly-subscription \
    --anomaly-subscription "{
      \"AnomalySubscriptionName\": \"panetteria-anomaly-alerts\",
      \"MonitorArnList\": [\"$MONITOR_ARN\"],
      \"Subscribers\": [{\"SubscriptionType\": \"EMAIL\", \"Address\": \"$EMAIL\"}],
      \"Threshold\": 50.0,
      \"Frequency\": \"IMMEDIATE\"
    }" 2>/dev/null || echo "Subscription may exist."
fi

echo ""
echo "Done. Check Billing -> Budgets and Cost Anomaly Detection. Confirm email subscription."
