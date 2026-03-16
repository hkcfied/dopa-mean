# Dopa-Mean — Replace Doomscrolling with Mindful Pauses

**[Visit the App](https://dopamean.hidas.dev)**

> Break the scroll habit with mindful interception. A lightweight home screen shortcut that adds 30 seconds of friction between the urge to check social media and the action itself.

---

## About

**Dopa-Mean** is not a replacement app. It is a home screen shortcut — a neuroscience-backed friction tool designed to interrupt the automatic habit of opening social media apps.

The core insight: **cravings and impulses peak quickly and fade within 20–40 seconds if you don't act on them.** By adding a single moment of forced awareness between stimulus and response, you activate the prefrontal cortex and give your rational brain time to override the limbic impulse.

You can delete the original social media app entirely. This shortcut won't reinstall it or try to pull you back. The pause works the same way whether the app is on your phone or not.

---

## How It Works

1. **Tap the app you want to intercept** — Choose from TikTok, Instagram, Twitter, Reddit, YouTube, and more.
2. **Add the shortcut to your home screen** — Create a home screen bookmark or web app shortcut.
3. **Each tap triggers a 30-second mindful pause** — A countdown forces you to consciously choose whether you still want to continue.

After the 30 seconds, you're free to open the app. Some days you will. Many days you won't. **That asymmetry, compounded over time, is how behavior change actually works.**

---

## The Science

### 1. The Dopamine Trap
Social media is engineered around variable ratio reinforcement — the same mechanism that makes slot machines impossible to put down. Dopamine surges in *anticipation* of the reward, not when you get it. The scroll is the lever. The 'like' is the jackpot you can never quite predict.

### 2. The Urge Fades in 30 Seconds
Neuroscience research shows that cravings follow a predictable curve. They peak quickly and fade within 20–40 seconds if you don't act. Most people never experience this fade because they reach for their phone before the urge has a chance to pass.

### 3. Friction Changes Behavior
Behavioral economics consistently shows that tiny amounts of friction dramatically reduce habitual actions. Adding 20 seconds of delay to an impulse — enough to require a conscious step — significantly reduces compulsive behavior. **You don't need willpower. You need an environment that creates a pause between stimulus and response.**

### 4. The Prefrontal Cortex Needs a Moment
When you reach for a social app on autopilot, the prefrontal cortex (responsible for deliberate decision-making) is bypassed. A forced 30-second window activates it and asks: *do I actually want to do this right now?* Often, the answer is no.

### 5. You Are Rewiring Your Brain
Every time you scroll without pause, you strengthen the neural pathway that makes that behavior automatic. Every time you pause and choose not to scroll, you weaken that pathway. This is neuroplasticity — not metaphor, but physical restructuring of the brain.

### 6. You Can Delete the Original App
Dopa-Mean is a home screen shortcut that won't re-install the original social media app or pull you back toward it. The pause works the same way whether the app is on your phone or not. You keep the friction. You lose the convenience.

### 7. Awareness, Not Abstinence
Dopa-Mean doesn't try to stop you from using social media. It tries to make your use intentional. The goal is not willpower or self-denial — it is the insertion of a moment of awareness between the urge and the action.

---

## Supported Apps

- 🎬 TikTok
- 📷 Instagram
- 𝕏 Twitter / X
- 🔥 Reddit
- ▶️ YouTube
- 💬 Threads
- 🎮 Discord
- And more

---

## Features

✅ **Lightweight** — A single web app, no downloads or installations needed
✅ **Open Source** — Full source code available on GitHub
✅ **No Tracking** — Zero analytics, no telemetry, no ads
✅ **Works on Your Device** — Everything runs locally on your phone
✅ **Customizable** — Choose which apps to intercept
✅ **Scientifically Grounded** — Based on neuroscience research

---

## Installation

### iOS & Android
1. Visit [dopamean.hidas.dev](https://dopamean.hidas.dev)
2. Choose the social media app you want to intercept
3. Tap "Add Shortcut"
4. Follow the browser prompts to add to your home screen
5. Optionally delete the original app — the shortcut doesn't depend on it

### Local Development
```bash
npm install
npm run dev
```

The app will run on `http://localhost:8080`

---

## How to Use

### Setting Up a Shortcut

1. Open Dopa-Mean in Safari (iOS) or Chrome (Android)
2. Select the social media app you want to slow down
3. Choose "Add Shortcut"
4. Your browser will prompt you to add it to the home screen
5. Name it something memorable (e.g., "TikTok Pause", "Instagram Mindful")
6. Tap "Add" or "Create"

### Using the Shortcut

- **Tap the shortcut** on your home screen
- **A 30-second countdown begins** — your brain's impulse fades during this time
- **After 30 seconds**, you can open the app if you choose
- **Or you can close it** — you've created the space for your prefrontal cortex to win

---

## Technical Stack

- **Framework**: React 18
- **Router**: React Router v6
- **Styling**: Tailwind CSS with custom animations
- **Build Tool**: Vite
- **Testing**: Vitest
- **Linting**: ESLint
- **Type Safety**: TypeScript

### Project Structure

```
src/
├── pages/              # Main pages
│   ├── Index.tsx       # Home page with app selection
│   ├── Why.tsx         # Science & rationale page
│   ├── AppShortcut.tsx # Shortcut generation page
│   ├── Intercept.tsx   # 30-second pause countdown
│   └── NotFound.tsx    # 404 page
├── components/         # Reusable UI components
├── data/              # App list, constants
├── styles/            # Tailwind config
└── App.tsx            # Route setup
```

---

## Building & Deployment

### Development
```bash
npm install
npm run dev
```

### Production Build
```bash
npm run build
```

**Current deployment**: [https://dopamean.hidas.dev](https://dopamean.hidas.dev)
