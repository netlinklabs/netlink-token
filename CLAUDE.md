# CLAUDE.md — netlink-token

Context file for Claude Code working in this repo. Read this before making any changes.

## Project

NET token landing page + docs for **Netlink Ecosystem Token**, a utility token on Polygon PoS.

- Symbol: `NET`
- Contract: `0x0e893B239094A5c573373d44CF1C7D03576b95cb` (verified, checksum-sensitive)
- Chain: Polygon mainnet (chainId 137)
- On-chain token name: **"Netlink"**
- Deployments: `netlinktoken.vercel.app` → custom domain `netlinktoken.com`
- Docs: `docs.netlinktoken.com` (Mintlify)

## Branding rules (strict)

- Always write **"Netlink"** in UI copy, marketing text, docs. Never "Netlink.bio" or "NetlinkToken" as a brand name.
- `netlink.bio` and `netlinktoken.com` are URLs only — not the brand name.
- On-chain / contract references: token name is "Netlink", symbol "NET".

## Language

- All UI text, error messages, and user-facing strings: **English only**.
- Explanatory comments in code can be any language, but shipped text must be English.
- This applies even if the person instructing you writes in Indonesian.

## Multi-assistant codebase — be careful

- Several AI assistants (Claude, ChatGPT, Gemini, Kimi) work on this repo across different sessions.
- **Always pull the latest version of a file before editing it.** Do not assume your context is current.
- Do not rewrite or refactor working logic you don't fully understand the origin of — flag it and ask instead of silently changing it.
- Prefer small, scoped diffs over full-file rewrites unless explicitly asked.

## Security context (don't "fix" these — they're already handled)

- CertiK / scanner "Is Mintable" flag = **false positive**. Standard OpenZeppelin ERC20, `_mint()` called once in constructor only. Do not modify minting logic to "resolve" this.
- 62.05% of supply is held by a locked wallet (PinkLock + multisig). Flagged by scanners as centralization risk — this is documented and intentional, not a bug.
- Do not add new mint, pause, or admin-override functions without explicit instruction — token contract behavior is finalized and audited via automated scans.

## Presale history (for context, don't resurrect old code paths)

- All 3 presale phases were cancelled; all contributions refunded on-chain.
- Old presale banner/UI on `netlinktoken.com` may still reference this — cleanup is pending, not a sign presale is active.
- Do not re-enable or reference presale purchase flows unless explicitly instructed.

## DEX / liquidity

- QuickSwap test pool exists but liquidity was withdrawn (near-empty pool, causes "low liquidity" wallet warnings). This is a known, unresolved state — don't "fix" by adding liquidity without instruction.
- No public DEX listing push planned until after main Netlink app launch + Presale Phase 3.

## Before committing

- Run through branding + language rules above on any UI-facing change.
- Keep diffs scoped to what was asked — don't touch unrelated sections.
- If something looks broken or inconsistent but wasn't part of the task, flag it in the PR description rather than fixing it inline.
