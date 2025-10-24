# Repository Guidelines

## Project Structure & Module Organization
`history/` contains the Node logging service: `server.js` writes to `history/history.txt`, while `formatlog.js` pretty-prints streamed logs. `chrome/` holds the Manifest V3 extension (`main.js`, `bg_page.js`, `manifest.json`) that forwards navigation events. `safari/` houses the Xcode workspace; keep shared Swift sources under `Shared` targets so macOS and iOS builds stay aligned.

## Build, Test, and Development Commands
- `cd history && npm install` installs the server dependencies.
- `cd history && node server.js` starts the listener on port 3000; adjust the `timeZone` constant as needed.
- `cd history && tail -f history.txt | node formatlog.js` monitors new entries.
- Open `safari/safari.xcodeproj` in Xcode to build or sign the native extensions.
- Load `chrome/` via `chrome://extensions` → “Load unpacked” to exercise the MV3 build.

## Coding Style & Naming Conventions
Stick to two-space indentation and ES modules across JavaScript files. Use `const` for values that do not change, keep network logic inside `bg_page.js`, and isolate DOM observers within `main.js`. For Swift, adopt lowerCamelCase identifiers and drop reusable code into the `Shared` targets. Follow the existing lowercase, hyphenated naming for extension assets and manifest properties.

## Testing Guidelines
Automated tests are not yet wired up; add new suites under `history/` and register the command in `package.json` if you introduce Vitest or Jest. Meanwhile, validate changes manually: confirm the server logs port 3000 on start, watch `history/history.txt` for entries per navigation (including SPA transitions), and reload the Chrome unpacked extension after edits. Use Xcode simulators or signed builds to verify Safari messaging. Summarize manual checks in each PR.

## Commit & Pull Request Guidelines
Commits in this repo use short, present-tense summaries such as `update installation instructions`; mirror that style and keep unrelated platforms in separate commits. Pull requests should describe the intent, call out affected browsers or services, document manual testing (e.g., “Chrome: navigated example.com, entry appended”), and link relevant issues. Attach screenshots or log snippets whenever UX or output changes.

## Security & Configuration Tips
Keep the server bound to localhost; if you expose it, add HTTPS and authentication. Update the `timeZone` constant before deployment so timestamps reflect the target region. When the server URL changes, touch both `chrome/manifest.json` and the Safari request configuration. Do not commit personal browsing data—ensure `history/history.txt` stays ignored and scrub demo logs before pushing.
