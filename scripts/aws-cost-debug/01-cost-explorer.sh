#!/bin/bash
# Cost Explorer – Amplify and WAF by Usage Type
# Requires: AWS CLI, ce:GetCostAndUsage permission
# Run: ./01-cost-explorer.sh [START_DATE] [END_DATE]
# Example: ./01-cost-explorer.sh 2026-01-01 2026-01-31

set -e

START_DATE="${1:-$(date -v-30d +%Y-%m-%d 2>/dev/null || date -d '30 days ago' +%Y-%m-%d)}"
END_DATE="${2:-$(date +%Y-%m-%d)}"

echo "=== Cost Explorer: Amplify + WAF ==="
echo "Period: $START_DATE to $END_DATE"
echo ""

echo "--- By Service (Amplify, WAF) ---"
aws ce get-cost-and-usage \
  --time-period Start="$START_DATE",End="$END_DATE" \
  --granularity MONTHLY \
  --metrics "UnblendedCost" \
  --filter '{"Dimensions":{"Key":"SERVICE","Values":["AWS Amplify","AWS WAF"]}}' \
  --group-by Type=DIMENSION,Key=SERVICE \
  --output table 2>/dev/null || echo "Run: aws ce get-cost-and-usage --time-period Start=$START_DATE,End=$END_DATE --granularity MONTHLY --metrics UnblendedCost --filter '{\"Dimensions\":{\"Key\":\"SERVICE\",\"Values\":[\"AWS Amplify\",\"AWS WAF\"]}}' --group-by Type=DIMENSION,Key=SERVICE"

echo ""
echo "--- Amplify by Usage Type ---"
aws ce get-cost-and-usage \
  --time-period Start="$START_DATE",End="$END_DATE" \
  --granularity MONTHLY \
  --metrics "UnblendedCost" \
  --filter '{"Dimensions":{"Key":"SERVICE","Values":["AWS Amplify"]}}' \
  --group-by Type=DIMENSION,Key=USAGE_TYPE \
  --output table 2>/dev/null || echo "See README for Console navigation"

echo ""
echo "--- WAF by Usage Type ---"
aws ce get-cost-and-usage \
  --time-period Start="$START_DATE",End="$END_DATE" \
  --granularity MONTHLY \
  --metrics "UnblendedCost" \
  --filter '{"Dimensions":{"Key":"SERVICE","Values":["AWS WAF"]}}' \
  --group-by Type=DIMENSION,Key=USAGE_TYPE \
  --output table 2>/dev/null || echo "See README for Console navigation"

echo ""
echo "Data to collect: Amplify (Hosting-GB, Hosting-Requests, BuildMinutes, DataTransfer-Out); WAF (WebACL, Rule, Request)"
