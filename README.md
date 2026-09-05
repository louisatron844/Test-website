# A.F.E Plumbing & Bathroom Services

Production-ready single landing page (static HTML/CSS/JS). Phone-first: no forms, no email capture.

## Files

| File | Purpose |
|------|---------|
| `index.html` | Landing page markup |
| `styles.css` | Design tokens and layout |
| `config.js` | Phone / WhatsApp constants only |
| `script.js` | Applies `tel:` / WhatsApp hrefs from config; hides mobile bar near footer |

## Preview locally

**Option A — open the file**

```bash
open index.html
# or double-click index.html in your file manager
```

**Option B — static server**

```bash
cd /path/to/afe-plumbing
npx serve .
```

Then open the URL shown (usually `http://localhost:3000`).

## Contact config

Edit `config.js` only when the number or WhatsApp link changes:

```js
window.AFE_CONFIG = Object.freeze({
  phoneDisplay: "07739 734895",
  phoneTel: "+447739734895",
  whatsappUrl: "https://wa.me/447739734895",
});
```

All call and WhatsApp buttons are wired via `data-afe-tel` / `data-afe-wa` and filled from these constants — do not hardcode `tel:` or `wa.me` links elsewhere.

## Deploy / copy into Test-website

To publish via [louisatron844/Test-website](https://github.com/louisatron844/Test-website):

1. Clone or open that repo on your machine (do this yourself; this package does not include a git clone).
2. Copy the contents of this folder into the repo root (or a subfolder), e.g.:

   ```bash
   cp -R /path/to/afe-plumbing/* /path/to/Test-website/
   ```

3. Commit and push, or open a PR as usual.
4. Enable GitHub Pages on the repo (Settings → Pages → Deploy from branch) if you want a public URL.

A zip of this folder (`afe-plumbing.zip`) is provided for easy handoff.

## Design notes

- Cream / soft teal residential look (`#F7F3EB`, `#2A6B63`)
- Inter via Google Fonts + system fallback
- Sticky header + sticky mobile call bar (≤767px)
- No stars/widgets on reviews — plain text quotes only
