#!/bin/bash
# WAF – List Web ACLs, associations, and rules
# Requires: AWS CLI, wafv2:ListWebACLs, wafv2:GetWebACL, wafv2:ListResourcesForWebACL
# Note: WAF for CloudFront must use us-east-1

set -e

REGION="${1:-us-east-1}"
SCOPE="CLOUDFRONT"  # Use REGIONAL for ALB/API Gateway

echo "=== WAF Web ACLs (scope=$SCOPE, region=$REGION) ==="
echo ""

echo "--- Web ACL List ---"
aws wafv2 list-web-acls --scope "$SCOPE" --region "$REGION" --output table 2>/dev/null || {
  echo "If CloudFront: use us-east-1. If ALB: use your app region."
  exit 1
}

echo ""
echo "--- For each Web ACL, get details and associations ---"
aws wafv2 list-web-acls --scope "$SCOPE" --region "$REGION" --query 'WebACLs[]' --output json 2>/dev/null | \
  jq -r '.[] | "\(.ARN)|\(.Name)|\(.Id)"' 2>/dev/null | while IFS='|' read -r arn name id; do
  [ -z "$arn" ] && continue
  echo ""
  echo "Web ACL: $name (Id: $id)"
  echo "  ARN: $arn"
  echo "  Rules:"
  aws wafv2 get-web-acl --scope "$SCOPE" --id "$id" --name "$name" --region "$REGION" \
    --query 'WebACL.Rules[*].{Name:Name,Priority:Priority}' --output table 2>/dev/null || true
  echo "  Associated resources:"
  aws wafv2 list-resources-for-web-acl --web-acl-arn "$arn" --resource-type CLOUDFRONT --region "$REGION" \
    --query 'ResourceArns' --output table 2>/dev/null || echo "  (check Console)"
done 2>/dev/null || {
  echo "Run each Web ACL manually. Get Id from: aws wafv2 list-web-acls --scope CLOUDFRONT --region us-east-1"
}

echo ""
echo "Screenshot: WAF & Shield -> Web ACLs -> [Your ACL] -> Rules tab (capacity units)"
