import Text from "./Text";
import useStore from "../store/useReviewPage";

const ReviewAsideHeader = () => {
  const reviewers = useStore((state) => state.reviewers);
  const reviewersLength = reviewers.length.toString();
  const comments = useStore((state) => state.comments);
  const commentsLength = comments.length.toString();

  return (
    <header>
      <Text
        color="white"
        weight="bold"
        size="lg"
        text="E-commerce Redesign"
        className="!mb-[1rem]"
      />
      <div className="flex gap-[1.5rem]">
        <div>
          <Text color="white" weight="bold" size="lg" text={commentsLength} />
          <Text color="gray" weight="normal" size="sm" text="Comments" />
        </div>
        <div>
          <Text color="white" weight="bold" size="lg" text={reviewersLength} />
          <Text color="gray" weight="normal" size="sm" text="Reviewers" />
        </div>
        <div>
          <Text color="white" weight="bold" size="lg" text="16" />
          <Text color="gray" weight="normal" size="sm" text="Likes" />
        </div>
      </div>
    </header>
  );
};

export default ReviewAsideHeader;