import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { socialApps, SocialApp } from "@/data/apps";
import { Button } from "@/components/ui/button";

const Index = () => {
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const navigate = useNavigate();

  const toggle = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const handleGenerate = () => {
    const apps = Array.from(selected);
    localStorage.setItem("doombreaker-apps", JSON.stringify(apps));
    navigate("/instructions");
  };

  return (
    <div className="min-h-screen gradient-warm flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12 max-w-lg mx-auto w-full">
        {/* Hero */}
        <div className="text-center mb-10 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <div className="text-5xl mb-4">🌿</div>
          <h1 className="text-4xl font-display font-bold text-foreground mb-3 tracking-tight">
            Take back your time
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Replace your social media apps with mindful shortcuts that give your brain a moment to decide.
          </p>
        </div>

        {/* How it works */}
        <div
          className="w-full bg-card/60 backdrop-blur-sm rounded-2xl p-5 mb-8 border border-border/50 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          <h2 className="font-display font-semibold text-foreground mb-3 text-sm uppercase tracking-wider">
            How it works
          </h2>
          <div className="space-y-2.5 text-sm text-muted-foreground">
            <div className="flex gap-3 items-start">
              <span className="bg-primary/15 text-primary rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">1</span>
              <span>Choose the apps you want to intercept</span>
            </div>
            <div className="flex gap-3 items-start">
              <span className="bg-primary/15 text-primary rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">2</span>
              <span>Add shortcuts to your home screen</span>
            </div>
            <div className="flex gap-3 items-start">
              <span className="bg-primary/15 text-primary rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">3</span>
              <span>Each tap triggers a 30-second mindful pause</span>
            </div>
          </div>
        </div>

        {/* App Grid */}
        <div className="w-full mb-8 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <h2 className="font-display font-semibold text-foreground mb-4 text-sm uppercase tracking-wider">
            Choose your apps
          </h2>
          <div className="grid grid-cols-3 gap-3">
            {socialApps.map((app) => (
              <AppTile
                key={app.id}
                app={app}
                isSelected={selected.has(app.id)}
                onToggle={() => toggle(app.id)}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="w-full animate-fade-up" style={{ animationDelay: "0.4s" }}>
          <Button
            onClick={handleGenerate}
            disabled={selected.size === 0}
            className="w-full h-14 text-lg font-display font-bold rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] disabled:opacity-40 disabled:scale-100"
          >
            Generate My Shortcuts ({selected.size})
          </Button>
          <p className="text-center text-xs text-muted-foreground mt-3">
            No account needed · Works entirely on your device
          </p>
        </div>
      </div>
    </div>
  );
};

const AppTile = ({
  app,
  isSelected,
  onToggle,
}: {
  app: SocialApp;
  isSelected: boolean;
  onToggle: () => void;
}) => (
  <button
    onClick={onToggle}
    className={`relative flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all duration-200 ${
      isSelected
        ? "border-primary bg-primary/10 shadow-md scale-[1.03]"
        : "border-border/50 bg-card/60 hover:border-primary/30 hover:bg-card"
    }`}
  >
    {isSelected && (
      <div className="absolute -top-1.5 -right-1.5 bg-primary text-primary-foreground w-5 h-5 rounded-full flex items-center justify-center text-xs">
        ✓
      </div>
    )}
    <img
      src={app.icon}
      alt={app.name}
      className="w-12 h-12 rounded-xl object-contain"
    />
    <span className="text-xs font-medium text-foreground">{app.name}</span>
  </button>
);

export default Index;
