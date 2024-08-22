import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Trash from "../icons/Trash";
import { setNewOffset, autoGrow } from "../utils";

const NoteCard = ({ note }) => {
  const [position, setPosition] = useState(note.position);
  const colors = note.colors;
  const body = note.body;
  const textAreaRef = useRef(null);
  let mouseStartPos = { x: 0, y: 0 };
  const cardRef = useRef(null);

  useEffect(() => {
    autoGrow(textAreaRef);
  }, []);

  const mouseDown = (e) => {
    mouseStartPos.x = e.clientX;
    mouseStartPos.y = e.clientY;
    document.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseup", mouseUp);
  };

  const mouseUp = () => {
    document.removeEventListener("mousemove", mouseMove);
    document.removeEventListener("mouseup", mouseUp);
  };

  const mouseMove = (e) => {
    let mouseMoveDir = {
      x: mouseStartPos.x - e.clientX,
      y: mouseStartPos.y - e.clientY,
    };

    mouseStartPos.x = e.clientX;
    mouseStartPos.y = e.clientY;

    const newPosition = setNewOffset(cardRef.current, mouseMoveDir);
    setPosition(newPosition);
  };

  return (
    <div
      data-testid="note-card"
      ref={cardRef}
      className="card"
      style={{
        backgroundColor: colors.colorBody,
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    >
      <div
        className="card-header"
        onMouseDown={mouseDown}
        style={{ backgroundColor: colors.colorHeader }}
      >
        <Trash />
      </div>

      <div className="card-body">
        <textarea
          ref={textAreaRef}
          onInput={() => {
            autoGrow(textAreaRef);
          }}
          style={{ color: colors.colorText }}
          defaultValue={body}
        ></textarea>
      </div>
    </div>
  );
};

NoteCard.propTypes = {
  note: PropTypes.shape({
    body: PropTypes.string.isRequired,
    position: PropTypes.shape({
      x: PropTypes.number.isRequired,
      y: PropTypes.number.isRequired,
    }).isRequired,
    colors: PropTypes.shape({
      id: PropTypes.string.isRequired,
      colorHeader: PropTypes.string.isRequired,
      colorBody: PropTypes.string.isRequired,
      colorText: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};

export default NoteCard;
