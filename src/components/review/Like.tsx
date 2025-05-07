import { useState } from "react";
import Text from "../Text";

const Likes = () => {
  const [like, setLike] = useState(16);

  return (
    <span onClick={() => setLike((prev) => prev + 1)} className="cursor-pointer select-none">
      <Text color="white" weight="bold" size="lg" text={like.toString()} />
    </span>
  );
};

export default Likes;
