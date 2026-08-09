# CertiK Skynet Token Scan — NET (Netlink)

**Source:** CertiK Skynet Token Scan
**Network:** Polygon
**Contract:** `0x0e893B239094A5c573373d44CF1C7D03576b95cb`
**Report:** [View on CertiK Skynet](https://skynet.certik.com/tools/token-scan/polygon/0x0e893B239094A5c573373d44CF1C7D03576b95cb)

## Summary

| Token Scan Score | Alerts | Attentions | Passed |
|---|---|---|---|
| 72/100 | 2 | 0 | 21 |

## Token Overview

| Field | Value |
|---|---|
| Deploy Time | ~11 months ago |
| Token Address | `0x0e8...5cb` |
| Deployer Address | `0xB4e..e4E` |

## Scan Results

| Check | Category | Result |
|---|---|---|
| Is Mintable | Centralization | Alert (see Notes) |
| Major Holder Ratio | Volatile Market, Centralization | Alert — 110.02% aggregate (excluding creator); see Notes |
| Buy Tax | Market | Pass — 0% |
| Sell Tax | Market | Pass — 0% |
| Cannot Buy | Market | Pass — Buy restriction not detected |
| Is Honeypot | Rugpull | Pass — Honeypot risk not found |
| Has Blacklist | Centralization | Pass — Not found |
| Has Whitelist | Centralization | Pass — Not found |
| Is Anti Whale | Market | Pass — Not found |
| Can Modify Tax | Centralization | Pass — Cannot be modified |
| Cannot Sell All | Market | Pass — Restriction not detected |
| Not Open Source | Transparency | Pass — Token is open source |
| Has Hidden Owner | Centralization | Pass — Not found |
| Can Self Destruct | Rugpull | Pass — Not found |
| Is Proxy Contract | Centralization | Pass — Not a proxy |
| Can Modify Balance | Centralization | Pass — Cannot be modified |
| Can Withdraw Token | Centralization | Pass — No withdrawal functions found |
| Has External Calls | General | Pass — Not found |
| Can Regain Ownership | Centralization | Pass — Backdoor not found |

## Top 10 Token Holders

| Address | Amount | % |
|---|---|---|
| `0x6c9a...710633` (PinkLock, multisig) | 61.4M | 62.05% |
| `0xd388...477e55` | 10M | 10.10% |
| `0x9973...d87b10` | 10M | 10.10% |
| `0x1c7f...145623` | 9M | 9.09% |
| `0x4933...ce03d3` | 5M | 5.00% |
| `0x1899...c7ce5e` | 3M | 3.03% |
| `0x0de2...45ff7d` | 2M | 2.02% |
| `0x254c...bd8731` | 2M | 1.97% |
| `0x2ec8...19ef70` | 1.6M | 1.64% |
| `0x0a14...2c6b4d` | 1M | 1.01% |

Total Supply: 99M | Top 10 Holders Ratio (as displayed): >100% (aggregation artifact — see Notes)

## Notes

**"Is Mintable" alert:** The contract's `_mint()` function is called exactly once, inside the constructor, during deployment to issue the fixed total supply of 99,000,000 NET. There is no separate, callable `mint()` function in the source code, and no way to create additional tokens after deployment. This is a common false positive from automated scanners that detect the presence of `_mint` in source code without distinguishing constructor-only minting from an exploitable mint function.

**"Major Holder Ratio" alert:** The top holder address (62.05%) is the same PinkLock-locked, multisig-controlled allocation documented in the GoPlus scan and PinkLock vesting schedule (see `goplus-scan.md`). This is not a freely movable wallet under single-key control. The reported ">100%" aggregate ratio is a display artifact from summing top-10 percentages and does not indicate supply inflation — total supply remains fixed at 99,000,000 NET.

- This is an automated scan, not a manual audit. Report may change automatically if contract metadata or holder distribution updates.
- Always re-check the live report at the link above for the latest result.

> **Disclaimer:** CertiK Skynet scans are automated and provide no 100% guarantee. This check is a reference only, not a basis for investment decisions.
