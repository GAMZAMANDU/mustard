import Header from "./components/Header";
import ReviewAside from "./components/ReviewAside";
import { useEffect } from "react";
import { generateMockData } from "./data/generateMockData";
import useStore from "./store/useReviewPage";
import CommentAside from "./components/CommentAside";
import ReviewUI from "./components/ReviewUI";

function App() {
  const setPages = useStore((state) => state.setPages);
  const setReviewers = useStore((state) => state.setReviewers);
  const setPageId = useStore((state) => state.setPageId);

  useEffect(() => {
    const { pages, reviewers } = generateMockData(3, 4, 5);
    setPages(pages);
    setReviewers(reviewers);
    setPageId(pages[0].id);
  }, []);

  return (
    <div className="flex flex-col h-screen overflow-hidden">
      <Header />
      <main className="flex justify-between flex-1 h-full min-h-0">
        <ReviewAside />
        <ReviewUI />
        <CommentAside />
      </main>
    </div>
  );
}

export default App;
