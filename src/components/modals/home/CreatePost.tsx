"use client";

import CardPlus from "@/components/shared/icons/CardPlus";
import Phone from "@/components/shared/icons/Phone";
import Smile from "@/components/shared/icons/Smile";
import Public from "@/components/shared/svgs/Public";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shared/ui/avatar";
import { Button } from "@/components/shared/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
} from "@/components/shared/ui/dialog";

import { FC, useState } from "react";
import { MdOutlineClose } from "react-icons/md";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shared/ui/form";
import { Input } from "@/components/shared/ui/input";
import { Post } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";

type post = {
  caption: string;
  images: File[];
  previewURL: string;
};

// interface CreatePostProps {
//   onSubmit: (values: z.infer<typeof formSchema>) => void;
// }
// Custom schema for file validation
const fileSchema = z.custom<File>((value) => value instanceof File);

export const formSchema = z.object({
  caption: z.string().min(2).max(50),
  images: z.array(fileSchema), // Accept multiple image files
  previewURL: z.string(),
});

const CreatePost = ({}) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      caption: "",
      images: [],
      previewURL: "",
    },
  });

  const handleSubmit = (value: z.infer<typeof formSchema>) => {
    console.log(value);
    createPost(value);
  };

  // Handle Create Post
  const router = useRouter();

  const { mutate: createPost } = useMutation({
    mutationFn: (newPost: post) => {
      return axios.post("/api/create", newPost);
    },
    onError: (e) => {
      console.error(e);
    },
    onSuccess: () => {
      router.push("/");
      router.refresh();
    },
  });

  return (
    <Dialog>
      <DialogTrigger>
        <div
          id="main"
          className="search-lg w-[510px] cursor-pointer text-[17px] font-medium"
        >
          What&apos;s on your mind, LoL?
        </div>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 z-50 bg-[#0e0e0e] bg-opacity-80" />

        <DialogContent className="fixed left-1/2 top-1/2 z-50 w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-background">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-8"
            >
              <div className="flex-center relative h-[60px] w-full border-b border-background-3">
                <span className="text-[18px] font-bold">Create post</span>
                <DialogClose>
                  <div className="flex-center absolute bottom-2 right-2 top-2 h-10 w-10 rounded-full bg-background-3 text-secondary-text">
                    <MdOutlineClose size={28} />
                  </div>
                </DialogClose>
              </div>

              <div className="flex-start mx-4 space-x-2 overflow-y-auto ">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/images/duck.jpg" alt="Duck" />
                  <AvatarFallback />
                </Avatar>
                <div className="flex flex-col">
                  <span className="text-[15px] font-semibold text-tertiary-text">
                    Phuong Duy
                  </span>
                  <div className="flex-start space-x-1 text-secondary-text">
                    <span className="text-[12px] font-semibold ">11h ·</span>
                    <Public />
                  </div>
                </div>
              </div>
              {/* ////////////////////////////////////// */}

              <div className="h-[322px] w-full overflow-y-auto px-4  scrollbar-hide">
                <FormField
                  control={form.control}
                  name="caption"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div className="flex-between w-auto pb-6 pt-2">
                          <Input
                            placeholder="What's on your mind, LoL?"
                            type="text"
                            {...field}
                          />
                          <Smile />
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
                <div className=" rounded-lg border border-background-3 p-2">
                  <div className="flex-center h-[185.6px] flex-col rounded-lg bg-[#323436]">
                    <label htmlFor="img">
                      <div className="flex-center h-10 w-10 rounded-full bg-[#47494a]">
                        <CardPlus />
                      </div>
                    </label>
                    <FormField
                      control={form.control}
                      name="images"
                      render={({ field }) => (
                        <FormItem>
                          {/* <FormLabel>images</FormLabel> */}
                          <FormControl>
                            <Input
                              className="hidden"
                              id="img"
                              type="file"
                              // multiple
                              onChange={async (e) => {
                                if (e.target.files) {
                                  const files = Array.from(e.target.files);
                                  field.onChange(files);

                                  // Generate preview URL for the first image
                                  if (files.length > 0) {
                                    const reader = new FileReader();
                                    reader.onloadend = () => {
                                      // Update the form values with the generated preview URL
                                      form.setValue(
                                        "previewURL",
                                        reader.result as string,
                                      );
                                    };
                                    reader.readAsDataURL(files[0]);
                                  }
                                } else {
                                  field.onChange([]);
                                }
                              }}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <span className="text-[17px] font-semibold">
                      Add photos/videos
                    </span>
                    <span className="text-[12px]">or drag and drop</span>
                  </div>
                  <div className="flex-between mt-2 h-[56px] rounded-lg bg-[#323436] px-2">
                    <div className="flex-center gap-x-2">
                      <div className="flex-center h-10 w-10 rounded-full bg-[#47494a]">
                        <Phone />
                      </div>
                      <span className="text-[13px]">
                        Add photos and videos from your mobile device.
                      </span>
                    </div>
                    <Button>Add</Button>
                  </div>
                </div>
              </div>

              {/* ///////////////////////////////////////// */}
              <div className="flex h-[141.6px] w-full flex-col gap-y-4 py-4">
                <div className="flex-between mx-4 h-[57.2px] w-auto rounded-lg border border-background-3 p-4">
                  <span className="text-[15px] font-semibold ">
                    Add to your post
                  </span>
                  <div>icons</div>
                </div>
                <Button type="submit" className="mx-4 h-9 w-auto">
                  Post
                </Button>
              </div>
            </form>
          </Form>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default CreatePost;
