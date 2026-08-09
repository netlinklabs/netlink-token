# GoPlus Security Detection — NET (Netlink)

**Source:** GoPlus Token Security Detection Service
**Network:** Polygon (Chain ID 137)
**Contract:** `0x0e893B239094A5c573373d44CF1C7D03576b95cb`
**Report:** [View on GoPlus](https://gopluslabs.io/token-security/137/0x0e893B239094A5c573373d44CF1C7D03576b95cb)

## Summary

| Risky items | Attention items |
|---|---|
| 0 | 2 (see Notes below) |

## Basic Info

| Field | Value |
|---|---|
| Token Symbol | NET |
| Token Name | Netlink |
| Token Contract Address | `0x0e89...6b95cb` |
| Contract Creator | `0xb4ed...4b0e4e` |
| Contract Owner | -- (none / renounced) |
| Owner's Holdings | 0.00 (0.00%) |
| Creator's Holdings | 989,999.01 NET (1.00%) |

## Contract Security

| Check | Result |
|---|---|
| Contract source code verified | ✅ Pass |
| No proxy | ✅ Pass |
| No mint function | ✅ Pass |
| No function found that retrieves ownership | ✅ Pass |
| Owner can't change balance | ✅ Pass |
| No hidden owner | ✅ Pass |
| This token can not self destruct | ✅ Pass |
| No external call risk found | ✅ Pass |
| This token is not a gas abuser | ✅ Pass |

## Honeypot Risk

| Check | Result |
|---|---|
| Buy Tax | Unknown |
| Sell Tax | Unknown |
| Does not appear to be a honeypot | ✅ Pass |
| No codes found to suspend trading | ✅ Pass |
| The token can be bought | ✅ Pass |
| No trading cooldown function | ✅ Pass |
| No anti-whale (unlimited number of transactions) | ✅ Pass |
| Anti whale can not be modified | ✅ Pass |
| Tax cannot be modified | ✅ Pass |
| No blacklist | ✅ Pass |
| No whitelist | ✅ Pass |
| No tax changes found for personal/assigned addresses | ✅ Pass |

## Holder Distribution

| Metric | Value |
|---|---|
| Token Holders | 846 |
| Total Supply | 99,000,000.00 NET |
| Top 10 Holders Ratio | 96.91% |

**Top holders:**

| Address | Amount | % |
|---|---|---|
| PinkLock02 (locked) | 61.425M | 62.05% |
| `0xd3...7e55` | 10M | 10.10% |
| `0x1c...5623` | 9M | 9.09% |
| `0x49...03d3` | 4.95M | 5.00% |
| `0x18...ce5e` | 3M | 3.03% |
| `0x0d...ff7d` | 2M | 2.02% |
| `0x25...8731` | 1.95M | 1.97% |
| `0x2e...ef70` | 1.625M | 1.64% |
| `0x0a...6b4d` | 1M | 1.01% |
| `0xb4...0e4e` (Creator) | 989.999K | 1.00% |

## PinkLock02 Vesting Schedule

| Amount | Start | End |
|---|---|---|
| 10M | 2025-12-05 | 2026-06-04 |
| 10M | 2025-12-05 | 2026-12-04 |
| 10M | 2025-12-05 | 2026-12-04 |
| 10M | 2025-12-05 | 2027-06-04 |
| 9.9M | 2025-12-08 | 2027-12-08 |
| 9.9M | 2025-12-08 | 2027-07-08 |
| 1.625M | 2025-12-05 | 2026-06-04 |

## Notes

- Buy/Sell tax reported as "unknown" by GoPlus. This is expected: NET has no DEX listing yet, so there is no live trading pair for tax simulation.
- Attention items above relate to standard disclosures (tax fields unknown, no live liquidity), not to contract risk. No risky items were detected.
- This is an automated, real-time on-chain scan, not a manual audit. Report may change automatically if contract metadata or ownership status update.
- Always re-check the live report at the link above for the latest result.

> **Disclaimer:** GoPlus helps determine if a smart contract may be a scam, but offers no 100% guarantee. This check is a reference only, not a basis for investment decisions.
