import Text from "./Text";
import ReviewAsideReviewersItem from './ReviewAsideReviewersItem';

const ReviewAsideReviewersList = () => {
  return (
    <section>
      <Text color="gray" weight="bold" size="md" text="REVIEWERS" />
      <div className="flex flex-col">
        <ReviewAsideReviewersItem who="John Doe" />
        <ReviewAsideReviewersItem who="John Doe" />
      </div>
    </section>  )
}

export default ReviewAsideReviewersList