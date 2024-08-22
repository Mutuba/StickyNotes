import { describe, test, expect, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import { fakeData as notes } from "../../assets/fakeData";
import NotesPage from "../../pages/NotesPage";

describe("NotesPage Component", () => {
  beforeEach(() => {
    render(<NotesPage />);
  });
  test("Should show title", () => {
    const cardText = screen.getAllByText(/Resources:/i);
    expect(cardText[0]).toBeInTheDocument();
    expect(screen.getAllByTestId("note-card")).toHaveLength(notes.length);
  });
});
