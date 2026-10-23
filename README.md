# Ray Zheng — Level Design Portfolio

Bilingual, buildless portfolio for GitHub Pages. Open `zh/index.html` for Chinese and `index.html` for English. No package installation or framework build is required.

## Pages

- Home: `index.html` / `zh/index.html`
- Thunder Temple: `projects/thunder-temple.html`
- Soulslike level blockout: `projects/original-level.html`
- Kingdom Come: Deliverance II analysis: `projects/kcd2-analysis.html`
- Elden Ring data study: `projects/elden-ring-research.html`

Each project has a Chinese equivalent under `zh/projects/`. Language switching stays on the same project. All ten pages share `assets/design.css` and `assets/design.js`; earlier styles and scripts are retained but no longer loaded.

## Preview

Double-click `preview.cmd` on Windows with Python installed. It starts a loopback-only server on an available port and opens the Chinese home page in the default browser. Keep the terminal open while reviewing; close it or press Ctrl+C when finished. The launcher has no third-party dependencies.

For a quick review, open `zh/index.html` directly in a browser. To test video embeds and local media over HTTP, run from the repository root:

```sh
python -m http.server 8000 --bind 127.0.0.1
```

Open `http://127.0.0.1:8000/zh/index.html`; stop the server with Ctrl+C. Third-party video playback can depend on platform, network and browser restrictions. Every external player has a direct watch link.

## Design and content

The home page prioritizes the original Thunder Temple level, followed by the Soulslike blockout, KCD II analysis and Elden Ring study. All pages use a charcoal theme with soft grey text and restrained warm accents.

Case studies use one 940px reading column. Titles, explanations and evidence run vertically, aligned to the same left edge. There are no side-by-side text/image stories or galleries nested in narrow columns. Gameplay screenshots, diagram previews and videos share a 16:9 frame with `object-fit: contain`; originals remain uncropped and open at full size. Explicit state or before/after comparisons use two equal frames on desktop and stack on phones. The KCD II subtitle excerpt is treated as a compact text strip. Research chart previews are slightly dimmed for the dark theme; image files remain unchanged.

Every case shares its project facts, sticky chapter navigation and next-project links. The mobile chapter menu expands vertically; tables scroll inside their own containers. Images retain intrinsic dimensions, and their frames reserve layout space before loading.

All original case-study images, clips, report links and external walkthrough sources are retained. Thunder Temple covers mechanic teaching, arc-based spatial puzzles, combat applications, architecture and design decisions. Its courtyard extension remains explicitly labelled as a proposal. Both language versions use Bilibili walkthrough BV1eAnb6xEyi with Chinese commentary; no English voice-over is implied.

`assets/images/thunder-temple-entry-gameplay.webp` is the supplied gameplay screenshot with the lower-left HUD removed. It is used only on the home pages. The courtyard blockout image from the author's design document appears in the architecture chapter. Height comparison images show different rail states from different viewpoints, not a matched-camera before/after.

Edit both language versions when changing explanations or replacing images. Preserve figure proportions and their direct full-image links. Keep video clips user-initiated, with controls and no autoplay.

## Publication

GitHub Pages publishes `main` from the repository root. Prepare and review changes on a feature branch, then merge into `main` and push to trigger publication. Confirm the Pages deployment succeeds before treating a change as live.
