import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Instructions from "./Instructions";

const mockNavigate = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  return { ...actual, useNavigate: () => mockNavigate };
});

describe("Instructions page", () => {
  beforeEach(() => {
    mockNavigate.mockClear();
    localStorage.clear();
  });

  it("redirects to / when no apps stored", () => {
    render(
      <MemoryRouter>
        <Instructions />
      </MemoryRouter>
    );
    expect(mockNavigate).toHaveBeenCalledWith("/");
  });

  it("renders selected apps from localStorage", () => {
    localStorage.setItem("doombreaker-apps", JSON.stringify(["instagram", "reddit"]));
    render(
      <MemoryRouter>
        <Instructions />
      </MemoryRouter>
    );
    expect(screen.getByText("Instagram")).toBeInTheDocument();
    expect(screen.getByText("Reddit")).toBeInTheDocument();
  });

  it("renders setup steps", () => {
    localStorage.setItem("doombreaker-apps", JSON.stringify(["instagram"]));
    render(
      <MemoryRouter>
        <Instructions />
      </MemoryRouter>
    );
    expect(screen.getAllByText(/Add to Home Screen/).length).toBeGreaterThanOrEqual(1);
  });

  it("shows preview link", () => {
    localStorage.setItem("doombreaker-apps", JSON.stringify(["tiktok"]));
    render(
      <MemoryRouter>
        <Instructions />
      </MemoryRouter>
    );
    expect(screen.getByText(/Preview the interception/)).toBeInTheDocument();
  });
});
