import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { socialApps } from "@/data/apps";
import { Button } from "@/components/ui/button";

const DOMAIN = "https://dopamean.hidas.dev";

const AppShortcut = () => {
  const { appId } = useParams<{ appId: string }>();
  const app = socialApps.find((a) => a.id === appId);
  const [copied, setCopied] = useState(false);

  if (!app) {
    return (
      <div className="min-h-screen gradient-earth grain-overlay flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-xl font-display font-semibold text-foreground mb-4">App not found</p>
          <Link to="/" className="text-primary text-sm font-body hover:underline">
            ← Back to home
          </Link>
        </div>
      </div>
    );
  }

  // Clean URL for copying/bookmarking (no ?setup=1 — this is what gets added to home screen)
  const bookmarkUrl = `${DOMAIN}/open/${app.id}`;
  // In-app link includes ?setup=1 so the intercept page knows to show install instructions
  const setupUrl = `${bookmarkUrl}?setup=1`;

  const handleCopy = () => {
    navigator.clipboard.writeText(bookmarkUrl).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="min-h-screen gradient-earth grain-overlay">
      <div className="flex flex-col px-6 py-10 max-w-md mx-auto w-full">

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

        {/* App hero */}
        <div
          className="flex flex-col items-center text-center mb-10 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.08s" }}
        >
          <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-md border border-border/30 mb-4">
            <img src={app.icon} alt={app.name} className="w-full h-full object-contain" />
          </div>
          <h1 className="text-3xl font-display font-bold text-foreground tracking-tight mb-1">
            <span className="italic text-primary">{app.name}</span> shortcut
          </h1>
          <p className="text-sm text-muted-foreground font-light max-w-xs leading-relaxed">
            Add this to your home screen. When you tap it, you'll get a 30-second mindful pause before opening {app.name}.
          </p>
        </div>

        {/* Steps */}
        <div
          className="w-full mb-8 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.16s" }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px flex-1 bg-border" />
            <span className="text-[10px] font-body font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              How to add
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>

          <div className="space-y-5">
            {/* Step 1 — tappable link with ?setup=1 for in-app preview; copy gives clean URL */}
            <div className="flex gap-4 items-start">
              <span className="text-lg font-display font-bold text-primary/35 tabular-nums shrink-0 w-6 text-right mt-0.5">01</span>
              <div className="flex-1">
                <p className="text-sm text-foreground font-body font-medium mb-2">Open this link in Safari</p>
                <a
                  href={setupUrl}
                  className="flex items-center gap-2 bg-card/70 border border-primary/30 rounded-lg px-3 py-2.5 hover:bg-card transition-colors group"
                >
                  <img src={app.icon} alt={app.name} className="w-5 h-5 rounded-md shrink-0 object-contain" />
                  <span className="text-[11px] font-mono text-primary truncate flex-1 group-hover:underline">
                    {bookmarkUrl}
                  </span>
                  <button
                    onClick={(e) => { e.preventDefault(); handleCopy(); }}
                    className="shrink-0 text-xs font-body font-medium text-muted-foreground hover:text-primary transition-colors px-1"
                  >
                    {copied ? "✓" : "Copy"}
                  </button>
                </a>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4 items-start">
              <span className="text-lg font-display font-bold text-primary/35 tabular-nums shrink-0 w-6 text-right mt-0.5">02</span>
              <div className="flex-1">
                <p className="text-sm text-foreground font-body font-medium mb-2">Tap the Share button in Safari</p>
                <div className="flex items-center gap-3 bg-card/70 border border-border/50 rounded-lg px-4 py-3">
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                      <polyline points="16 6 12 2 8 6" />
                      <line x1="12" y1="2" x2="12" y2="15" />
                    </svg>
                  </div>
                  <p className="text-xs text-muted-foreground font-body leading-snug">
                    The share icon is at the <span className="font-semibold text-foreground">bottom center</span> of Safari's toolbar
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4 items-start">
              <span className="text-lg font-display font-bold text-primary/35 tabular-nums shrink-0 w-6 text-right mt-0.5">03</span>
              <div>
                <p className="text-sm text-foreground font-body font-medium mb-1">Tap "Add to Home Screen"</p>
                <p className="text-xs text-muted-foreground font-body leading-snug">
                  Scroll down in the share sheet. The name <span className="font-semibold text-foreground">"{app.name}"</span> and icon are already set — just tap <span className="font-semibold text-foreground">Add</span>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tip */}
        <div
          className="rounded-xl p-4 text-sm border border-primary/15 bg-primary/5 mb-8 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.28s" }}
        >
          <span className="font-body font-semibold text-primary">Tip — </span>
          <span className="text-foreground/70">
            Move the real {app.name} app to a folder (or delete it) so the shortcut becomes your only entry point.
          </span>
        </div>

        <div
          className="text-center opacity-0 animate-fade-up"
          style={{ animationDelay: "0.36s" }}
        >
          <p className="text-xs text-muted-foreground/60 mb-2">Want to see how it feels?</p>
          <Link to={`/open/${app.id}?setup=1`}>
            <Button
              variant="ghost"
              className="text-primary font-body font-semibold text-sm hover:bg-primary/5"
            >
              Preview the pause →
            </Button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default AppShortcut;
