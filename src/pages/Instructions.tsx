import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { socialApps, SocialApp } from "@/data/apps";
import { Button } from "@/components/ui/button";

const Instructions = () => {
  const [selectedApps, setSelectedApps] = useState<SocialApp[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const stored = localStorage.getItem("doombreaker-apps");
    if (!stored) {
      navigate("/");
      return;
    }
    const ids: string[] = JSON.parse(stored);
    setSelectedApps(socialApps.filter((a) => ids.includes(a.id)));
  }, [navigate]);

  const getInterceptionUrl = (appId: string) => {
    return `${window.location.origin}/intercept?app=${appId}`;
  };

  return (
    <div className="min-h-screen gradient-earth grain-overlay">
      <div className="flex flex-col px-6 py-10 max-w-md mx-auto w-full">
        {/* Header */}
        <div className="mb-10 opacity-0 animate-fade-up">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-primary text-sm font-body font-medium mb-6 hover:opacity-70 transition-opacity"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back
          </Link>
          <h1 className="text-3xl font-display font-bold text-foreground mb-2 tracking-tight">
            Set up your <span className="italic text-primary">shortcuts</span>
          </h1>
          <p className="text-muted-foreground text-sm font-light">
            Follow these steps for each app below.
          </p>
        </div>

        {/* Steps — editorial numbered list */}
        <div
          className="mb-10 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px flex-1 bg-border" />
            <span className="text-[10px] font-body font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Instructions
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>
          <div className="space-y-4">
            {[
              'Open the link below in Safari, tap the Share button',
              'Scroll down and tap "Add to Home Screen"',
              'Keep the app name as-is and tap Add',
              'Move the real app into a hidden folder or delete it',
              'The shortcut now intercepts with a mindful pause',
            ].map((text, i) => (
              <div key={i} className="flex gap-4 items-baseline">
                <span className="text-lg font-display font-bold text-primary/35 tabular-nums shrink-0 w-6 text-right">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-sm text-muted-foreground leading-relaxed">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* App Cards */}
        <div className="space-y-2.5 mb-10">
          {selectedApps.map((app, i) => (
            <div
              key={app.id}
              className="bg-card/70 backdrop-blur-sm rounded-xl p-4 border border-border/50 flex items-center gap-4 opacity-0 animate-fade-up"
              style={{ animationDelay: `${0.2 + i * 0.06}s` }}
            >
              <img src={app.icon} alt={app.name} className="w-10 h-10 rounded-lg object-contain" />
              <div className="flex-1 min-w-0">
                <p className="font-body font-semibold text-foreground text-sm">{app.name}</p>
                <p className="text-[11px] text-muted-foreground/70 truncate font-mono">
                  {getInterceptionUrl(app.id)}
                </p>
              </div>
              <a
                href={getInterceptionUrl(app.id)}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0"
              >
                <Button
                  size="sm"
                  variant="outline"
                  className="rounded-lg text-xs h-8 px-3 border-border/60 hover:bg-primary/5 hover:border-primary/30 transition-colors"
                >
                  Open
                </Button>
              </a>
            </div>
          ))}
        </div>

        {/* Tip */}
        <div
          className="rounded-xl p-4 text-sm text-foreground/70 border border-primary/15 bg-primary/5 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.45s" }}
        >
          <span className="font-body font-semibold text-primary">Tip — </span>
          Open each link in Safari, then use "Add to Home Screen" so it looks and behaves like the real app.
        </div>

        {/* Test */}
        <div
          className="mt-8 text-center opacity-0 animate-fade-up"
          style={{ animationDelay: "0.55s" }}
        >
          <p className="text-xs text-muted-foreground/60 mb-2">Want to see how it feels?</p>
          {selectedApps.length > 0 && (
            <Link to={`/intercept?app=${selectedApps[0].id}`}>
              <Button
                variant="ghost"
                className="text-primary font-body font-semibold text-sm hover:bg-primary/5"
              >
                Preview the interception →
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Instructions;
