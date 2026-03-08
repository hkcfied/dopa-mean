

# DoomBreaker — Break the Scroll Habit

A PWA that replaces social media app icons on your home screen with interception screens that create mindful friction before you doomscroll.

## Pages & Flow

### 1. Landing / Setup Page
- Warm, encouraging headline: "Take back your time" with a brief explanation of how it works
- Grid of supported social apps with high-quality icons: Instagram, TikTok, X, Reddit, Snapchat, Facebook, YouTube, Threads, LinkedIn
- Users tap apps to select which ones they want to create shortcuts for
- "Generate My Shortcuts" button proceeds to the instructions page

### 2. Instructions Page
- Step-by-step visual guide showing how to:
  1. Tap "Share" in Safari
  2. Tap "Add to Home Screen"
  3. Move the real app into a hidden folder
- Each selected app gets its own "Add to Home Screen" card with the matching icon and name
- The PWA is configured so each shortcut opens to the interception screen for that specific app

### 3. Interception Screen (the core experience)
- Full-screen, warm gradient background
- App icon displayed at top so you know which app triggered it
- Large countdown timer (10 seconds) with a smooth circular progress animation
- During countdown: rotating science-based facts about dopamine, attention spans, and screen time (e.g., "The average person spends 2.5 hours daily on social media — that's 38 days per year")
- Timer cannot be skipped — no buttons visible until complete
- After countdown: two buttons appear with a gentle animation:
  - **"Continue to [App]"** — opens the web version (e.g., instagram.com)
  - **"I don't need this right now"** — closes/returns home (styled as the encouraged choice)

### 4. Curated Fact Library
- ~30 pre-loaded facts covering dopamine science, time statistics, mental health research
- Facts rotate randomly each time the interception screen appears

## PWA Setup
- Configured as a standalone PWA so it feels like a native app (no browser chrome)
- Each social app shortcut uses a URL parameter (e.g., `?app=instagram`) to determine which interception screen to show
- App icons stored locally as high-quality assets
- All data stored in localStorage (no backend needed)

## Design
- Warm color palette: soft gradients (peach, lavender, warm white)
- Rounded, friendly typography
- Supportive, non-judgmental tone throughout
- Smooth animations on the countdown and button reveals

