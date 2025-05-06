import Header from "./components/Header";
import ReviewAside from "./components/ReviewAside";
import { useEffect } from "react";
import { generateMockData } from "./data/generateMockData";
import useStore from "./store/useReviewPage";

function App() {
  const setPages = useStore((state) => state.setPages);
  const setReviewers = useStore((state) => state.setReviewers);

  useEffect(() => {
    const { pages, reviewers } = generateMockData(3, 4, 5);
    setPages(pages);
    setReviewers(reviewers);
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <ReviewAside />
      </main>
    </div>
  );
}

export default App;
