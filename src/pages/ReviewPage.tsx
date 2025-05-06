import Header from "../components/Header";
import ReviewAside from "../components/review/ReviewAside";
import ReviewUI from "../components/review/ReviewUI";
import CommentAside from "../components/review/CommentAside";
import { useEffect } from "react";
import { generateMockData } from "../data/generateMockData";
import useStore from "../store/useReviewPage";
import { useParams } from "react-router-dom";

const ReviewPage = () => {
  const { name } = useParams();

  const setPages = useStore((state) => state.setPages);
  const setReviewers = useStore((state) => state.setReviewers);
  const setPageId = useStore((state) => state.setPageId);

  const pageName = {
    Netflix: ["main", "main/pop-up", "choice"],
    Gemini: ["main", "chat"],
  }[name ?? "Netflix"] ?? ["main"];

  const pageImage = {
    Netflix: [
      "/assets/ui/Netflix-0.png",
      "/assets/ui/Netflix-1.png",
      "/assets/ui/Netflix-2.png",
    ],
    Gemini: ["/assets/ui/Gemini-0.png", "/assets/ui/Gemini-1.png"],
  }[name ?? "Netflix"] ?? ["/assets/ui/Netflix-0.png"];

  useEffect(() => {
    const { pages, reviewers } = generateMockData(pageName, pageImage, 4, 5);
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
};

export default ReviewPage;
