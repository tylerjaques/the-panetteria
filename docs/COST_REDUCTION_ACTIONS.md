# Cost Reduction Actions – the-panetteria

## Hosting Confirmation (Completed)

- **Site:** www.thepanetteria.com
- **DNS:** CNAME to `d4f6a6ybuxd6u.cloudfront.net` (CloudFront)
- **Hosting:** AWS Amplify (uses CloudFront for delivery)

---

## Cost Analysis (Feb 2026)

| Service | Cost | Breakdown |
|---------|------|-----------|
| **AWS Amplify** | $14.77 | AmplifyWAF: $14.46, DataTransfer: $0.30, Storage: $0.005 |
| **AWS WAF** | $8.72 | WebACL: $4.82, Rule: $3.86, Request: $0.04 |
| **Total** | ~$23.50 | |

**Conclusion:** WAF is ~$9/mo. For a static marketing site with no auth/forms/PII, removing WAF is recommended and saves ~$9/mo.

---

## Decision Tree Result

Per `scripts/aws-cost-debug/README.md`:

- WAF cost is significant (~$9/mo)
- Site type: static marketing (menu, about, contact)
- **Recommendation:** Remove WAF

---

## Action 1: Remove WAF (Saves ~$9/mo)

**Steps (AWS Console):**

1. Go to **WAF & Shield** → **Web ACLs**
2. Find the Web ACL associated with your Amplify app’s CloudFront distribution
3. Open **Associated AWS resources**
4. Select the CloudFront distribution → **Disassociate**

**Note:** Amplify may manage WAF via its own integration. If so, check **Amplify** → [Your App] → **Hosting** → **Security** and disable WAF there.

---

## Action 2: Disable Unused Amplify Branches

**Steps:**

1. **Amplify** → [Your App] → **App settings** → **General**
2. For each non-production branch, disable auto-builds
3. Or: **Hosting** → **Build settings** → reduce branches that trigger builds

---

## Action 3: Budget + Anomaly Detection (Alerting)

Run:

```bash
./scripts/aws-cost-debug/04-budget-anomaly.sh 50 your@email.com
```

This creates a $50/month budget and anomaly alerts. If the budget already exists, use **Billing → Budgets** in the AWS Console to verify or create one. Confirm the email subscription for alerts.

---

## Action 4: CloudFront Caching (Lower Origin Requests)

A `customHttp.yml` file has been added to the project root to set cache headers:

- **index.html:** short cache (SPA updates)
- **JS/CSS assets:** long cache (content-hashed filenames)

Redeploy for changes to take effect.
