import { render, screen } from "@testing-library/react";
import { Status } from "../components/status";

describe("Status", () => {
  test("zeigt 🟢 für 'Alive'", () => {
    render(<Status status="Alive" />);
    expect(screen.getByText(/🟢 Alive/i)).toBeInTheDocument();
  });

  test("zeigt 🔴 für 'Dead'", () => {
    render(<Status status="Dead" />);
    expect(screen.getByText(/🔴 Dead/i)).toBeInTheDocument();
  });

  test("zeigt ⚪️ für unbekannten Status", () => {
    render(<Status status="Unknown" />);
    expect(screen.getByText(/⚪️ Unknown/i)).toBeInTheDocument();
  });

  test("zeigt ⚪️ wenn leer", () => {
    render(<Status status="" />);
    expect(screen.getByText(/⚪️/)).toBeInTheDocument();
  });
});
