import useStore from "../store/useReviewPage";
import type { Comments } from "../store/ReviewPage";

const ReviewUI = () => {
  const page_id = useStore((state) => state.page_id);
  const reviewer_id = useStore((state) => state.reviewer_id);
  const getReviewerById = useStore((state) => state.getReviewerById);
  const getTotalComments = useStore((state) => state.getTotalComments);

  // 현재 페이지의 코멘트만 필터링
  const comments: Comments[] =
    reviewer_id && getReviewerById(reviewer_id)
      ? getReviewerById(reviewer_id)?.comments?.filter(
          (c) => c.pageId === page_id
        ) || []
      : getTotalComments().filter((c) => c.pageId === page_id);

  return (
    <main className="relative flex items-center justify-center h-[calc(100vh-4rem)]">
      <div className="relative w-[56rem] max-h-full">
        <img
          src="/assets/ui/Netflix-0.png"
          alt="review-page"
          className="object-contain w-full h-full"
        />
        {/* 코멘트 마커 레이어 */}
        {comments.map((comment, index) => (
          <div
            key={comment.id}
            className="absolute z-[9999]"
            style={{
              left: `${comment.position.x}%`,
              top: `${comment.position.y}%`,
              transform: "translate(-50%, -50%)",
            }}
            onClick={() => {
              console.log(comment);
            }}
          >
            <div className="pointer-cursor flex w-[1.5rem] h-[1.5rem] justify-center items-center rounded-[1rem] bg-[#3ECF8E] text-[16px] leading-none leading-[initial] text-white">
              {index + 1}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ReviewUI;
