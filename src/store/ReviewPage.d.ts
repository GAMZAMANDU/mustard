export interface Page {
  id: string;
  name: string;
  img: string;
}

export interface Reviewer {
  id: string;
  name: string;
  img: string;
  comments: Comments[];
}

export interface CommentPosition {
  x: number;
  y: number;
  page: string;
}

export interface Comments {
  id: string;
  pageId: string;
  contents: string;
  created_at: Date;
  reviewerId: string;
  tag: string;
  position: CommentPosition;
}
