import { Link } from "react-router-dom";
import { GITHUB_URL } from "@/data/constants";

const sections = [
  {
    label: "01 — The Problem",
    id: "problem",
    content: (
      <>
        <p>
          Social media apps are engineered to be opened on autopilot. The habit fires before conscious thought gets involved — you unlock your phone, tap the icon, and you're already scrolling before you've decided to. Willpower doesn't fix this because willpower operates in the prefrontal cortex, and the habit bypasses it entirely.
        </p>
        <p>
          Existing solutions — screen time limits, app blockers, grayscale mode — all fight the wrong battle. They create friction after the habit fires, or they rely on you to enforce them. They also create anxiety: deleting an app feels permanent, and that anxiety often prevents people from trying.
        </p>
      </>
    ),
  },
  {
    label: "02 — The Insight",
    id: "insight",
    content: (
      <>
        <p>
          Two pieces of research converged into the idea:
        </p>
        <ul>
          <li><strong>Cravings fade in 20–40 seconds</strong> if you don't act on them. The impulse to open a social app follows the same curve as any other craving. Most people never experience the fade because they act immediately.</li>
          <li><strong>The placebo effect applies to app icons.</strong> The anxiety of deleting an app is largely about the icon disappearing from your home screen — the visual cue that you have access. A fake icon with the same name and artwork maintains that feeling while breaking the habit loop.</li>
        </ul>
        <p>
          The design insight: don't remove access, remove automation. Keep the icon. Add 30 seconds between it and the app.
        </p>
      </>
    ),
  },
  {
    label: "03 — The Technical Challenge",
    id: "technical",
    content: (
      <>
        <p>
          The core requirement: each "fake icon" must look exactly like the real app on the home screen — correct name, correct icon, correct brand color — and open as a standalone app, not a browser tab.
        </p>
        <p>
          PWA manifests make this possible, but with a constraint: a single manifest covers the entire origin. Installing one PWA from a domain gives you one icon. To get 10 separate icons (one per social media app), you need 10 isolated PWA installations.
        </p>
        <p>
          The solution is <strong>PWA scope isolation</strong>. Each app gets its own manifest with a unique <code>id</code>, <code>scope</code>, and <code>start_url</code>:
        </p>
        <pre>{`// /open/instagram/manifest.json
{
  "id": "/open/instagram",
  "name": "Instagram",
  "scope": "/open/instagram",
  "start_url": "/open/instagram",
  "background_color": "#E1306C",
  "theme_color": "#E1306C",
  "icons": [{ "src": "/icons/instagram.png", "sizes": "512x512" }]
}`}</pre>
        <p>
          iOS and Android treat each scoped manifest as a separate installed app. The result: 10 independently installable "apps" from one codebase, each indistinguishable from the real thing on the home screen.
        </p>
        <p>
          A post-build Node.js script (<code>scripts/gen-open-pages.js</code>) generates all 10 HTML pages and manifests from the single Vite build output, injecting per-app meta tags and manifest links.
        </p>
      </>
    ),
  },
  {
    label: "04 — UX Decisions",
    id: "ux",
    content: (
      <>
        <p>
          Several deliberate UX choices went against conventional app design:
        </p>
        <ul>
          <li><strong>No skip button during the countdown.</strong> The 30 seconds must be non-negotiable or it becomes theater. The only exit is closing the app, which is itself a deliberate choice.</li>
          <li><strong>No gamification.</strong> No streaks, no "you've avoided X hours of scrolling" counters. These would make the tool itself addictive and undermine the point.</li>
          <li><strong>No share button after the pause.</strong> Asking someone to post on social media immediately after a mindfulness pause is a contradiction.</li>
          <li><strong>Facts rotate every 10 seconds.</strong> Not motivational quotes — neuroscience facts. The goal is to inform, not to guilt. The user should feel curious during the pause, not judged.</li>
          <li><strong>Earth tones, no alerts.</strong> The design should feel like a deep breath, not a warning screen. Greens, terracottas, sand — the opposite of the red-heavy UI of most social apps.</li>
        </ul>
      </>
    ),
  },
  {
    label: "05 — What I'd Do Differently",
    id: "retrospective",
    content: (
      <>
        <ul>
          <li><strong>Icon generation.</strong> Currently users must manually get to the <code>/open/:appId</code> URL and add it to their home screen through the browser's share menu. An automated shortcut generator (iOS Shortcuts app integration) would dramatically improve conversion.</li>
          <li><strong>Android deep links.</strong> On Android, the "Continue to Instagram" button opens Instagram in a browser tab, not the native app. Implementing proper Android intent URLs would improve the post-pause flow.</li>
          <li><strong>Countdown length as a setting.</strong> 30 seconds is the right default but some users would benefit from a longer pause. A simple URL param (<code>?t=60</code>) would be easy to add and meaningful for power users.</li>
        </ul>
      </>
    ),
  },
];

