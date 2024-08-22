import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import NoteCards from "../../components/NoteCards";
import { fakeData as notes } from "../../assets/fakeData";

describe("NoteCards Component", () => {
  test("renders the correct number of NoteCard components", () => {
    render(<NoteCards />);

    const cardText = screen.getAllByText(/Resources:/i);
    expect(cardText[0]).toBeInTheDocument();

    expect(screen.getAllByTestId("note-card")).toHaveLength(notes.length);
  });
});
