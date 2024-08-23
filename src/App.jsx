import { ToastContainer } from "react-toastify";
import NotesPage from "./pages/NotesPage";
import { NotesProvider } from "./context/NotesContext";

const App = () => {
  return (
    <div id="app">
      <NotesProvider>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={true}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <NotesPage />
      </NotesProvider>
    </div>
  );
};
export default App;
