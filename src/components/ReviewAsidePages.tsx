import Text from "./Text";
import ReviewAsidePagesBlock from "./ReviewAsidePagesBlock";

const ReviewAsidePages = () => {
  return (
    <section>
      <Text color="gray" weight="bold" size="md" text="PAGES" />
      <div className="flex flex-col">
        <ReviewAsidePagesBlock text="Home" selected />
        <ReviewAsidePagesBlock text="Products" />
      </div>
    </section>
  );
};

export default ReviewAsidePages;
