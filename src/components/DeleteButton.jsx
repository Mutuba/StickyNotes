import PropTypes from "prop-types";
import Trash from "../icons/Trash";
import { db } from "../appwrite/databases";

const DeleteButton = ({ noteId, setNotes }) => {
  const handleDelete = async () => {
    db.notes.delete(noteId);
    setNotes((prevState) => prevState.filter((note) => note.$id !== noteId));
  };

  return (
    <div onClick={handleDelete}>
      <Trash />
    </div>
  );
};

DeleteButton.propTypes = {
  noteId: PropTypes.number.isRequired,
  setNotes: PropTypes.func.isRequired,
};

export default DeleteButton;
