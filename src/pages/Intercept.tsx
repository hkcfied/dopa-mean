import { useEffect, useState, useRef, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { socialApps } from "@/data/apps";
import { facts } from "@/data/facts";
import { Button } from "@/components/ui/button";

const COUNTDOWN_SECONDS = 10;

const Intercept = () => {
  const [params] = useSearchParams();
  const appId = params.get("app");
  const app = socialApps.find((a) => a.id === appId);

  const [secondsLeft, setSecondsLeft] = useState(COUNTDOWN_SECONDS);
  const [done, setDone] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Pick 3 random facts for this session
  const sessionFacts = useMemo(() => {
    const shuffled = [...facts].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 3);
  }, []);

  const currentFactIndex = Math.min(
    Math.floor(((COUNTDOWN_SECONDS - secondsLeft) / COUNTDOWN_SECONDS) * 3),
    2
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
  const circumference = 2 * Math.PI * 45;
  const strokeOffset = circumference - (progress / 100) * circumference;

  if (!app) {
    return (
      <div className="min-h-screen gradient-interception flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-xl font-display font-semibold text-foreground">App not found</p>
          <a href="/" className="text-primary mt-4 inline-block">Go home</a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-interception flex flex-col items-center justify-center px-6">
      <div className="max-w-sm w-full flex flex-col items-center text-center">
        {/* App icon */}
        <div
          className="text-5xl mb-2 animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          {app.icon}
        </div>
        <p
          className="text-sm text-muted-foreground mb-8 animate-fade-up"
          style={{ animationDelay: "0.15s" }}
        >
          Opening {app.name}…
        </p>

        {/* Countdown ring */}
        <div className="relative w-40 h-40 mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="hsl(var(--border))"
              strokeWidth="4"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeOffset}
              className="transition-all duration-1000 ease-linear"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl font-display font-bold text-foreground">
              {secondsLeft}
            </span>
          </div>
        </div>

        {/* Fact */}
        <div
          className="min-h-[80px] flex items-center justify-center mb-10 px-4"
        >
          <p
            key={currentFactIndex}
            className="text-foreground/80 text-base leading-relaxed animate-fade-in"
          >
            {sessionFacts[currentFactIndex]}
          </p>
        </div>

        {/* Actions (appear after countdown) */}
        {done ? (
          <div className="w-full space-y-3 animate-fade-up">
            <Button
              variant="outline"
              className="w-full h-12 rounded-2xl text-sm border-border/60"
              onClick={() => window.open(app.url, "_blank")}
            >
              Continue to {app.name}
            </Button>
            <Button
              className="w-full h-12 rounded-2xl text-sm font-bold shadow-lg"
              onClick={() => window.close()}
            >
              🌿 I don't need this right now
            </Button>
            <p className="text-xs text-muted-foreground pt-2">
              You paused. That takes strength. 💛
            </p>
          </div>
        ) : (
          <p className="text-xs text-muted-foreground animate-pulse">
            Take a breath…
          </p>
        )}
      </div>
    </div>
  );
};

export default Intercept;
