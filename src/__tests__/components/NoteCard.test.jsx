import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import NoteCard from "../../components/NoteCard";

const note = {
  $id: 2,
  body: 'Resources:\n- Book: "You Don\'t Know JS: Scope & Closures" by Kyle Simpson.\n\n- Online Course: "JavaScript Patterns" on Udemy.\n\n- Articles:\n"Understanding JavaScript Closures" on Medium.\n\n"Mastering JavaScript Modules" on Dev.to.',
  colors: {
    id: "color-blue",
    colorHeader: "#9BD1DE",
    colorBody: "#A6DCE9",
    colorText: "#18181A",
  },
  position: { x: 305, y: 110 },
};

describe("NoteCards Component", () => {
  test("renders the correct number of NoteCard components", () => {
    render(<NoteCard note={note} />);
    expect(screen.getByText(/Resources:/i)).toBeInTheDocument();
    expect(screen.getByTestId("note-card")).toBeInTheDocument();
  });
});
