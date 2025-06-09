import { describe, expect, test } from "vitest";
import { Navigation } from "../components/navigation";
import { MemoryRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

describe("Navigation", () => {
  test("zeigt den Link zur Startseite an", () => {
    render(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );

    const homeLink = screen.getByText("Home");
    expect(homeLink).toBeInTheDocument();
  });
});
