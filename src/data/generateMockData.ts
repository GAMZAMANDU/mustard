import { faker } from '@faker-js/faker';
import type { Page, Reviewer, Comments, CommentPosition } from "../store/ReviewPage";

// Page 데이터 생성 함수
const generatePage = (name: string, img: string): Page => {
  return {
    id: faker.string.uuid(),
    name,
    img
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
    .map(() => generateComment(pages, reviewerId))
    .sort((a, b) => b.created_at.getTime() - a.created_at.getTime());

  return {
    id: reviewerId,
    name: faker.person.fullName(),
    img: faker.image.avatar(),
    comments: comments
  };
}; 

// 전체 모의 데이터 생성 함수
export const generateMockData = (
  pageNames: string[], 
  pageImages: string[],
  reviewerCount: number, 
  commentsPerReviewer: number
) => {
  // pageNames와 pageImages 배열을 사용하여 페이지 생성
  const pages = pageNames.map((name, index) => 
    generatePage(name, pageImages[index] || '')
  );
    
  const reviewers = Array(reviewerCount)
    .fill(null)
    .map(() => generateReviewer(pages, commentsPerReviewer));

  return { pages, reviewers };
}; 
