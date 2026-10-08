/**
 * @vitest-environment jsdom
 */
import React from "react";
import { render, screen, fireEvent, within, waitFor } from "@testing-library/react";
import { MemoryRouter, Routes, Route } from "react-router-dom";
import { describe, it, expect, vi } from "vitest";
import Home from "./Home";
import Works from "./Works";
import ProjectDetail from "./ProjectDetail";
import Academy from "./Academy";
import ProgramDetail from "./ProgramDetail";
import SessionReport from "./SessionReport";
import Team from "./Team";
import Contact from "./Contact";

vi.mock("../utils/api.js", () => ({ default: { get: vi.fn(), post: vi.fn() } }));

const renderAt = (path, routePath, element) =>
  render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path={routePath} element={element} />
      </Routes>
    </MemoryRouter>
  );

describe("TopestTech public site", () => {
  it("home shows the hero, truthful stats and no Acadevo branding claims", () => {
    renderAt("/", "/", <Home />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(/Top Code\. Top Solutions\. Shape the World\./);
    expect(screen.getAllByText("32").length).toBeGreaterThan(0);
    expect(screen.queryByText(/200\+|10,000\+|1\.2B/)).toBeNull();
  });

  it("works page filters projects by category", async () => {
    renderAt("/works", "/works", <Works />);
    expect(screen.getAllByText("Acadevo").length).toBeGreaterThan(0);
    fireEvent.click(screen.getByRole("tab", { name: /^Fintech/ }));
    await waitFor(() => expect(screen.queryByRole("heading", { name: "Acadevo" })).toBeNull());
    expect(screen.getByRole("heading", { name: "Penwallet" })).toBeInTheDocument();
  });

  it("project detail renders a case study and a 404 for unknown ids", () => {
    const { unmount } = renderAt("/works/acadevo", "/works/:id", <ProjectDetail />);
    expect(screen.getByText("Key Features")).toBeInTheDocument();
    unmount();
    renderAt("/works/does-not-exist", "/works/:id", <ProjectDetail />);
    expect(screen.getByText("Page not found")).toBeInTheDocument();
  });

  it("academy and program detail render", () => {
    const { unmount } = renderAt("/academy", "/academy", <Academy />);
    expect(screen.getByText(/Student feedback will appear here/)).toBeInTheDocument();
    unmount();
    renderAt("/academy/programs/frontend-development", "/academy/programs/:id", <ProgramDetail />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Frontend Development");
  });

  it("session report has exactly the three parts", () => {
    renderAt("/reports/two-week-session", "/reports/two-week-session", <SessionReport />);
    const parts = screen.getAllByText(/^Part \d$/);
    expect(parts.map((p) => p.textContent)).toEqual(["Part 1", "Part 2", "Part 3"]);
    expect(screen.getByRole("heading", { name: "What We Are Embarking On" })).toBeInTheDocument();
  });

  it("team card opens the profile modal", () => {
    renderAt("/team", "/team", <Team />);
    fireEvent.click(screen.getByRole("button", { name: /View profile of Edison N.A/ }));
    const dialog = screen.getByRole("dialog");
    expect(within(dialog).getByText("Founder & AI Tutor")).toBeInTheDocument();
  });

  it("contact form preselects the inquiry type and validates input", () => {
    renderAt("/contact?type=academy", "/contact", <Contact />);
    expect(screen.getByLabelText("Inquiry type")).toHaveValue("academy");
    fireEvent.click(screen.getByRole("button", { name: /Send Message/ }));
    expect(screen.getByText(/Please fill in your name, email and message/)).toBeInTheDocument();
  });
});
