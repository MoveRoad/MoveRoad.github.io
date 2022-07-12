import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import TogetherSports from "./pages/projects/TogetherSports";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/project/together-sports" element={<TogetherSports />} />
      </Routes>
    </div>
  );
}

export default App;
