#!/bin/bash
# WAF – CloudWatch Allowed/Blocked metrics
# Requires: AWS CLI, cloudwatch:GetMetricStatistics, Web ACL Name and Id
# Run: ./03-waf-metrics.sh [WEB_ACL_NAME] [WEB_ACL_ID]
# Get name/id from: aws wafv2 list-web-acls --scope CLOUDFRONT --region us-east-1

set -e

WEB_ACL_NAME="${1}"
WEB_ACL_ID="${2}"
REGION="us-east-1"
SCOPE="CLOUDFRONT"
DAYS="${3:-14}"

if [ -z "$WEB_ACL_NAME" ] || [ -z "$WEB_ACL_ID" ]; then
  echo "Usage: $0 WEB_ACL_NAME WEB_ACL_ID [DAYS]"
  echo ""
  echo "Get Web ACL name and ID:"
  aws wafv2 list-web-acls --scope CLOUDFRONT --region us-east-1 --output table 2>/dev/null || true
  exit 1
fi

END=$(date -u +%Y-%m-%dT%H:%M:%SZ)
START=$(date -u -v-${DAYS}d +%Y-%m-%dT%H:%M:%SZ 2>/dev/null || date -u -d "$DAYS days ago" +%Y-%m-%dT%H:%M:%SZ)

echo "=== WAF CloudWatch Metrics: $WEB_ACL_NAME ==="
echo "Period: last $DAYS days"
echo ""

echo "--- Allowed Requests ---"
aws cloudwatch get-metric-statistics \
  --namespace AWS/WAFV2 \
  --metric-name AllowedRequests \
  --dimensions Name=WebACL,Value="$WEB_ACL_NAME/$WEB_ACL_ID" Name=Region,Value=us-east-1 Name=Rule,Value=ALL \
  --start-time "$START" \
  --end-time "$END" \
  --period 86400 \
  --statistics Sum \
  --region "$REGION" \
  --output table 2>/dev/null || echo "Check Web ACL name/id. For CloudFront WAF, Region=us-east-1."

echo ""
echo "--- Blocked Requests ---"
aws cloudwatch get-metric-statistics \
  --namespace AWS/WAFV2 \
  --metric-name BlockedRequests \
  --dimensions Name=WebACL,Value="$WEB_ACL_NAME/$WEB_ACL_ID" Name=Region,Value=us-east-1 Name=Rule,Value=ALL \
  --start-time "$START" \
  --end-time "$END" \
  --period 86400 \
  --statistics Sum \
  --region "$REGION" \
  --output table 2>/dev/null || true

echo ""
echo "Look for: Blocked >> Allowed = bot/scanner traffic. Check Sampled Requests in Console for top rules."
