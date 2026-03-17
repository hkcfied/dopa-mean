# Contributing to Dopa-Mean

Thanks for being here. Dopa-Mean is a small, focused tool and contributions should stay that way — small and focused.

## What we're looking for

- **New app support** — adding more social media / streaming apps
- **Accessibility** — keyboard navigation, ARIA improvements, screen reader support
- **Translations** — the facts database and UI strings in other languages
- **Bug fixes** — anything broken on a specific device or browser

We're not looking for: analytics, monetization, gamification, streaks, notifications, or anything that makes this tool more like the apps it's trying to interrupt.

## Adding a new app

This is the easiest contribution and has the most impact.

**1. Get icons**

You need two 512×512 PNG icons — one matching the iOS App Store icon, one matching the Android Play Store icon.

Place them at:
```
src/assets/icons/ios/{appId}.png
src/assets/icons/android/{appId}.png
```

Also add a 512×512 icon to `public/icons/{appId}.png` (used in the PWA manifest).

**2. Add the app to the data file**

In `src/data/apps.ts`, add an entry to `socialApps`:

```ts
{
  id: "appname",          // lowercase, no spaces
  name: "App Name",       // display name
  icon: appnameIos,       // import at top of file
  iconIos: appnameIos,
  iconAndroid: appnameAndroid,
  color: "#HEX",          // brand color (used for theme-color + manifest)
  url: "https://...",     // the app's web URL (opened after pause)
}
```

**3. Add to the build script**

In `scripts/gen-open-pages.js`, add to the `apps` array:

```js
{ id: "appname", name: "App Name", color: "#HEX" }
```

**4. Test it**

```bash
npm run dev
# Visit http://localhost:8080/open/appname
# Check the 30s pause works
# Check the icon displays correctly

npm run build
# Verify dist/open/appname/index.html and manifest.json are generated
```

## Development setup

```bash
npm install
npm run dev      # localhost:8080
npm run test     # Vitest
npm run lint     # ESLint
npm run build    # Vite + post-build script
```

## Pull requests

- Keep PRs focused on one thing
- No new dependencies without a strong reason
- Run `npm run lint` and `npm run test` before submitting
- If adding a new app, include screenshots showing the icon on iOS and Android home screens (if you can)

## Questions

Open an issue. Keep it simple.
