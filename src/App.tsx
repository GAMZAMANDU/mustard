import { Routes, Route } from "react-router-dom";
import ReviewPage from "./pages/ReviewPage";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/review" element={<ReviewPage />} />
    </Routes>
  );
}

export default App;
