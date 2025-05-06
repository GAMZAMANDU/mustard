// store.ts
import { create } from "zustand";
import type { Page, Reviewer, Comments } from "./ReviewPage";

interface Store {
  pages: Page[];
  page_id: string | null;
  reviewer_id: string | null;
  reviewers: Reviewer[];
  comments: Comments[];

  setPageId: (pageId: string) => void;
  setReviewers: (reviewers: Reviewer[]) => void;
  setReviews: (reviews: Comments[]) => void;
}

const useStore = create<Store>()((set) => ({
  pages: [],
  reviewer_id: null,
  page_id: null,
  reviewers: [],
  comments: [],

  setPages: (pages: Page[]) => set({ pages }),
  setPageId: (pageId: string) => set({ page_id: pageId }),
  setReviewers: (reviewers: Reviewer[]) => set({ reviewers }),
  setReviews: (reviews: Comments[]) => set({ comments: reviews }),
  setReviewerId: (reviewerId: string) => set({ reviewer_id: reviewerId }),
}));

export default useStore;
