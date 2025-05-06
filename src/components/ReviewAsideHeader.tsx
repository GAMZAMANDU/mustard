import React from 'react'
import Text from "./Text";

const ReviewAsideHeader = () => {
  return (
    <header>
    <Text color="white" weight="bold" size="lg" text="E-commerce Redesign" className="!mb-[1rem]"/>
    <div className="flex gap-[1.5rem]">
      <div>
        <Text color="white" weight="bold" size="lg" text="16"/>
        <Text color="gray" weight="normal" size="sm" text="Comments" />
      </div>
      <div>
        <Text color="white" weight="bold" size="lg" text="16"/>
        <Text color="gray" weight="normal" size="sm" text="Reviewers" />
      </div>
      <div>
        <Text color="white" weight="bold" size="lg" text="16"/>
        <Text color="gray" weight="normal" size="sm" text="Likes" />
      </div>
    </div>
  </header>
  )
}

export default ReviewAsideHeader