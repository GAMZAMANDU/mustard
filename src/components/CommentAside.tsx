import Panel from "./layout/Panel";
import Text from "./Text";
import useStore from "../store/useReviewPage";

const ReviewAside = () => {
  const reviewer_id = useStore((state) => state.reviewer_id);
  const commentsCount = !!reviewer_id
    ? useStore((state) => state.getReviewerCommentsCount(reviewer_id))
    : useStore((state) => state.getTotalCommentsCount());

  return (
    <aside className="min-w-[320px] min-h-full flex-shrink-0">
      <Panel
        className="h-full p-[1rem] flex flex-col gap-[1.5rem]"
        borderDirection="right"
      >
        <header>
          <Text
            color="white"
            weight="bold"
            size="lg"
            text={`Comments (${commentsCount})`}
            className="!mb-[1rem]"
          />
        </header>
      </Panel>
    </aside>
  );
};

export default ReviewAside;
