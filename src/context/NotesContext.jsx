import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import { db } from "../appwrite/databases";
import Spinner from "../icons/Spinner";
export const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const response = await db.notes.list();
    setNotes(response.documents);
    setLoading(false);
  };

  return (
    <NotesContext.Provider value={{ notes, setNotes }}>
      {loading ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <Spinner size="100" />
        </div>
      ) : (
        children
      )}
    </NotesContext.Provider>
  );
};

NotesProvider.propTypes = {
  children: PropTypes.node,
};

// export default NotesProvider;
