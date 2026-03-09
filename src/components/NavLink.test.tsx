import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { NavLink } from "./NavLink";

describe("NavLink", () => {
  it("renders a link with text", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <NavLink to="/about">About</NavLink>
      </MemoryRouter>
    );
    expect(screen.getByText("About")).toBeInTheDocument();
  });

  it("applies activeClassName when route matches", () => {
    render(
      <MemoryRouter initialEntries={["/about"]}>
        <NavLink to="/about" className="base" activeClassName="active">
          About
        </NavLink>
      </MemoryRouter>
    );
    const link = screen.getByText("About");
    expect(link.className).toContain("active");
  });

  it("does not apply activeClassName when route doesn't match", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <NavLink to="/about" className="base" activeClassName="active">
          About
        </NavLink>
      </MemoryRouter>
    );
    const link = screen.getByText("About");
    expect(link.className).not.toContain("active");
  });
});
