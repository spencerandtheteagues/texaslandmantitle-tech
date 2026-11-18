# Texas Landman & Title Tech (`texaslandmantitle.tech`)

The empirical industry reference, 24-tool software benchmark, unit-economics study, and Texas mineral-law/RRC news publication for **`texaslandmantitle.tech`**.

## Domain & Registrar Facts (Verified 2026-11-17)
- **Exact Registered Domain:** `texaslandmantitle.tech` (spelled with `landman`, neither `and` nor `&`).
- **Hostinger Account Holding Domain:** `spencertheteague@gmail.com` (same Hostinger account holding `artificiallandman.io`, KVM2 `srv2162749` / `server2` at `82.180.139.77`, and KVM8 `srv2162799` / `server8` at `82.180.139.100`).
- **Current DNS State:** Hostinger nameservers (`cosmos.dns-parking.com` / `nova.dns-parking.com`), default `A` record pointing to `82.180.139.100`. Repoint `A @` to `82.180.139.77` (`server2`) when ready to serve publicly via `deploy/Caddyfile.snippet`.

## Commands
```bash
npm run build     # Compile all 13 HTML pages + llms.txt + llms-full.txt + JSON APIs + sitemap/RSS into dist/
npm test          # Run automated verification suite (routes, #1 tie, citations, JSON-LD, links, theme isolation)
PORT=4320 npm run serve   # Start local preview server at http://127.0.0.1:4320/
npm run queue     # Inspect staged editorial news drafts in content/drafts/
```
