import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const sections = [
  {
    n: "01",
    title: "The dopamine trap",
    body: "Social media is engineered around variable ratio reinforcement — the same mechanism that makes slot machines impossible to put down. Your brain doesn't get rewarded every time you scroll. It gets rewarded unpredictably. That unpredictability is what keeps you coming back. Dopamine isn't released when you get the reward — it surges in anticipation of it. The scroll is the lever. The 'like' is the jackpot you can never quite predict.",
  },
  {
    n: "02",
    title: "The urge fades in 30 seconds",
    body: "Neuroscience research shows that cravings — including the impulse to open a social app — follow a predictable curve. They peak quickly and, if you don't act on them, begin to fade within 20–40 seconds. Most people never experience this because they reach for their phone before the urge has a chance to pass. The 30-second countdown is not arbitrary. It is the minimum time needed for your limbic system (the impulse brain) to lose momentum.",
  },
  {
    n: "03",
    title: "Friction changes behavior",
    body: "Behavioral economics research consistently shows that tiny amounts of friction dramatically reduce habitual actions. Adding just 20 seconds of delay to an impulse — enough to require a conscious step — reduces compulsive behavior significantly. You don't need willpower. You need an environment that creates a pause between stimulus and response. Dopa-Mean is that pause, built directly into your home screen.",
  },
  {
    n: "04",
    title: "The prefrontal cortex needs a moment",
    body: "When you reach for a social app on autopilot, the prefrontal cortex — the part of your brain responsible for deliberate decision-making — is bypassed entirely. The habit fires before rational thought gets a chance to intervene. A forced 30-second window activates the prefrontal cortex and gives it time to ask the question your brain skipped: do I actually want to do this right now? Often, the answer is no.",
  },
  {
    n: "05",
    title: "You are rewiring your brain",
    body: "Neuroplasticity is the brain's capacity to physically restructure itself based on repeated experience. Every time you scroll without pause, you strengthen the neural pathway that makes that behavior feel automatic. Every time you pause and choose not to scroll, you weaken that pathway and build a new one. This is not a metaphor. The myelin sheath around neurons thickens with use and thins with disuse. Each pause is a microscopic act of rewiring.",
  },
  {
    n: "06",
    title: "Awareness, not abstinence",
    body: "Dopa-Mean does not try to stop you from using social media. It tries to make your use intentional. The goal is not willpower or self-denial — it is the insertion of a moment of awareness between the urge and the action. After 30 seconds, you are free to continue. Some days you will. Many days you won't. That asymmetry, compounded over time, is how behavior change actually works.",
  },
];

const Why = () => (
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

      {/* Hero */}
      <div
        className="mb-12 opacity-0 animate-fade-up"
        style={{ animationDelay: "0.08s" }}
      >
        <p className="text-[10px] font-body font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">
          The science
        </p>
        <h1 className="text-4xl font-display font-bold text-foreground tracking-tight leading-[1.1] mb-4">
          Why a 30-second pause<br />
          <span className="italic text-primary">actually works</span>
        </h1>
        <p className="text-sm text-muted-foreground font-light leading-relaxed">
          This is not a productivity app. It is a neuroscience tool built on decades of research into habit formation, impulse control, and the attention economy.
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-10 mb-14">
        {sections.map((s, i) => (
          <div
            key={s.n}
            className="opacity-0 animate-fade-up"
            style={{ animationDelay: `${0.16 + i * 0.07}s` }}
          >
            <div className="flex items-baseline gap-4 mb-3">
              <span className="text-2xl font-display font-bold text-primary/30 tabular-nums shrink-0">
                {s.n}
              </span>
              <h2 className="text-base font-display font-semibold text-foreground tracking-tight">
                {s.title}
              </h2>
            </div>
            <p className="text-sm text-muted-foreground font-body font-light leading-relaxed pl-10">
              {s.body}
            </p>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div
        className="flex items-center gap-3 mb-8 opacity-0 animate-fade-up"
        style={{ animationDelay: "0.65s" }}
      >
        <div className="h-px flex-1 bg-border" />
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-primary/40">
          <path d="M12 2C6.5 2 2 6.5 2 12c0 3.5 1.8 6.6 4.5 8.4C7.8 17.2 9.7 14 12 12c2.3 2 4.2 5.2 5.5 8.4C20.2 18.6 22 15.5 22 12c0-5.5-4.5-10-10-10z" fill="currentColor" opacity="0.2" />
          <path d="M12 2c0 5 2 8 5 10-3 0-5 2-5 5-0-3-2-5-5-5 3-2 5-5 5-10z" fill="currentColor" opacity="0.7" />
        </svg>
        <div className="h-px flex-1 bg-border" />
      </div>

      {/* CTA */}
      <div
        className="text-center opacity-0 animate-fade-up"
        style={{ animationDelay: "0.72s" }}
      >
        <p className="text-sm text-muted-foreground font-light mb-5 leading-relaxed max-w-xs mx-auto">
          Every pause is a small act of rebellion against an industry built to exploit your attention.
        </p>
        <Link to="/">
          <Button className="h-12 px-8 rounded-xl text-sm font-body font-semibold bg-primary text-primary-foreground hover:brightness-110 shadow-sm">
            Choose an app to intercept →
          </Button>
        </Link>
      </div>

    </div>
  </div>
);

export default Why;
