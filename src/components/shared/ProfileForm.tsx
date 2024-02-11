import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/shared/ui/button";

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
import Smile from "./icons/Smile";

// Custom schema for file validation
const fileSchema = z.custom<File>((value) => value instanceof File);

export const formSchema = z.object({
  cap: z.string().min(2).max(50),
  images: z.array(fileSchema), // Accept multiple image files
  previewURL: z.string(),
});

interface ProfileFormProps {
  onSubmit: (values: z.infer<typeof formSchema>) => void;
}

export const ProfileForm: React.FC<ProfileFormProps> = ({ onSubmit }) => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cap: "",
      images: [],
      previewURL: "",
    },
  });
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="cap"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Caption</FormLabel>
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
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="images"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Images</FormLabel>
              <FormControl>
                <Input
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
                          form.setValue("previewURL", reader.result as string);
                        };
                        reader.readAsDataURL(files[0]);
                      }
                    } else {
                      field.onChange([]);
                    }
                  }}
                />
              </FormControl>
              <FormDescription>Upload images for your post</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
