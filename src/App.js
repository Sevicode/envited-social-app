import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import CreateEvent from "./pages/CreateEvent";
import EventPage from "./pages/EventPage";
import LandingPage from "./pages/LandingPage";


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/event" element={<EventPage />} />
          <Route path="/create" element={<CreateEvent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
