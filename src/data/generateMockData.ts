import { faker } from '@faker-js/faker';
import type { Page, Reviewer, Comments, CommentPosition } from "../store/ReviewPage";

// Page 데이터 생성 함수
const generatePage = (): Page => {
  return {
    id: faker.string.uuid(),
    name: faker.system.fileName(),
    img: faker.image.url()
  };
}; 

// CommentPosition 데이터 생성 함수
const generateCommentPosition = (pageId: string): CommentPosition => {
  return {
    x: faker.number.float({ min: 0, max: 100 }),
    y: faker.number.float({ min: 0, max: 100}),
    page: pageId
  };
};

// Comment 데이터 생성 함수
const generateComment = (pages: Page[], reviewerId: string): Comments => {
  const pageId = faker.helpers.arrayElement(pages).id;
  
  return {
    id: faker.string.uuid(),
    pageId: pageId,
    contents: faker.lorem.paragraph(),
    created_at: faker.date.recent(),
    reviewerId: reviewerId,
    tag: faker.helpers.arrayElement(['header', 'main', 'logo', 'list', 'footer', 'nav', 'button', 'form', 'image']),
    position: generateCommentPosition(pageId)
  };
}; 

// Reviewer 데이터 생성 함수 (comments 포함)
const generateReviewer = (pages: Page[], commentsPerReviewer: number): Reviewer => {
  const reviewerId = faker.string.uuid();
  const comments = Array(commentsPerReviewer)
    .fill(null)
    .map(() => generateComment(pages, reviewerId));

  return {
    id: reviewerId,
    name: faker.person.fullName(),
    img: faker.image.avatar(),
    comments: comments
  };
}; 

// 전체 모의 데이터 생성 함수
export const generateMockData = (
  pageCount: number, 
  reviewerCount: number, 
  commentsPerReviewer: number
) => {
  const pages = Array(pageCount)
    .fill(null)
    .map(() => generatePage());
    
  const reviewers = Array(reviewerCount)
    .fill(null)
    .map(() => generateReviewer(pages, commentsPerReviewer));

  return { pages, reviewers };
}; 
