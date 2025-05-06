import type { Comments } from "../store/ReviewPage";
import Text from "./Text";
import useStore from "../store/useReviewPage";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

interface CommentItemProps extends Omit<Comments, "position"> {
  index: number;
}

const CommentItem = ({
  index,
  id,
  contents,
  created_at,
  reviewerId,
  tag,
}: CommentItemProps) => {
  const reviewer = useStore((state) => state.getReviewerById(reviewerId));

  return (
    <div className="flex flex-col gap-[0.5rem] p-[0.75rem] bg-[#1A1A1A] rounded-[4px]">
      <header>
        <div className="flex items-center justify-between">
          <div
            className="gap-[0.5rem] cursor-pointer flex items-center self-stretch rounded-[4px]"
            onClick={() => {}}
          >
            <img
              src={reviewer?.img || "/assets/Avatar.svg"}
              alt="avatar"
              className="bg-[#1A1A1A] rounded-[14px] w-[24px] h-[24px]"
            />
            <Text
              color="white"
              weight="normal"
              size="md"
              text={reviewer?.name || ""}
              className="cursor-pointer"
            />
          </div>
          <Text
            color="gray"
            weight="normal"
            size="sm"
            text={dayjs(created_at).fromNow()}
          />
        </div>
      </header>
      <section className="flex flex-col gap-[0.25rem]">
        <div className="inline-flex w-fit h-[1.35rem] px-[4px] justify-center items-center bg-[#1D3A2D] rounded-[16px] flex-grow-0 gap-[0.25rem]">
          <div className="flex w-[1rem] h-[1rem] justify-center items-center rounded-[1rem] bg-[#3ECF8E] text-[12px] leading-none leading-[initial]">
            {index + 1}
          </div>
          <Text
            color="primary"
            weight="normal"
            size="sm"
            text={tag}
            className="leading-none leading-[initial]"
          />
        </div>
        <Text
          color="white"
          weight="normal"
          size="md"
          text={contents}
          className="break-words"
        />
      </section>
    </div>
  );
};

export default CommentItem;
