import Text from "./Text";

interface ReviewAsidePagesBlockProps {
  text: string;
  selected?: boolean;
}

const ReviewAsidePagesBlock = ({
  text,
  selected = false,
}: ReviewAsidePagesBlockProps) => {
  return (
    <div
      className={`flex h-[36px] px-[12px] items-center self-stretch rounded-[4px] mt-[0.75rem] ${
        selected ? "bg-[#1A1A1A]" : ""
      }`}
    >
      <Text color={selected ? "primary" : "gray"} weight="normal" size="md" text={text} />
    </div>
  );
};

export default ReviewAsidePagesBlock;
