export const setNewOffset = (card, mouseMoveDir = { x: 0, y: 0 }) => {
  const cardWidth = card.offsetWidth;
  const cardHeight = card.offsetHeight;

  const offsetLeft = card.offsetLeft - mouseMoveDir.x;
  const offsetTop = card.offsetTop - mouseMoveDir.y;

  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  const maxOffsetLeft = viewportWidth - cardWidth;
  const maxOffsetTop = viewportHeight - cardHeight;

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

export const setZIndex = (selectedCard) => {
  selectedCard.style.zIndex = 999;

  Array.from(document.getElementsByClassName("card")).forEach((card) => {
    if (card !== selectedCard) {
      card.style.zIndex = selectedCard.style.zIndex - 1;
    }
  });
};
