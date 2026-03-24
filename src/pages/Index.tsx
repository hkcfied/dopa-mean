import { Link } from "react-router-dom";
import { socialApps, SocialApp } from "@/data/apps";
import { useAppIcon } from "@/hooks/usePlatform";
import { GITHUB_URL } from "@/data/constants";
import { useInstallCount } from "@/hooks/useInstallCount";

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
          <div className="flex items-center justify-center gap-5 mb-4">
            <Link
              to="/why"
              className="text-xs font-body text-muted-foreground hover:text-primary transition-colors"
            >
              Why this works
            </Link>
            <span className="text-border">·</span>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-body text-muted-foreground hover:text-primary transition-colors"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              Star on GitHub
            </a>
          </div>
          <p className="text-center text-[10px] text-muted-foreground/40 font-body tracking-wide mb-1">
            {installCount !== null ? `${installCount.toLocaleString()} shortcuts created` : "· · ·"}
          </p>
          <p className="text-center text-[10px] text-muted-foreground/50 font-body tracking-wide">
            Open source · no personal tracking · works on your device
          </p>
        </div>

      </div>
    </div>
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
