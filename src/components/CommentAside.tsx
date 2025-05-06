import Panel from "./layout/Panel";
import Text from "./Text";
import useStore from "../store/useReviewPage";
import CommentItem from "./CommentItem";

const ReviewAside = () => {
  const reviewer_id = useStore((state) => state.reviewer_id);
  const getReviewerById = useStore((state) => state.getReviewerById);
  const getTotalComments = useStore((state) => state.getTotalComments);
  const getReviewerCommentsCount = useStore(
    (state) => state.getReviewerCommentsCount
  );
  const getTotalCommentsCount = useStore(
    (state) => state.getTotalCommentsCount
  );

  const commentsCount = !!reviewer_id
    ? getReviewerCommentsCount(reviewer_id)
    : getTotalCommentsCount();

  const comments = !!reviewer_id
    ? getReviewerById(reviewer_id)?.comments || []
    : getTotalComments();

  return (
    <aside className="max-w-[320px] w-full min-h-full flex-shrink-0">
      <Panel
        className="h-full p-[1rem] flex flex-col gap-[1rem]"
        borderDirection="right"
      >
        <header>
          <Text
            color="white"
            weight="bold"
            size="lg"
            text={`Comments (${commentsCount})`}
          />
        </header>
        <section className="overflow-y-scroll flex flex-col gap-[1rem]">
          {comments.map((comment, index) => (
            <CommentItem key={comment.id} {...comment} index={index} />
          ))}
        </section>
      </Panel>
    </aside>
  );
};

export default ReviewAside;
