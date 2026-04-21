# AWS Cost Debugging Investigation

Scripts and checklist for investigating Amplify + WAF cost drivers and implementing mitigations.

## Prerequisites

- AWS CLI configured with `aws configure`
- Permissions: `ce:*`, `wafv2:*`, `cloudwatch:GetMetricStatistics`, `budgets:*` (or use Console)

## Quick Start

```bash
# 1. Cost Explorer (Amplify + WAF by usage type)
./01-cost-explorer.sh 2026-01-01 2026-01-31

# 2. List WAF Web ACLs and rules
./02-waf-webacls.sh us-east-1

# 3. WAF metrics (replace with your Web ACL name/id from step 2)
./03-waf-metrics.sh YourWebACLName abc123def 14

# 4. Budget + Anomaly Detection
./04-budget-anomaly.sh 50 your@email.com
```

---

## AWS Console Navigation (Exact Steps)

### 1.1 Cost Explorer – Service + Usage Type

1. AWS Console → **Billing** → **Cost Explorer**
2. **Create report** or use existing
3. **Time range:** Last 30 days (or custom: Jan 2026)
4. **Group by:** Service → Filter: `AWS Amplify`, `AWS WAF`
5. **Create second view:** Group by → **Usage Type** (and Region if needed)

**Screenshot:** Amplify line items (Hosting-GB, Hosting-Requests, BuildMinutes, DataTransfer-Out); WAF (WebACL, Rule, Request)

---

### 1.2 WAF – Web ACLs and Associations

1. AWS Console → **WAF & Shield** → **Web ACLs**
2. For each Web ACL: **Associated AWS resources** tab
3. Note CloudFront distribution ID(s) or ALB ARN(s)

**Screenshot:** Web ACL names, associated resources

---

### 1.3 WAF – Managed Rule Groups and Rules

1. WAF & Shield → **Web ACLs** → [Your Web ACL] → **Rules**
2. List all rules (managed + custom)
3. Note capacity units per managed rule group

**Screenshot:** Full rule list with capacity units

---

### 1.4 Amplify – App Billing

1. AWS Console → **Amplify** → [Your App] → **App settings** → **Billing**
2. Or: **Hosting** → Build history

**Screenshot:** Build minutes, hosting requests, build count (last 60 days)

---

### 2.1 WAF – CloudWatch Metrics

1. WAF & Shield → **Web ACLs** → [Your Web ACL] → **Monitoring**
2. View **Allowed requests** and **Blocked requests** (last 14 days)
3. **Sampled requests** (if enabled) for top rules

**Screenshot:** Allowed vs Blocked over time, spike dates

---

### 2.2 CloudFront Access Logs (Optional)

1. **CloudFront** → **Distributions** → [Amplify’s distribution] → **General**
2. **Standard logging** → Enable, set S3 bucket
3. Wait 24–48h, analyze: top URIs, IPs, user agents

---

### 2.3 Amplify – Build History

1. Amplify → [Your App] → **Hosting** → **Build history**
2. Filter last 60 days, count builds, note triggers

---

## Decision Tree

| If | Then |
|----|------|
| WAF Request count high? | → Blocked >> Allowed? → **Yes:** Bot traffic → Remove WAF or simplify rules |
| | → **No:** Legitimate high → Caching, rate limits |
| | → Request count low? → Rule/capacity cost → Fewer rule groups |
| Build minutes high? | → Reduce branches, disable auto-builds |
| Hosting requests high? | → Enable caching, check bots |
| Data transfer high? | → Optimize images, enable caching |

---

## Cost-Saving Options

| Action | Savings | Risk |
|--------|---------|------|
| **Remove WAF** | ~$10/mo | No bot/DDoS protection; OK for static marketing site |
| **Simplify WAF rules** | 20–50% | Slightly less protection |
| **Add rate-based rule** | Variable | May block burst traffic |
| **Block scanner paths** | Variable | Maintain allowlist |
| **Enable CloudFront caching** | Lower origin | Set cache headers (index.html no-cache, assets long) |
| **Disable unused branches** | Build minutes | None |
| **Budget + Anomaly Detection** | Alerting | None |

---

## Prioritized Checklist

1. [ ] Cost Explorer – Amplify and WAF by Usage Type (5 min)
2. [ ] WAF – List Web ACLs, rules, capacity (5 min)
3. [ ] WAF – CloudWatch Allowed/Blocked metrics (5 min)
4. [ ] Amplify – Build history and billing (5 min)
5. [ ] Apply decision tree with Phase 1 data
6. [ ] If WAF requests high – Enable logs, analyze
7. [ ] Implement mitigations – Budget first, then WAF removal if appropriate

---

## Disassociate WAF (If Removing)

1. WAF & Shield → **Web ACLs** → [Your ACL] → **Associated AWS resources**
2. Select CloudFront distribution → **Disassociate**
