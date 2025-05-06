import Panel from "../layout/Panel";
import Text from "../Text";
import useStore from "../../store/useReviewPage";
import CommentItem from "./CommentItem";
import type { Comments } from "../../store/ReviewPage";

const CommentAside = () => {
  const page_id = useStore((state) => state.page_id);
  const reviewer_id = useStore((state) => state.reviewer_id);
  const getReviewerById = useStore((state) => state.getReviewerById);
  const getTotalComments = useStore((state) => state.getTotalComments);
  const getReviewerCommentsCount = useStore(
    (state) => state.getReviewerCommentsCount
  );
  const getTotalCommentsCount = useStore(
    (state) => state.getTotalCommentsCount
  );

  // 현재 페이지의 코멘트만 필터링
  const filteredComments = (comments: Comments[]) => {
    return comments.filter((comment) => comment.pageId === page_id);
  };

  const commentsCount = !!reviewer_id
    ? filteredComments(getReviewerById(reviewer_id)?.comments || []).length
    : filteredComments(getTotalComments()).length;

  const comments = !!reviewer_id
    ? filteredComments(getReviewerById(reviewer_id)?.comments || [])
    : filteredComments(getTotalComments());

  return (
    <aside className="max-w-[320px] w-full flex-shrink-0 overflow-hidden h-[calc(100vh-4rem)]">
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
        <section className="overflow-y-auto flex-1 flex flex-col gap-[1rem]">
          {comments.map((comment: Comments, index: number) => (
            <CommentItem key={comment.id} {...comment} index={index} />
          ))}
        </section>
      </Panel>
    </aside>
  );
};

export default CommentAside;
