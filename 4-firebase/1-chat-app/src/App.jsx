import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Room from "./pages/room";
import Chat from "./pages/chat";
import Protected from "./components/protected";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<Protected />}>
          <Route path="/chat/:room" element={<Chat />} />
          <Route path="/" element={<Room />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
