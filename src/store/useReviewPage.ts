// store.ts
import { create } from "zustand";
import type { Page, Reviewer, Comments } from "./ReviewPage";

interface Store {
  pages: Page[];
  page_id: string | null;
  reviewer_id: string | null;
  reviewers: Reviewer[];

  setPages: (pages: Page[]) => void;
  setPageId: (pageId: string) => void;
  setReviewers: (reviewers: Reviewer[]) => void;
  setReviewerId: (reviewerId: string | null) => void;
  addComment: (reviewerId: string, comment: Comments) => void;
  getTotalCommentsCount: () => number;
  getReviewerCommentsCount: (reviewerId: string) => number;
  getReviewerById: (reviewerId: string) => Reviewer | undefined;
  getReviewerNameById: (reviewerId: string) => string;
  getTotalComments: () => Comments[];
}

const useStore = create<Store>()((set, get) => ({
  // 초기 상태
  pages: [],
  reviewer_id: null,
  page_id: null,
  reviewers: [],

  // 기본 상태 설정 함수들
  setPages: (pages: Page[]) => set({ pages }),
  setPageId: (pageId: string) => set({ page_id: pageId }),
  setReviewers: (reviewers: Reviewer[]) => set({ reviewers }),
  setReviewerId: (reviewerId: string | null) => set({ reviewer_id: reviewerId }),

  // 코멘트 추가
  addComment: (reviewerId: string, comment: Comments) =>
    set((state) => ({
      reviewers: state.reviewers.map((reviewer) =>
        reviewer.id === reviewerId
          ? { ...reviewer, comments: [...reviewer.comments, comment] }
          : reviewer
      ),
    })),

  // 전체 코멘트 수를 반환하는 함수
  getTotalCommentsCount: () => {
    const state = get();
    return state.reviewers.reduce((total: number, reviewer: Reviewer) => {
      return total + reviewer.comments.length;
    }, 0);
  },

  // 특정 리뷰어의 코멘트 수를 반환하는 함수
  getReviewerCommentsCount: (reviewerId: string) => {
    const state = get();
    const reviewer = state.reviewers.find((r: Reviewer) => r.id === reviewerId);
    return reviewer ? reviewer.comments.length : 0;
  },

  getReviewerById: (reviewerId: string) => {
    const state = get();
    return state.reviewers.find((r: Reviewer) => r.id === reviewerId);
  },

  getReviewerNameById: (reviewerId: string) => {
    const reviewer = get().getReviewerById(reviewerId);
    return reviewer?.name || "";
  },

  getTotalComments: () => {
    const state = get();
    return state.reviewers.flatMap((reviewer: Reviewer) => reviewer.comments);
  },
}));

export default useStore;
