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