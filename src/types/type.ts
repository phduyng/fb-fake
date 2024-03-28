import { Comment } from "@prisma/client";

export type createCommentProps = {
    postId: string
    body: string
    email: string
}

export type getComments = {
    id:   string   
  email: string  
  body: string
  postId: string
  createdAt: Date
  updatedAt: Date 
}

export type EmojiCreateLikeProps = {
  postId: string
  emoji: string
  email: string
}

export interface FriendWithoutId {
  email: string,
  emailUser: string
}

