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
    <div className="min-h-screen gradient-warm flex flex-col">
      <div className="flex-1 flex flex-col px-6 py-8 max-w-lg mx-auto w-full">
        {/* Header */}
        <div className="mb-8 animate-fade-up">
          <Link to="/" className="text-primary text-sm font-medium mb-4 inline-block">
            ← Back
          </Link>
          <h1 className="text-3xl font-display font-bold text-foreground mb-2">
            Set up your shortcuts
          </h1>
          <p className="text-muted-foreground">
            Follow these steps for each app below.
          </p>
        </div>

        {/* Steps */}
        <div
          className="bg-card/60 backdrop-blur-sm rounded-2xl p-5 mb-8 border border-border/50 animate-fade-up"
          style={{ animationDelay: "0.15s" }}
        >
          <h2 className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
            For each app
          </h2>
          <div className="space-y-4 text-sm">
            <Step n={1} text='Open the link below in Safari, tap the Share button (box with arrow)' />
            <Step n={2} text='Scroll down and tap "Add to Home Screen"' />
            <Step n={3} text="Keep the app name as-is and tap Add" />
            <Step n={4} text="Move the real app into a hidden folder or delete it" />
            <Step n={5} text="The shortcut now looks identical — but adds a mindful pause ✨" />
          </div>
        </div>

        {/* App Cards */}
        <div className="space-y-3 mb-8">
          {selectedApps.map((app, i) => (
            <div
              key={app.id}
              className="bg-card/80 backdrop-blur-sm rounded-2xl p-4 border border-border/50 flex items-center gap-4 animate-fade-up"
              style={{ animationDelay: `${0.25 + i * 0.08}s` }}
            >
              <span className="text-3xl">{app.icon}</span>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-foreground">{app.name}</p>
                <p className="text-xs text-muted-foreground truncate">
                  {getInterceptionUrl(app.id)}
                </p>
              </div>
              <a
                href={getInterceptionUrl(app.id)}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0"
              >
                <Button size="sm" variant="outline" className="rounded-xl text-xs">
                  Open
                </Button>
              </a>
            </div>
          ))}
        </div>

        {/* Tip */}
        <div
          className="bg-primary/10 rounded-2xl p-4 text-sm text-foreground/80 animate-fade-up"
          style={{ animationDelay: "0.5s" }}
        >
          <span className="font-semibold">💡 Tip:</span> Open each link in Safari, then use
          "Add to Home Screen" so it looks and behaves like the real app.
        </div>

        {/* Test */}
        <div className="mt-8 text-center animate-fade-up" style={{ animationDelay: "0.6s" }}>
          <p className="text-xs text-muted-foreground mb-2">Want to see how it feels?</p>
          {selectedApps.length > 0 && (
            <Link to={`/intercept?app=${selectedApps[0].id}`}>
              <Button variant="ghost" className="text-primary font-semibold">
                Preview the interception →
              </Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

const Step = ({ n, text }: { n: number; text: string }) => (
  <div className="flex gap-3 items-start">
    <span className="bg-primary/15 text-primary rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
      {n}
    </span>
    <span className="text-muted-foreground">{text}</span>
  </div>
);

export default Instructions;
