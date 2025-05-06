import Text from "./Text";
import ReviewAsidePagesBlock from "./ReviewAsidePagesBlock";
import useStore from "../store/useReviewPage";

const ReviewAsidePages = () => {
  const pages = useStore((state) => state.pages);
  const page_id = useStore((state) => state.page_id);
  
  return (
    <section>
      <Text color="gray" weight="bold" size="md" text="PAGES" />
      <div className="flex flex-col">
        {pages.map((page) => (
          <ReviewAsidePagesBlock key={page.id} text={page.name} selected={page.id === page_id} id={page.id} />
        ))}
      </div>
    </section>
  );
};

export default ReviewAsidePages;
