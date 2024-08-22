import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Trash from "../icons/Trash";

const NoteCard = ({ note }) => {
  const [position, setPosition] = useState(JSON.parse(note.position));
  const colors = JSON.parse(note.colors);
  const body = JSON.parse(note.body);
  const textAreaRef = useRef(null);
  let mouseStartPos = { x: 0, y: 0 };
  const cardRef = useRef(null);

  useEffect(() => {
    autoGrow(textAreaRef);
  }, []);

  const autoGrow = (textAreaRef) => {
    const { current } = textAreaRef;
    current.style.height = "auto";
    current.style.height = current.scrollHeight + "px";
  };

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

    setPosition({
      x: cardRef.current.offsetLeft - mouseMoveDir.x,
      y: cardRef.current.offsetTop - mouseMoveDir.y,
    });
  };
  /*
  Purpose: Resets the height of the <textarea> to "auto". This removes any previously set height 
  to ensure that the element can shrink if necessary. By setting it to "auto", the browser 
  recalculates the height based on the content, as if it had no predefined height.
*/

  /*
  scrollHeight: This property gives the height of the content inside the <textarea>, 
  including content that is not visible due to overflow. By setting the style.height to this value, 
  the text area will grow (or shrink) to fit all its content without the need for a scrollbar.
*/

  return (
    <div
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
      x: PropTypes.number,
      y: PropTypes.number,
    }),
    colors: PropTypes.shape({
      colorBody: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default NoteCard;