const CaseStudy = () => (
  <div className="min-h-screen gradient-earth grain-overlay">
    <div className="flex flex-col px-6 py-10 max-w-2xl mx-auto w-full">

      {/* Back */}
      <div className="mb-8 opacity-0 animate-fade-up">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-primary text-sm font-body font-medium hover:opacity-70 transition-opacity"
        >
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Back
        </Link>
      </div>

      {/* Hero */}
      <div className="mb-12 opacity-0 animate-fade-up" style={{ animationDelay: "0.08s" }}>
        <p className="text-[10px] font-body font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
          Case Study
        </p>
        <h1 className="text-4xl font-display font-bold text-foreground tracking-tight leading-[1.1] mb-4">
          Dopa-Mean
        </h1>
        <p className="text-base text-muted-foreground font-light leading-relaxed mb-6 max-w-lg">
          A behavioral design problem solved with PWA scope isolation. How a fake app icon and 30 seconds of friction replaces willpower.
        </p>
        <div className="flex flex-wrap gap-2 text-[11px] font-body">
          {["React", "TypeScript", "Vite", "PWA", "Tailwind CSS", "GitHub Pages"].map((tag) => (
            <span key={tag} className="px-2.5 py-1 rounded-full border border-border/60 text-muted-foreground bg-card/50">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="flex gap-4 mb-14 opacity-0 animate-fade-up" style={{ animationDelay: "0.14s" }}>
        <a
          href="https://dopamean.hidas.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-body text-primary hover:opacity-70 transition-opacity font-medium"
        >
          Live app →
        </a>
        <a
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-body text-muted-foreground hover:text-primary transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
          </svg>
          GitHub
        </a>
      </div>

      {/* Sections */}
      <div className="space-y-14 mb-14">
        {sections.map((s, i) => (
          <div
            key={s.id}
            id={s.id}
            className="opacity-0 animate-fade-up scroll-mt-8"
            style={{ animationDelay: `${0.2 + i * 0.07}s` }}
          >
            <p className="text-[10px] font-body font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">
              {s.label}
            </p>
            <div className="prose-custom space-y-4 text-sm text-muted-foreground font-body font-light leading-relaxed [&_strong]:text-foreground [&_strong]:font-medium [&_ul]:space-y-2 [&_ul]:list-none [&_ul_li]:pl-4 [&_ul_li]:border-l [&_ul_li]:border-border/50 [&_code]:font-mono [&_code]:text-xs [&_code]:bg-card/80 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:border [&_code]:border-border/40 [&_pre]:bg-card/60 [&_pre]:border [&_pre]:border-border/40 [&_pre]:rounded-xl [&_pre]:p-4 [&_pre]:text-xs [&_pre]:font-mono [&_pre]:overflow-x-auto [&_pre]:leading-relaxed">
              {s.content}
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="flex items-center gap-3 mb-8 opacity-0 animate-fade-up" style={{ animationDelay: "0.65s" }}>
        <div className="h-px flex-1 bg-border" />
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="text-primary/40">
          <path d="M12 2C6.5 2 2 6.5 2 12c0 3.5 1.8 6.6 4.5 8.4C7.8 17.2 9.7 14 12 12c2.3 2 4.2 5.2 5.5 8.4C20.2 18.6 22 15.5 22 12c0-5.5-4.5-10-10-10z" fill="currentColor" opacity="0.2" />
          <path d="M12 2c0 5 2 8 5 10-3 0-5 2-5 5-0-3-2-5-5-5 3-2 5-5 5-10z" fill="currentColor" opacity="0.7" />
        </svg>
        <div className="h-px flex-1 bg-border" />
      </div>

      <div className="text-center opacity-0 animate-fade-up" style={{ animationDelay: "0.7s" }}>
        <Link
          to="/"
          className="text-sm font-body text-primary hover:opacity-70 transition-opacity"
        >
          Try the app →
        </Link>
      </div>

    </div>
  </div>
);

export default CaseStudy;
