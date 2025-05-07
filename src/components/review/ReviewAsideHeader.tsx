import Text from "../Text";
import useStore from "../../store/useReviewPage";
import { useParams } from "react-router-dom";
import Likes from "./Like";
const ReviewAsideHeader = () => {
  const reviewers = useStore((state) => state.reviewers);
  const reviewersLength = reviewers.length.toString();
  const commentsLength = useStore((state) => state.getTotalCommentsCount());

  const { name } = useParams();

  const pageName = {
    Netflix: "Netflix UI",
    Gemini: "Gemini UI",
  }[name ?? "Netflix"];

  return (
    <header>
      <Text
        color="white"
        weight="bold"
        size="lg"
        text={pageName ?? "Netflix UI"}
        className="!mb-[1rem]"
      />
      <div className="flex gap-[1.5rem]">
        <div>
          <Text
            color="white"
            weight="bold"
            size="lg"
            text={commentsLength.toString()}
          />
          <Text color="gray" weight="normal" size="sm" text="Comments" />
        </div>
        <div>
          <Text color="white" weight="bold" size="lg" text={reviewersLength} />
          <Text color="gray" weight="normal" size="sm" text="Reviewers" />
        </div>
        <div>
          <Likes />
          <Text color="gray" weight="normal" size="sm" text="Likes" />
        </div>
      </div>
    </header>
  );
};

export default ReviewAsideHeader;
