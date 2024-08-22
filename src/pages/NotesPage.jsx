import { useContext } from "react";
// import { db } from "../appwrite/databases";
import NoteCard from "../components/NoteCard";
import { NotesContext } from "../context/NotesContext";

const NotesPage = () => {
  const { notes } = useContext(NotesContext);
  // const [notes, setNotes] = useState([]);
  // useEffect(() => {
  //   fetchNotes();
  // }, []);

  // const fetchNotes = async () => {
  //   const response = await db.notes.list();
  //   setNotes(response.documents);
  // };
  return (
    <div>
      {notes.map((note) => (
        <NoteCard note={note} key={note.$id} />
      ))}
    </div>
  );
};

export default NotesPage;
