import Text from "../Text";
import useStore from "../../store/useReviewPage";

interface ReviewAsideReviewersItemProps {
  img: string;
  text: string;
  selected?: boolean;
  id: string;
}

const ReviewAsideReviewersItem = ({
  text,
  selected = false,
  id,
  img,
}: ReviewAsideReviewersItemProps) => {
  const setReviewerId = useStore((state) => state.setReviewerId);
  return (
    <div
      className="gap-[0.5rem] cursor-pointer flex h-[36px] items-center self-stretch rounded-[4px] mt-[0.75rem]"
      onClick={() => setReviewerId(id)}
    >
      <img
        src={img}
        alt="avatar"
        className={`bg-[#1A1A1A] rounded-[14px] w-[24px] h-[24px] ${
          selected &&
          "outline outline-2 outline-[#3ECF8E] outline-offset-[-2px]"
        }`}
      />
      <Text
        color="white"
        weight="normal"
        size="md"
        text={text}
        className="cursor-pointer"
      />
    </div>
  );
};

export default ReviewAsideReviewersItem;
