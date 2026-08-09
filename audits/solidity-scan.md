# SolidityScan (QuickScan) — NET (Netlink)

**Source:** SolidityScan QuickScan
**Network:** Polygon (Polygon Mainnet)
**Contract:** `0x0e893b239094a5c573373d44cf1c7d03576b95cb`
**Report:** [View on SolidityScan](https://solidityscan.com/quickscan/0x0e893b239094a5c573373d44cf1c7d03576b95cb/polygonscan/mainnet)

## Summary

| Security Score | Threat Score | Lines of Code | Scan Duration |
|---|---|---|---|
| 94.64/100 (Great) | 68/100 (Moderate Risk) | 14 | 3 secs |

> Note: The Security Score (code-level vulnerability scan) and Threat Score (on-chain risk assessment) are separate metrics. The Threat Score is lower primarily due to holder concentration — see Notes below.

## Vulnerability Breakdown

| Severity | Count |
|---|---|
| Critical | 0 |
| High | 0 |
| Medium | 0 |
| Low | 3 |
| Informational | 5 |
| Gas | 2 |
| **Total** | **10** |

This report has not been verified by the SolidityScan team (self-published scan).

## Threat Analysis

| Metric | Value |
|---|---|
| Threat Score | 68/100 — Moderate Risk |
| High Risk items | 0 |
| Moderate Risk items | 1 |
| Low Risk items | 1 |
| No Impact items | 21 |
| Beneficial items | 6 |
| Unavailable items | 10 |

### Key Checks

| Check | Result |
|---|---|
| Honeypot | Not a honeypot |
| Buy / Sell / Transfer Tax | Unavailable (no live DEX pair) |
| Source Code Verified | Beneficial — verified |
| Presence of Minting Function | No Impact — `_mint` not detected as a callable function |
| Presence of Burn Function | Beneficial — tokens cannot be burned via this contract path |
| Solidity Pragma Version | Low Risk — can compile with an older Solidity version |
| Proxy-Based Upgradable Contract | Beneficial — not upgradable |
| Owners Cannot Blacklist Tokens/Users | No Impact — confirmed |
| Pausable Contract | No Impact — not pausable |
| Critical Administrative Functions | No Impact — not detected |
| Contract/Token Self Destruct | No Impact — cannot self-destruct |
| ERC20 Race Condition | No Impact — not vulnerable |
| Renounced Ownership | Beneficial — ownership renounced |
| **Users With Token Balance More Than 20%** | **Moderate Risk — see holder table below** |
| Overpowered Owners | No Impact — no owner-controlled functions defined |
| No Cooldown Code | Beneficial |
| Owners Whitelisting Tokens/Users | No Impact |
| Owners Can Set/Update Fees | No Impact |
| Hardcoded Addresses | No Impact |
| Owners Updating Token Balance | No Impact |
| Owner Wallet Token Supply | No Impact — owner wallet holds 0 tokens |
| Function Retrieving Ownership | No Impact — not detected |
| Malicious Typecasting of Address | No Impact — not detected |
| Token Supply Not Fixed | No Impact — supply is fixed at deployment |
| Gas Abuse via Malicious Minting | No Impact — not detected |
| Code Injection via Token Name | No Impact — not detected |
| No Hidden Owner | Beneficial |
| Other Addresses With Special Access | No Impact — none detected |
| External Call Risk in Critical Functions | No Impact — none detected |

## Holders With Balance > 20%

| Address | % of Supply |
|---|---|
| `0x6c9a0d8b1c7a95a323d744de30cf027694710633` (PinkLock, multisig) | 62.045% |
| `0xd388846d060384041a122e82de59fbb840477e55` | 10.101% |
| `0x1c7fb56b66de5495f38c0fd4e1aed1a437145623` | 9.091% |
| `0x4933d25b52fcd46b6ba0b94ebc5ace91a3ce03d3` | 5.0% |

## Notes

**"Users With Token Balance More Than 20%" — Moderate Risk:** The top address (62.045%) is the same PinkLock-locked, multisig-controlled allocation documented in `goplus-scan.md` and `certik-scan.md`. This is not a freely movable wallet under single-key control and does not represent an immediate sell or rug-pull risk. As with holder concentration generally, this will decrease naturally as tokens are distributed through future ecosystem activity.

**Buy/Sell/Transfer Tax "Unavailable":** Expected — NET has no live DEX listing yet, so there is no active trading pair for tax simulation.

**Scope note:** A separate GitHub-based scan of the same source code (rather than the deployed on-chain contract) returns a Threat Score of 98.5/100 (Low Risk), because holder-distribution checks are unavailable without on-chain data. The on-chain scan above is the more complete and representative result, since it reflects live deployment state.

- This is an automated scan, not a manual audit. Report may change automatically if contract metadata or holder distribution updates.
- Always re-check the live report at the link above for the latest result.

> **Disclaimer:** SolidityScan scans are automated and provide no 100% guarantee. This check is a reference only, not a basis for investment decisions.
