import Text from "./Text";
import ReviewAsideReviewersItem from "./ReviewAsideReviewersItem";
import useStore from "../store/useReviewPage";

const ReviewAsideReviewersList = () => {
  const reviewers = useStore((state) => state.reviewers);
  const reviewer_id = useStore((state) => state.reviewer_id);
  const setReviewerId = useStore((state) => state.setReviewerId);

  return (
    <section className="bg-[#131313]" onClick={() => setReviewerId(null)}>
      <Text color="gray" weight="bold" size="md" text="REVIEWERS" />
      <div className="flex flex-col" onClick={(e) => e.stopPropagation()}>
        {reviewers.map((reviewer) => (
          <ReviewAsideReviewersItem
            key={reviewer.id}
            text={reviewer.name}
            id={reviewer.id}
            img={reviewer.img}
            selected={reviewer.id  === reviewer_id}
          />
        ))}
      </div>
    </section>
  );
};

export default ReviewAsideReviewersList;
