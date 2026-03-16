import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Index from "./Index";

const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return { ...actual, useNavigate: () => mockNavigate };
});

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
  });

  it("generate button is disabled when no apps selected", () => {
    renderIndex();
    const btn = screen.getByRole("button", { name: /Select apps to continue/i });
    expect(btn).toBeDisabled();
  });

  it("selecting an app enables the button", () => {
    renderIndex();
    fireEvent.click(screen.getByText("Instagram"));
    const btn = screen.getByRole("button", { name: /Generate 1 shortcut/i });
    expect(btn).not.toBeDisabled();
  });

  it("toggling an app off deselects it", () => {
    renderIndex();
    fireEvent.click(screen.getByText("Instagram"));
    fireEvent.click(screen.getByText("Instagram"));
    const btn = screen.getByRole("button", { name: /Select apps to continue/i });
    expect(btn).toBeDisabled();
  });

  it("navigates to /instructions on generate", () => {
    renderIndex();
    fireEvent.click(screen.getByText("Instagram"));
    fireEvent.click(screen.getByRole("button", { name: /Generate/i }));
    expect(mockNavigate).toHaveBeenCalledWith("/instructions");
  });

  it("stores selected apps in localStorage", () => {
    renderIndex();
    fireEvent.click(screen.getByText("Reddit"));
    fireEvent.click(screen.getByRole("button", { name: /Generate/i }));
    const stored = JSON.parse(localStorage.getItem("dopamean-apps")!);
    expect(stored).toContain("reddit");
  });
});
