// store.ts
import { create } from "zustand";
import type { Reviewer, Review } from "./ReviewPage";

interface Store {
  page_id: string | null;
  reviewers: Reviewer[];
  reviews: Review[];

  setPageId: (pageId: string) => void;
  setReviewers: (reviewers: Reviewer[]) => void;
  setReviews: (reviews: Review[]) => void;
}

const useStore = create<Store>()((set) => ({
  page_id: null,
  reviewers: [],
  reviews: [],

  setPageId: (pageId: string) => set({ page_id: pageId }),
  setReviewers: (reviewers: Reviewer[]) => set({ reviewers }),
  setReviews: (reviews: Review[]) => set({ reviews }),
}));

export default useStore;
