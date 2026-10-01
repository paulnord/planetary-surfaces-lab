# Mapping Planetary Surfaces

Static Astronomy 101 image viewer. Serve the `dist` directory with any static HTTP server. No accounts, backend, tracking, or student data collection are added by the application. Hosting access is managed separately by Sites.

Includes all 222 image files from the supplied PLANSCI collection, retaining body/folder labels and filenames; some are duplicates in the original mixed ICRATER archive. The original seven-page PDF is unchanged. Five additional mission images have dates, credits, scientific processing notes, and source URLs in `dist/catalog.json`.

Students use the PDF/paper for Activity 1, sketches, and responses. The web interface covers image viewing for Activities 2–3 and optional mission extensions; it does not automatically answer or submit the assignment.

To add images, place originals and small previews in `dist/assets`, then append catalog records. Keep physical scales distinct from downsampled display pixels. Original-image provenance is incomplete in the supplied collection.

Validation: JavaScript syntax, catalog IDs, all local image assets and thumbnails, image decoding, handout presence, and default section selections. No browser QA or supported WebMCP execution context was available for this static site. WebMCP is feature-detected and optional.


## GitHub Pages

The prepared workflow in `.github/workflows/pages.yml` publishes `dist/` after pushes to `main`, following the same setup as `paulnord/gravity-orbit-lab`. JavaScript syntax, image references, and viewer geometry must pass before publishing. Set the repository's Settings → Pages → Source to **GitHub Actions**.

Run the checks locally with:

```sh
node --check dist/app.js
node check-assets.cjs
node check-viewer.cjs
```

The existing Sites publication is managed separately. This GitHub workflow does not update it. Image credits and source links remain in the image catalog; no blanket license is asserted for the original course materials.
