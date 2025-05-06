// store.ts
import { create } from "zustand";
import type { Page, Reviewer, Comments } from "./ReviewPage";

interface Store {
  pages: Page[];
  page_id: string | null;
  reviewer_id: string | null;
  reviewers: Reviewer[];

  // 기본 상태 설정
  setPages: (pages: Page[]) => void;
  setPageId: (pageId: string) => void;
  setReviewers: (reviewers: Reviewer[]) => void;
  setReviewerId: (reviewerId: string) => void;

  // 코멘트 관련 간단한 액션
  addComment: (reviewerId: string, comment: Comments) => void;
}

const useStore = create<Store>()((set) => ({
  // 초기 상태
  pages: [],
  reviewer_id: null,
  page_id: null,
  reviewers: [],

  // 기본 상태 설정 함수들
  setPages: (pages: Page[]) => set({ pages }),
  setPageId: (pageId: string) => set({ page_id: pageId }),
  setReviewers: (reviewers: Reviewer[]) => set({ reviewers }),
  setReviewerId: (reviewerId: string) => set({ reviewer_id: reviewerId }),

  // 코멘트 추가
  addComment: (reviewerId: string, comment: Comments) =>
    set((state) => ({
      reviewers: state.reviewers.map((reviewer) =>
        reviewer.id === reviewerId
          ? { ...reviewer, comments: [...reviewer.comments, comment] }
          : reviewer
      ),
    }))

}));

export default useStore;
