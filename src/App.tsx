import { Toaster } from "react-hot-toast";
import "./App.css";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#1f2937",
            color: "#bfdbfe",
            borderRadius: "10rem",
            padding: "12px 16px",
          },
          success: {
            iconTheme: {
              primary: "#3b82f6",
              secondary: "#1f2937",
            },
          },
          error: {
            style: {
              background: "#1f2937",
              color: "#fecaca",
            },
            iconTheme: {
              primary: "#ef4444",
              secondary: "#1f2937",
            },
          },
        }}
      />
      <HomePage />
    </>
  );
}

export default App;
