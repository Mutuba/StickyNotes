import { describe, test, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import NotesPage from "../../pages/NotesPage";
describe("NotesPage test", () => {
  beforeEach(() => {
    render(<NotesPage />);
  });
  test("Should show title", () => {
    expect(screen.getByText(/NotesPage/i)).toBeInTheDocument();
  });
});
