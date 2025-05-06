import React from 'react'
import Text from '../Text'
interface ArticleProps {
  name: string;
  description: string;
  img: string;
  reviewer: string;
}

const Article = ({name, description, img, reviewer}: ArticleProps) => {
  return (
    <article>
      <div className='bg-[#1D1D1D] px-[54px] py-[62px] mb-[1.5rem]'>
        <img src={img} alt="" className='w-[252px] h-[173px]'/>
      </div>
      <div className='flex items-center gap-[4px]'>
        <img src={reviewer} alt="" className='w-[32px] h-[32px]'/>
        <div>
          <Text color="white" weight="bold" size="lg" text={name} />
          <Text color="white" weight="normal" size="md" text={description}/>
        </div>
      </div>
    </article>
  )
}

export default Article