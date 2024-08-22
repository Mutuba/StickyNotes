export const setNewOffset = (card, mouseMoveDir = { x: 0, y: 0 }) => {
  // Get the card's dimensions
  const cardWidth = card.offsetWidth;
  const cardHeight = card.offsetHeight;

  const offsetLeft = card.offsetLeft - mouseMoveDir.x;
  const offsetTop = card.offsetTop - mouseMoveDir.y;

  // Get the viewport dimensions
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  // Calculate the maximum allowable offsets
  const maxOffsetLeft = viewportWidth - cardWidth;
  const maxOffsetTop = viewportHeight - cardHeight;

  // Ensure the card stays within the viewport boundaries
  return {
    x:
      offsetLeft < 0
        ? 0
        : offsetLeft > maxOffsetLeft
        ? maxOffsetLeft
        : offsetLeft,
    y: offsetTop < 0 ? 0 : offsetTop > maxOffsetTop ? maxOffsetTop : offsetTop,
  };
};

export const autoGrow = (textAreaRef) => {
  const { current } = textAreaRef;
  current.style.height = "auto";
  current.style.height = current.scrollHeight + "px";
};
