"use client";

import UserAvatar from "@/components/shared/UserAvatar";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogPortal,
  DialogTrigger,
} from "@/components/shared/ui/dialog";
import { Separator } from "@/components/shared/ui/separator";
import { MdOutlineClose } from "react-icons/md";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
} from "@/components/shared/ui/form";
import { Input } from "@/components/shared/ui/input";
import { IoSend } from "react-icons/io5";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRouter } from "next/navigation";
import { FC } from "react";
import { createCommentProps } from "@/types/type";
import Comments from "./_comment/Comments";
import { Comment } from "@prisma/client";
import CommentEmoji from "@/components/shared/icons/Comment";
import { Button } from "@/components/shared/ui/button";

interface CommentDialogProps {
  email: string;
  postId: string;
}

const formSchema = z.object({
  comment: z.string().min(1).max(300),
});

const CommentDialog: FC<CommentDialogProps> = ({ postId, email }) => {
  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      comment: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    createComment({ postId: postId, email: email, body: values.comment });
  }

  const { mutate: createComment } = useMutation({
    mutationFn: (param: createCommentProps) => {
      return axios.post("/api/comment/create", param);
    },
    onError: (e) => {
      console.log(e);
    },
    onSuccess: () => {
      router.refresh();
    },
  });

  const { data: dataCmts } = useQuery({
    queryKey: ["comments"],
    queryFn: async () => {
      const res = await axios.get(`/api/comment/${postId}`);
      return res.data;
    },
  });

  return (
    <div>
      <Dialog>
        <DialogTrigger aria-controls="radix-:Rn7lttbqkq:" asChild>
          <div className="flex-center w-full cursor-pointer select-none space-x-2 rounded-sm p-[6px] hover:bg-background-3">
            <CommentEmoji />
            <span className="text-[15px] font-semibold">Comment</span>
          </div>
        </DialogTrigger>
        <DialogPortal>
          <DialogContent className="fixed left-1/2 top-1/2 z-50 h-[650px] w-[700px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-lg bg-bg-2 shadow-lg">
            <div className="flex-center relative h-[80px] w-full">
              <span className="texte-text-2 text-[20px] font-semibold">
                Your post
              </span>
              <DialogClose>
                <div className=" flex-center absolute right-4 top-1/2 h-9 w-9 -translate-y-1/2 cursor-pointer rounded-full bg-bg-3 text-text-2 ">
                  <MdOutlineClose size={28} />
                </div>
              </DialogClose>
            </div>
            <Separator className="h-[1.5px] w-full bg-bg-3 px-6" />
            <div className="flex h-[467px] w-full flex-col space-y-4 overflow-y-scroll px-5 pt-3">
              {dataCmts?.map((item: Comment) => (
                <Comments key={item.id} data={item} />
              ))}
            </div>
            <Separator className="h-[1.5px] w-full bg-bg-3 px-6" />
            <div className="flex-center h-[100px] w-full space-x-2">
              <UserAvatar />
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="flex-center space-x-2 "
                >
                  <FormField
                    control={form.control}
                    name="comment"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            className="h-[51px] w-[550px] rounded-3xl bg-bg-3 px-4 text-text-1 "
                            placeholder="Write a comment"
                            {...field}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                  <Button
                    className="flex-center h-10 w-10  cursor-pointer rounded-full bg-bg-3 text-text-2 "
                    type="submit"
                  >
                    <IoSend size={20} />
                  </Button>
                </form>
              </Form>
            </div>
          </DialogContent>
        </DialogPortal>
      </Dialog>
    </div>
  );
};

export default CommentDialog;
