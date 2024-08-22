import { describe, test, expect } from "vitest";
import { setNewOffset, autoGrow } from "../utils";
describe("setNewOffset", () => {
  test("should return the correct offset within the viewport boundaries", () => {
    const mockCard = {
      offsetWidth: 100,
      offsetHeight: 100,
      offsetLeft: 50,
      offsetTop: 50,
    };

    window.innerWidth = 800;
    window.innerHeight = 600;

    const mouseMoveDir = { x: -20, y: -30 };
    const result = setNewOffset(mockCard, mouseMoveDir);

    expect(result).toEqual({ x: 70, y: 80 });
  });

  test("should prevent the card from going out of the left/top bounds", () => {
    const mockCard = {
      offsetWidth: 100,
      offsetHeight: 100,
      offsetLeft: 10,
      offsetTop: 10,
    };

    const mouseMoveDir = { x: 20, y: 30 };
    const result = setNewOffset(mockCard, mouseMoveDir);

    expect(result).toEqual({ x: 0, y: 0 });
  });

  test("should prevent the card from going out of the right/bottom bounds", () => {
    const mockCard = {
      offsetWidth: 100,
      offsetHeight: 100,
      offsetLeft: 750,
      offsetTop: 550,
    };

    window.innerWidth = 800;
    window.innerHeight = 600;

    const mouseMoveDir = { x: -20, y: -30 };
    const result = setNewOffset(mockCard, mouseMoveDir);

    expect(result).toEqual({ x: 700, y: 500 });
  });
});

describe("autoGrow", () => {
  test("should adjust the height of the textarea to fit its content", () => {
    const mockTextArea = {
      style: { height: "0px" },
      scrollHeight: 100,
    };

    const mockRef = { current: mockTextArea };
    autoGrow(mockRef);

    expect(mockTextArea.style.height).toBe("100px");
  });

  test("should reset the height to auto before resizing", () => {
    const mockTextArea = {
      style: { height: "50px" },
      scrollHeight: 100,
    };

    const mockRef = { current: mockTextArea };
    autoGrow(mockRef);

    expect(mockTextArea.style.height).toBe("100px");
    expect(mockTextArea.style.height).not.toBe("50px");
  });
});
