import { Link } from "react-router-dom";
import { socialApps, SocialApp } from "@/data/apps";

const Index = () => {
  return (
    <div className="min-h-screen gradient-earth grain-overlay">
      <div className="flex flex-col items-center px-6 py-16 max-w-md mx-auto w-full min-h-screen">
        {/* Decorative leaf */}
        <div
          className="opacity-0 animate-fade-up mb-2"
          style={{ animationDelay: "0s" }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-primary">
            <path
              d="M12 2C6.5 2 2 6.5 2 12c0 3.5 1.8 6.6 4.5 8.4C7.8 17.2 9.7 14 12 12c2.3 2 4.2 5.2 5.5 8.4C20.2 18.6 22 15.5 22 12c0-5.5-4.5-10-10-10z"
              fill="currentColor"
              opacity="0.15"
            />
            <path
              d="M12 2c0 5 2 8 5 10-3 0-5 2-5 5-0-3-2-5-5-5 3-2 5-5 5-10z"
              fill="currentColor"
              opacity="0.6"
            />
          </svg>
        </div>

        {/* Hero */}
        <div
          className="text-center mb-12 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.08s" }}
        >
          <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-4 tracking-tight leading-[1.1] text-balance">
            Take back
            <br />
            <span className="italic text-primary">your time</span>
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xs mx-auto font-light">
            Replace social media with mindful shortcuts that give your brain a moment to decide.
          </p>
        </div>

        {/* How it works */}
        <div
          className="w-full mb-12 opacity-0 animate-fade-up"
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
                <span className="text-2xl font-display font-bold text-primary/40">
                  {step.n}
                </span>
                <p className="text-xs text-muted-foreground leading-snug">
                  {step.text}
                </p>
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
      </div>
    </div>
  );
};

const AppTile = ({ app }: { app: SocialApp }) => (
  <Link
    to={`/app/${app.id}`}
    className="group flex flex-col items-center gap-2.5 p-4 rounded-xl border border-border/60 bg-card/50 hover:border-primary/25 hover:bg-card/80 transition-all duration-250"
  >
    <div className="transition-transform duration-200 group-hover:scale-105">
      <img
        src={app.icon}
        alt={app.name}
        className="w-11 h-11 rounded-lg object-contain"
      />
    </div>
    <span className="text-[11px] font-body font-medium text-foreground/80">
      {app.name}
    </span>
  </Link>
);

export default Index;
