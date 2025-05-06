export interface Page {
  id: string;
  name: string;
  img: string;
}

export interface Reviewer {
  id: string;
  name: string;
  img: string;
}

export interface ReviewPosition {
  x: number;
  y: number;
  page: string;
}

export interface Review {
  id: string;
  contents: string;
  created_at: Date;
  reviewerId: string;
  tag: string;
  position: ReviewPosition;
}
