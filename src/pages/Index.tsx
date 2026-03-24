import { Link } from "react-router-dom";
import { socialApps, SocialApp } from "@/data/apps";
import { useAppIcon } from "@/hooks/usePlatform";
import { GITHUB_URL } from "@/data/constants";
import { useInstallCount } from "@/hooks/useInstallCount";
import { useState } from "react";

const Index = () => {
  const installCount = useInstallCount();
  return (
    <div className="min-h-screen gradient-earth grain-overlay">
      <div className="flex flex-col items-center px-6 py-12 max-w-md mx-auto w-full min-h-screen">

        {/* Brand */}
        <div
          className="flex flex-col items-center mb-10 opacity-0 animate-fade-up"
          style={{ animationDelay: "0s" }}
        >
          <div className="flex items-center gap-2 mb-1">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-primary">
              <path d="M12 2C6.5 2 2 6.5 2 12c0 3.5 1.8 6.6 4.5 8.4C7.8 17.2 9.7 14 12 12c2.3 2 4.2 5.2 5.5 8.4C20.2 18.6 22 15.5 22 12c0-5.5-4.5-10-10-10z" fill="currentColor" opacity="0.2" />
              <path d="M12 2c0 5 2 8 5 10-3 0-5 2-5 5-0-3-2-5-5-5 3-2 5-5 5-10z" fill="currentColor" opacity="0.8" />
            </svg>
            <span className="text-[11px] font-body font-semibold uppercase tracking-[0.22em] text-primary/70">
              Dopa-Mean
            </span>
          </div>
        </div>

        {/* Hero */}
        <div
          className="text-center mb-10 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.08s" }}
        >
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-4 tracking-tight leading-[1.1] text-balance">
            Take back
            <br />
            <span className="italic text-primary">your time</span>
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xs mx-auto font-light">
            Replace social media shortcuts with mindful pauses that give your brain a moment to decide.
          </p>
        </div>

        {/* How it works */}
        <div
          className="w-full mb-10 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.16s" }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px flex-1 bg-border" />
            <span className="text-[10px] font-body font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              How it works
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              { n: "01", text: "Tap the app you want to intercept" },
              { n: "02", text: "Add the shortcut to your home screen" },
              { n: "03", text: "Each tap triggers a 30s mindful pause" },
            ].map((step) => (
              <div key={step.n} className="space-y-2">
                <span className="text-2xl font-display font-bold text-primary/40">{step.n}</span>
                <p className="text-xs text-muted-foreground leading-snug">{step.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* App Grid */}
        <div
          className="w-full opacity-0 animate-fade-up"
          style={{ animationDelay: "0.24s" }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px flex-1 bg-border" />
            <span className="text-[10px] font-body font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Choose an app
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="grid grid-cols-3 gap-2.5">
            {socialApps.map((app) => (
              <AppTile key={app.id} app={app} />
            ))}
          </div>
        </div>

        {/* Footer */}
        <div
          className="w-full mt-auto pt-10 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.36s" }}
        >
          <div className="h-px w-full bg-border/50 mb-6" />
          <div className="grid grid-cols-2 gap-x-4 gap-y-5">

            {/* Col 1: Star on GitHub */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[9px] font-body font-semibold uppercase tracking-[0.18em] text-muted-foreground/50">
                Open Source
              </span>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-body font-medium text-foreground/75 hover:text-primary transition-colors group"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 text-foreground/40 group-hover:text-primary transition-colors">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                </svg>
                Star on GitHub
              </a>
              <p className="text-[10px] text-muted-foreground/50 font-body leading-snug">
                Free forever, no sign-up
              </p>
            </div>

            {/* Col 2: Install Count */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[9px] font-body font-semibold uppercase tracking-[0.18em] text-muted-foreground/50">
                Shortcuts Created
              </span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-sm font-display font-bold text-foreground/75">
                  {installCount !== null ? installCount.toLocaleString() : "· · ·"}
                </span>
                <InstallCountTooltip />
              </div>
              <p className="text-[10px] text-muted-foreground/50 font-body leading-snug">
                No accounts, no tracking
              </p>
            </div>

            {/* Col 3: Why */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[9px] font-body font-semibold uppercase tracking-[0.18em] text-muted-foreground/50">
                The Science
              </span>
              <Link
                to="/why"
                className="text-sm font-body font-medium text-foreground/75 hover:text-primary transition-colors"
              >
                Why this works →
              </Link>
              <p className="text-[10px] text-muted-foreground/50 font-body leading-snug">
                Friction, dopamine & habits
              </p>
            </div>

            {/* Col 4: Case Study */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[9px] font-body font-semibold uppercase tracking-[0.18em] text-muted-foreground/50">
                Real Results
              </span>
              <Link
                to="/case-study"
                className="text-sm font-body font-medium text-foreground/75 hover:text-primary transition-colors"
              >
                Case study →
              </Link>
              <p className="text-[10px] text-muted-foreground/50 font-body leading-snug">
                4 weeks, real usage data
              </p>
            </div>

          </div>
          <p className="text-center text-[9px] text-muted-foreground/30 font-body tracking-wide mt-6 mb-1">
            Open source · no personal tracking · works on your device
          </p>
        </div>

      </div>
    </div>
  );
};

const InstallCountTooltip = () => {
  const [open, setOpen] = useState(false);
  return (
    <span className="relative inline-flex">
      <button
        onClick={() => setOpen((v) => !v)}
        onBlur={() => setOpen(false)}
        aria-label="How is this counted?"
        className="w-4 h-4 rounded-full border border-muted-foreground/30 text-[9px] font-body font-bold text-muted-foreground/50 hover:border-primary/50 hover:text-primary transition-colors flex items-center justify-center leading-none"
      >
        ?
      </button>
      {open && (
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-52 bg-foreground/90 text-background text-[10px] font-body leading-snug rounded-lg px-3 py-2 shadow-lg z-50 pointer-events-none">
          Counted each time someone clicks a shortcut link. No user data, no cookies — just an anonymous +1.
          <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-foreground/90" />
        </span>
      )}
    </span>
  );
};

const AppTile = ({ app }: { app: SocialApp }) => {
  const icon = useAppIcon(app);
  return (
    <Link
      to={`/app/${app.id}`}
      className="group flex flex-col items-center gap-2.5 p-4 rounded-xl border border-border/60 bg-card/50 hover:border-primary/25 hover:bg-card/80 transition-all duration-250"
    >
      <div className="transition-transform duration-200 group-hover:scale-105">
        <img src={icon} alt={app.name} className="w-11 h-11 rounded-xl object-cover" />
      </div>
      <span className="text-[11px] font-body font-medium text-foreground/80">{app.name}</span>
    </Link>
  );
};

export default Index;
