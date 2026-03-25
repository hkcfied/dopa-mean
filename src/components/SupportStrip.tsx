import React from "react";

const SupportStrip = ({ className = "", style }: { className?: string; style?: React.CSSProperties }) => (
  <div className={`flex items-center justify-center gap-3 ${className}`} style={style}>
    {/* Ko-fi */}
    <a
      href="https://ko-fi.com/U7U61WM39U"
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-1.5 text-[10px] font-body text-muted-foreground/50 hover:text-primary transition-colors"
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 opacity-60 group-hover:opacity-100 transition-opacity">
        <path d="M23.881 8.948c-.773-4.085-4.859-4.593-4.859-4.593H.723c-.604 0-.679.798-.679.798s-.082 7.324-.022 11.822c.164 2.424 2.586 2.672 2.586 2.672s8.267-.023 11.966-.049c2.438-.426 2.683-2.566 2.658-3.734 4.352.24 7.422-2.831 6.649-6.916zm-11.062 3.511c-1.246 1.453-4.011 3.976-4.011 3.976s-.121.119-.31.023c-.076-.057-.108-.09-.108-.09-.443-.441-3.368-3.049-4.034-3.954-.709-.965-1.041-2.7-.091-3.71.951-1.01 3.005-1.086 4.363.407 0 0 1.565-1.782 3.468-.963 1.904.82 1.832 2.98.723 4.311zm6.173.478c-.928.116-1.682.028-1.682.028V7.284h1.77s1.971.551 1.971 2.638c0 1.913-.985 2.667-2.059 3.015z" />
      </svg>
      Buy me a coffee
    </a>

    <span className="text-muted-foreground/20 font-body text-[10px]">·</span>

    {/* Product Hunt */}
    <a
      href="https://www.producthunt.com/products/dopamean"
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-1.5 text-[10px] font-body text-muted-foreground/50 hover:text-primary transition-colors"
    >
      <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="shrink-0 opacity-60 group-hover:opacity-100 transition-opacity">
        <path d="M13.604 8.4h-3.405V12h3.405c.995 0 1.801-.806 1.801-1.8 0-.995-.806-1.8-1.801-1.8zM12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12 6.628 0 12-5.373 12-12 0-6.628-5.372-12-12-12zm1.604 13.799H10.2v3.601H8.4V6.6h5.204c1.989 0 3.601 1.612 3.601 3.6 0 1.989-1.612 3.599-3.601 3.599z" />
      </svg>
      Rate on Product Hunt
    </a>
  </div>
);

export default SupportStrip;
