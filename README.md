# Ray Zheng — Level Design Portfolio

Bilingual static portfolio for GitHub Pages. No build or package installation is required.

## Pages

- `index.html` / `zh/index.html` — English / Chinese portfolio home
- `projects/thunder-temple.html` / `zh/projects/thunder-temple.html` — Thunder Temple
- `projects/original-level.html` — ARPG level blockout; Chinese equivalent under `zh/`
- `projects/kcd2-analysis.html` — Kingdom Come: Deliverance II analysis
- `projects/elden-ring-research.html` — Elden Ring research

The new home and Thunder Temple pages use `assets/portfolio.css` and `assets/portfolio.js`. Existing case studies retain `assets/styles.css`. All pages share the existing `assets/site.js` navigation script.

## Local preview

Run from the repository root:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000/zh/index.html`. Stop the server with Ctrl+C.

## Media and case-study content

Thunder Temple gameplay clips are in `assets/media/thunder-temple/`, each paired with a WebP poster. The Bilibili walkthrough BV1eAnb6xEyi is shared by both languages and uses Chinese commentary.

`assets/images/thunder-temple/` contains 15 images extracted from the author's design and Q&A documents. The case study covers mechanic teaching, arc-based spatial puzzles, combat application, architecture, and scope decisions. Circuit plans retain their full proportions and link to larger images. The courtyard environment extension is explicitly labelled as a proposal.

`assets/images/thunder-temple-entry-gameplay.webp` is the supplied gameplay screenshot with the lower-left HUD removed using image editing. It is used **only on the home pages**, not in either project detail page. The earlier concept asset is retained but no longer referenced. The detail cover is a courtyard blockout image from the documents.

Edit both language versions when replacing images or changing design explanations. The height images show two rail states from different viewpoints, not a matched-camera comparison. Full-level maps and additional original screenshots can still be added later.

## Publication

GitHub Pages serves the existing configured publishing branch. Local changes on `portfolio-redesign` do not update the public site until they are deliberately published through the repository workflow.
