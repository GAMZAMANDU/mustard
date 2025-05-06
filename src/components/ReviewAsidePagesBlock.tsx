import Text from "./Text";
import useStore from "../store/useReviewPage";

interface ReviewAsidePagesBlockProps {
  text: string;
  selected?: boolean;
  id: string;
}

const ReviewAsidePagesBlock = ({
  text,
  selected = false,
  id,
}: ReviewAsidePagesBlockProps) => {
  const setPageId = useStore((state) => state.setPageId);

  return (
    <div
      className={`cursor-pointer flex h-[36px] px-[12px] items-center self-stretch rounded-[4px] mt-[0.75rem] ${
        selected ? "bg-[#1A1A1A]" : ""
      }`}
      onClick={() => setPageId(id)}
    >
      <Text
        color={selected ? "primary" : "gray"}
        weight="normal"
        size="md"
        text={text}
      />
    </div>
  );
};

export default ReviewAsidePagesBlock;
