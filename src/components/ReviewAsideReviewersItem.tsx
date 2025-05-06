import Text from "./Text";

interface ReviewAsidePagesBlockProps {
  who: string;
  selected?: boolean;
}

const ReviewAsidePagesBlock = ({
  who: text,
  selected = false,
}: ReviewAsidePagesBlockProps) => {
  return (
    <div
      className="flex gap-[0.5rem] items-center mt-[0.75rem]"
    >
      <img src="/assets/Avatar.svg" alt="avatar" className="w-[24px] h-[24px]"/>
      <Text color="white" weight="normal" size="md" text={text} />
    </div>
  );
};

export default ReviewAsidePagesBlock;
