import React from "react";
import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import { Button } from "../components/button";

describe("Button", () => {
  test("wird mit dem richtigen Text angezeigt", () => {
    render(<Button text="Test-Button" />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Test-Button");
  });
});
