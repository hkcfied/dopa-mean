import { useEffect, useState, useRef, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { socialApps } from "@/data/apps";
import { facts } from "@/data/facts";
import { Button } from "@/components/ui/button";

const COUNTDOWN_SECONDS = 30;
const FACT_INTERVAL_SECONDS = 10;

const Intercept = () => {
  const [params] = useSearchParams();
  const appId = params.get("app");
  const app = socialApps.find((a) => a.id === appId);

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
        {/* App icon with gentle float */}
        <div className="mb-3 opacity-0 animate-fade-up animate-drift" style={{ animationDelay: "0.05s" }}>
          <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-sm border border-border/30">
            <img
              src={app.icon}
              alt={app.name}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <p className="text-sm text-muted-foreground/70 mb-10 font-body font-light opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Opening {app.name}…
        </p>

        {/* Countdown ring — organic style */}
        <div className="relative w-44 h-44 mb-10 opacity-0 animate-scale-in" style={{ animationDelay: "0.15s" }}>
          {/* Breathing glow behind ring */}
          <div className="absolute inset-2 rounded-full bg-primary/5 animate-breathe" />
          
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            {/* Track */}
            <circle
              cx="50"
              cy="50"
              r="46"
              fill="none"
              stroke="hsl(var(--border))"
              strokeWidth="2"
              opacity="0.5"
            />
            {/* Progress */}
            <circle
              cx="50"
              cy="50"
              r="46"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeOffset}
              className="transition-all duration-1000 ease-linear"
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-5xl font-display font-bold text-foreground leading-none">
              {secondsLeft}
            </span>
            <span className="text-[10px] text-muted-foreground/50 uppercase tracking-widest mt-1 font-body">
              seconds
            </span>
          </div>
        </div>

        {/* Fact */}
        <div className="min-h-[90px] flex items-center justify-center mb-12 px-2">
          <p
            key={currentFactIndex}
            className="text-foreground/70 text-sm leading-relaxed font-body font-light animate-fade-in max-w-[280px] italic"
          >
            "{sessionFacts[currentFactIndex]}"
          </p>
        </div>

        {/* Actions */}
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
      </div>
    </div>
  );
};

export default Intercept;
