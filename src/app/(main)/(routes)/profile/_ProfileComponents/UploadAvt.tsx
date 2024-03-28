"use client";

import Smile from "@/components/shared/icons/Smile";
import Public from "@/components/shared/svgs/Public";
import { Button } from "@/components/shared/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTrigger,
} from "@/components/shared/ui/dialog";

import { MdOutlineClose } from "react-icons/md";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/shared/ui/form";
import { Input } from "@/components/shared/ui/input";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { ZodType } from "zod";
import UserAvatar from "@/components/shared/UserAvatar";
import { BiSolidImageAdd } from "react-icons/bi";
import Camera from "@/components/shared/icons/Camera";

type post = {
  images: File[];
  previewURL: string;
  email: string;
};

// Custom schema for file validation
const fileSchema: ZodType<File> = z.custom<File>(
  (value) => value instanceof File,
);

export const formSchema = z.object({
  images: z.array(fileSchema), // Accept multiple image files
  previewURL: z.string(),
  email: z.string(),
});

const UploadAvt = ({ emailUser }: { emailUser: string }) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      images: [],
      previewURL: "",
      email: emailUser,
    },
  });

  const handleSubmit = (value: z.infer<typeof formSchema>) => {
    // value.email = user?.email ?? "";
    console.log(value);
    createPost(value);
  };

  // Handle Create Post
  const router = useRouter();

  const { mutate: createPost } = useMutation({
    mutationFn: (newPost: post) => {
      return axios.patch("/api/create", newPost);
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
        <div className="flex-center absolute bottom-0 right-1/2 h-9 w-9 rounded-full bg-bg-3 900:translate-x-[70px] ">
          <Camera />
        </div>
      </DialogTrigger>
      <DialogPortal>
        <DialogOverlay className="fixed inset-0 z-50 bg-[#0e0e0e] bg-opacity-80" />

        <DialogContent className="fixed left-1/2 top-1/2 z-50 w-[500px] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-bg-2">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-2"
            >
              <div className="flex-center relative h-[60px] w-full border-b border-bg-3">
                <span className="text-[18px] font-bold">Upload Avatar</span>
                <DialogClose>
                  <div className="flex-center absolute bottom-2 right-2 top-2 h-10 w-10 rounded-full bg-bg-3 text-text-2">
                    <MdOutlineClose size={28} />
                  </div>
                </DialogClose>
              </div>

              {/* ////////////////////////////////////// */}

              <div className="h-auto w-full overflow-y-auto px-4  scrollbar-hide">
                <div className=" rounded-lg border border-bg-3 p-2">
                  <div className="flex-center h-[185.6px] flex-col rounded-lg bg-bg-3/30">
                    <label htmlFor="img">
                      <div className="flex-center h-10 w-10 cursor-pointer rounded-full bg-bg-3 shadow-xl">
                        <BiSolidImageAdd size={22} />
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
                      Add photos
                    </span>
                    <span className="text-[12px]">or drag and drop</span>
                  </div>
                </div>
              </div>

              {/* ///////////////////////////////////////// */}
              <div className="flex h-auto w-full flex-col gap-y-4 py-4">
                <Button
                  type="submit"
                  className="mx-4 h-9 w-auto text-[15px] font-semibold"
                >
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

export default UploadAvt;
