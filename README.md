# 🪩 Netlink (NET)

Official smart contract and transparency repository for **Netlink (NET)** — a community-driven utility token deployed on the **Polygon (PoS)** network.

---

## 📄 Contract Details
| Property | Information |
|-----------|--------------|
| **Token Name** | Netlink (NET) |
| **Network** | Polygon (PoS) — Chain ID 137 |
| **Contract Address** | [`0x0e893B239094A5c573373d44CF1C7D03576b95cb`](https://polygonscan.com/token/0x0e893B239094A5c573373d44CF1C7D03576b95cb) |
| **Total Supply** | 99,000,000 NET |
| **Standard** | ERC-20 (EVM Compatible) |
| **Deployer** | Netlink Developer Team |

> Always verify the official contract address before any on-chain interaction.

---

## 🔐 Security & Transparency Overview
| Category | Status | Reference / Notes |
|-----------|---------|------------------|
| **GoPlus Security Scan** | ✅ Passed *(no critical risk detected)* | [View Report](https://gopluslabs.io/token-security/137/0x0e893B239094A5c573373d44CF1C7D03576b95cb) |
| **Ownership Status** | 🔒 Locked / Renounced | Confirmed on PolygonScan |
| **Source Code Verification** | ✅ Verified | Public on PolygonScan |
| **Certora Formal Verification** | 🧠 Planned | Basic invariant testing (transfer, mint, burn) |
| **Audit Archive** | 📂 Available | `/audits/` folder contains scan snapshots |

---

## 🧾 GoPlus Live Security Summary
**Latest check:** November 2025  
> GoPlus performs real-time on-chain security analysis (not manual review).  
> Report may change automatically when contract metadata or ownership status updates.

| Risk Category | Detected | Description |
|----------------|-----------|-------------|
| Mint / Unlimited Supply | ❌ | No mint function detected |
| Blacklist / Freeze | ❌ | No blacklist control |
| Trading Fees / Tax | ℹ️ *Unknown* | No live trading pair yet, tax not simulated |
| Ownership Renounced | ✅ | Ownership locked for transparency |
| Proxy Contract | ❌ | No proxy pattern detected |
| Honeypot / Malicious Pattern | ❌ | No malicious code patterns detected |

> A local copy of this summary is stored in `/audits/goplus-scan.txt`.

---

## 📁 Repository Structure
```
netlink-token/
├── assets/                  Logos, whitepaper, and brand images
├── audits/                  Security scan snapshots (e.g. goplus-scan.txt)
├── docs/                    Source for docs.netlinktoken.com (Mintlify)
├── smart-contracts/         Netlink.sol and verified source input
├── index.html                NET token landing page (netlinktoken.com)
└── README.md                 This file
```

---

## 🔗 Links
- Website: [netlinktoken.com](https://netlinktoken.com)
- Documentation: [docs.netlinktoken.com](https://docs.netlinktoken.com)
- Contract on PolygonScan: [0x0e89...6b95cb](https://polygonscan.com/token/0x0e893B239094A5c573373d44CF1C7D03576b95cb)

---

## ⚠️ Disclaimer
NET is a utility token intended for use within the Netlink ecosystem. It is
not an investment product, and nothing in this repository or related
materials should be construed as financial advice. Always verify the
official contract address above before any on-chain interaction.
