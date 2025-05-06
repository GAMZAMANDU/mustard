import Panel from "./layout/Panel";
import Text from "./Text";
import ReviewAsideHeader from "./ReviewAsideHeader";
import ReviewAsidePages from "./ReviewAsidePages";
import ReviewAsideReviewersList from "./ReviewAsideReviewersList";
const ReviewAside = () => {
  return (
    <aside className="w-[240px] min-h-full flex-shrink-0">
      <Panel className="h-full p-[1rem] flex flex-col gap-[1.5rem]" borderDirection="right">
        <ReviewAsideHeader />
        <ReviewAsidePages />
        <ReviewAsideReviewersList />
      </Panel>

    </aside>
  );
};

export default ReviewAside;
