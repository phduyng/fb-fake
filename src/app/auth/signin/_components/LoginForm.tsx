"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/shared/ui/form";
import { Button } from "@/components/shared/ui/button";
import { Input } from "@/components/shared/ui/input";
import GitHub from "@/components/shared/svgs/GitHub";
import { signIn } from "next-auth/react";

const onClick = (provider: "google" | "github") => {
  signIn(provider, {
    callbackUrl: "/",
  });
};

const loginSchema = z.object({
  email: z.string().min(2).max(50),
  pwd: z.string().min(2).max(50),
});

export function LoginForm() {
  // 1. Define your form.
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      pwd: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof loginSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="h-[51px] w-[364px] rounded-lg border border-gray-300 bg-white px-[13px] text-[20px] text-gray-500"
                  placeholder="Email address or phone number"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="pwd"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className="h-[51px] w-[364px] rounded-lg border border-gray-300 bg-white px-[13px] text-[20px] text-gray-500"
                  placeholder="Password"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" variant="login" size="login">
          Log in
        </Button>
      </form>
      <Button
        className="mt-3 bg-[#24292f]"
        type="submit"
        variant="login"
        size="login"
        onClick={() => onClick("github")}
      >
        <GitHub />
      </Button>
    </Form>
  );
}
