import Text from "./Text";
import ReviewAsideReviewersItem from "./ReviewAsideReviewersItem";
import useStore from "../store/useReviewPage";

const ReviewAsideReviewersList = () => {
  const reviewers = useStore((state) => state.reviewers);
  const reviewer_id = useStore((state) => state.reviewer_id);

  return (
    <section>
      <Text color="gray" weight="bold" size="md" text="REVIEWERS" />
      <div className="flex flex-col">
        {reviewers.map((reviewer) => (
          <ReviewAsideReviewersItem
            key={reviewer.id}
            text={reviewer.name}
            id={reviewer.id}
            selected={reviewer.id === reviewer_id}
          />
        ))}
      </div>
    </section>
  );
};

export default ReviewAsideReviewersList;
