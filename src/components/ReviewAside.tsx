import Panel from "./layout/Panel";
import Text from "./Text";
import ReviewAsideHeader from "./ReviewAsideHeader";
import ReviewAsidePages from "./ReviewAsidePages";
import ReviewAsideReviewersList from "./ReviewAsideReviewersList";
const ReviewAside = () => {
  return (
    <aside className="max-w-[240px] w-full flex-shrink-0 overflow-hidden h-[calc(100vh-4rem)]">
      <Panel
        className="h-full flex flex-col p-[1rem] gap-[1rem]"
        borderDirection="right"
      >
        <header>
          <ReviewAsideHeader />
        </header>
        <section className="overflow-y-auto flex-1 flex flex-col gap-[1rem]">
          <ReviewAsidePages />
          <ReviewAsideReviewersList />
        </section>
      </Panel>
    </aside>
  );
};

export default ReviewAside;
