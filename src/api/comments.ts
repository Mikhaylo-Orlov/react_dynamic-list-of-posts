import { CommentData, Comment } from '../types/Comment';
import { client } from '../utils/fetchClient';

export const getComments = (postId: number) => {
  return client.get<Comment[]>(`/comments?postId=${postId}`);
};

export const addComment = (newComment: CommentData) => {
  return client.post<Comment>('/comments', newComment);
};

export const removeComment = (commentId: number) => {
  return client.delete(`/comments/${commentId}`);
};