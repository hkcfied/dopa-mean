import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Index from "./Index";

const renderIndex = () =>
  render(
    <MemoryRouter>
      <Index />
    </MemoryRouter>
  );

describe("Index page", () => {
  it("renders the heading", () => {
    renderIndex();
    expect(screen.getByText("Take back")).toBeInTheDocument();
    expect(screen.getByText("your time")).toBeInTheDocument();
  });

  it("renders all 9 social apps", () => {
    renderIndex();
    expect(screen.getByText("Instagram")).toBeInTheDocument();
    expect(screen.getByText("TikTok")).toBeInTheDocument();
    expect(screen.getByText("YouTube")).toBeInTheDocument();
    expect(screen.getByText("Reddit")).toBeInTheDocument();
    expect(screen.getByText("LinkedIn")).toBeInTheDocument();
  });

  it("each app tile links to /app/:id", () => {
    renderIndex();
    const instagramLink = screen.getByText("Instagram").closest("a");
    expect(instagramLink).toHaveAttribute("href", "/app/instagram");
  });

  it("renders the how-it-works steps", () => {
    renderIndex();
    expect(screen.getByText(/Tap the app you want to intercept/)).toBeInTheDocument();
    expect(screen.getByText(/Each tap triggers a 30s mindful pause/)).toBeInTheDocument();
  });

  it("renders the why-this-works link", () => {
    renderIndex();
    expect(screen.getByText("Why this works")).toBeInTheDocument();
  });
});
