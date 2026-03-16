import { useEffect, useState, useRef, useMemo } from "react";
import { useSearchParams, useParams, Link } from "react-router-dom";
import { socialApps } from "@/data/apps";
import { facts } from "@/data/facts";
import { Button } from "@/components/ui/button";

const COUNTDOWN_SECONDS = 30;
const FACT_INTERVAL_SECONDS = 10;
const GITHUB_URL = "https://github.com/hkcfied/mindful-moment-maker";

const isStandalone = () =>
  window.matchMedia("(display-mode: standalone)").matches ||
  ("standalone" in window.navigator && (window.navigator as { standalone?: boolean }).standalone === true);

const Intercept = () => {
  const [params] = useSearchParams();
  const { appId: pathAppId } = useParams<{ appId: string }>();
  const appId = pathAppId ?? params.get("app");
  const app = socialApps.find((a) => a.id === appId);

  // Setup mode: came from within the app (?setup=1), not from a home screen shortcut
  const isSetupMode = params.get("setup") === "1" && !isStandalone();

  const [secondsLeft, setSecondsLeft] = useState(COUNTDOWN_SECONDS);
  const [done, setDone] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const factCount = Math.ceil(COUNTDOWN_SECONDS / FACT_INTERVAL_SECONDS);
  const sessionFacts = useMemo(() => {
    const shuffled = [...facts].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, factCount);
  }, [factCount]);

  const currentFactIndex = Math.min(
    Math.floor((COUNTDOWN_SECONDS - secondsLeft) / FACT_INTERVAL_SECONDS),
    factCount - 1
  );

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSecondsLeft((s) => {
        if (s <= 1) {
          clearInterval(intervalRef.current!);
          setDone(true);
          return 0;
        }
        return s - 1;
      });
    }, 1000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const progress = ((COUNTDOWN_SECONDS - secondsLeft) / COUNTDOWN_SECONDS) * 100;
  const circumference = 2 * Math.PI * 46;
  const strokeOffset = circumference - (progress / 100) * circumference;

  if (!app) {
    return (
      <div className="min-h-screen gradient-intercept grain-overlay flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-xl font-display font-semibold text-foreground">App not found</p>
          <a href="/" className="text-primary mt-4 inline-block text-sm font-body hover:underline">
            Go home
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-intercept grain-overlay flex flex-col items-center justify-center px-6">
      <div className="max-w-sm w-full flex flex-col items-center text-center">

        {/* App icon */}
        <div className="mb-3 opacity-0 animate-fade-up animate-drift" style={{ animationDelay: "0.05s" }}>
          <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-sm border border-border/30">
            <img src={app.icon} alt={app.name} className="w-full h-full object-contain" />
          </div>
        </div>

        <p className="text-sm text-muted-foreground/70 mb-10 font-body font-light opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          {isSetupMode ? `This is what happens when you tap ${app.name}` : `Opening ${app.name}…`}
        </p>

        {/* Countdown ring */}
        <div className="relative w-44 h-44 mb-10 opacity-0 animate-scale-in" style={{ animationDelay: "0.15s" }}>
          <div className="absolute inset-2 rounded-full bg-primary/5 animate-breathe" />
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="46" fill="none" stroke="hsl(var(--border))" strokeWidth="2" opacity="0.5" />
            <circle
              cx="50" cy="50" r="46" fill="none"
              stroke="hsl(var(--primary))" strokeWidth="2.5" strokeLinecap="round"
              strokeDasharray={circumference} strokeDashoffset={strokeOffset}
              className="transition-all duration-1000 ease-linear"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-5xl font-display font-bold text-foreground leading-none">{secondsLeft}</span>
            <span className="text-[10px] text-muted-foreground/50 uppercase tracking-widest mt-1 font-body">seconds</span>
          </div>
        </div>

        {/* Body content: facts (returning) vs install guide (setup) */}
        {isSetupMode ? (
          <SetupGuide app={app} done={done} />
        ) : (
          <>
            <div className="min-h-[90px] flex items-center justify-center mb-12 px-2">
              <p
                key={currentFactIndex}
                className="text-foreground/70 text-sm leading-relaxed font-body font-light animate-fade-in max-w-[280px] italic"
              >
                "{sessionFacts[currentFactIndex]}"
              </p>
            </div>

            {done ? (
              <div className="w-full space-y-3 opacity-0 animate-fade-up" style={{ animationDelay: "0s" }}>
                <Button
                  variant="outline"
                  className="w-full h-12 rounded-xl text-sm border-border/60 font-body hover:bg-card/80 transition-colors"
                  onClick={() => window.open(app.url, "_blank")}
                >
                  Continue to {app.name}
                </Button>
                <Button
                  className="w-full h-12 rounded-xl text-sm font-body font-semibold shadow-sm bg-primary text-primary-foreground hover:brightness-110"
                  onClick={() => window.close()}
                >
                  🌿 I don't need this right now
                </Button>
                <p className="text-[11px] text-muted-foreground/50 pt-3 font-body">
                  You paused. That takes strength. 💛
                </p>
              </div>
            ) : (
              <p className="text-xs text-muted-foreground/50 animate-breathe font-body font-light tracking-wide">
                Take a breath…
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

const SetupGuide = ({ app, done }: { app: { name: string }; done: boolean }) => (
  <div className="w-full">
    {!done ? (
      <div
        className="bg-card/60 border border-border/40 rounded-2xl p-5 text-left opacity-0 animate-fade-up"
        style={{ animationDelay: "0.25s" }}
      >
        <p className="text-[10px] font-body font-semibold uppercase tracking-[0.18em] text-muted-foreground mb-4">
          Now add it to your home screen
        </p>
        <div className="space-y-4">
          <div className="flex gap-3 items-start">
            <span className="text-base font-display font-bold text-primary/35 shrink-0 w-5 text-right leading-tight">1</span>
            <div className="flex items-center gap-2.5">
              <div className="shrink-0 w-7 h-7 rounded-md bg-primary/10 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                  <polyline points="16 6 12 2 8 6" />
                  <line x1="12" y1="2" x2="12" y2="15" />
                </svg>
              </div>
              <p className="text-xs text-foreground/80 font-body leading-snug">
                Tap the <span className="font-semibold text-foreground">Share button</span> at the bottom of Safari
              </p>
            </div>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-base font-display font-bold text-primary/35 shrink-0 w-5 text-right leading-tight">2</span>
            <p className="text-xs text-foreground/80 font-body leading-snug pt-0.5">
              Scroll down and tap <span className="font-semibold text-foreground">"Add to Home Screen"</span>
            </p>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-base font-display font-bold text-primary/35 shrink-0 w-5 text-right leading-tight">3</span>
            <p className="text-xs text-foreground/80 font-body leading-snug pt-0.5">
              The name <span className="font-semibold text-foreground">"{app.name}"</span> and icon are already set — tap <span className="font-semibold text-foreground">Add</span>
            </p>
          </div>
        </div>
      </div>
    ) : (
      <div className="w-full space-y-3 opacity-0 animate-fade-up" style={{ animationDelay: "0s" }}>
        <p className="text-sm text-foreground/70 font-body font-light mb-4">
          That's the pause. Now add the shortcut and make it stick. 🌿
        </p>
        <Link to="/">
          <Button
            variant="outline"
            className="w-full h-12 rounded-xl text-sm border-border/60 font-body hover:bg-card/80 transition-colors"
          >
            ← Back to home
          </Button>
        </Link>
        <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
          <Button
            variant="ghost"
            className="w-full h-12 rounded-xl text-sm font-body text-muted-foreground hover:text-foreground hover:bg-card/50"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="mr-2 shrink-0">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            Star on GitHub
          </Button>
        </a>
        <p className="text-[11px] text-muted-foreground/50 pt-1 font-body">
          Open source · no tracking · free forever
        </p>
      </div>
    )}
  </div>
);

export default Intercept;
