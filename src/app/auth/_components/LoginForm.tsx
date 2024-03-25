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
import { useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { LoginSchema } from "@/schemas";
import { FormError } from "@/components/shared/FormError";
import { FormSuccess } from "@/components/shared/FormSuccess";
import { login } from "@/actions/login";
import { FcGoogle } from "react-icons/fc";
import Link from "next/link";

type LoginResponse = {
  error?: string;
  success?: string;
};

const onClick = (provider: "google" | "github") => {
  signIn(provider, {
    callbackUrl: "/",
  });
};

export function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with different provider!"
      : "";

  const [showTwoFactor, setShowTwoFactor] = useState(false);
  const [success, setSuccess] = useState<string | undefined>("");
  const [error, setError] = useState<string | undefined>("");

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [isPending, startTransition] = useTransition();

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setSuccess("");
    setError("");

    startTransition(() => {
      login(values, callbackUrl)
        .then((data) => {
          const typedData = data as LoginResponse;
          if (typedData?.error) {
            form.reset();
            setError(typedData.error);
          }

          if (typedData?.success) {
            form.reset();
            setSuccess(typedData.success);
          }

          if (data?.twoFactor) {
            setShowTwoFactor(true);
          }
        })
        .catch(() => setError("Something went wrong"));
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        {showTwoFactor && (
          <FormField
            control={form.control}
            name="code"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Two Factor Code</FormLabel>
                <FormControl>
                  <Input
                    className="h-[51px] w-[364px] rounded-lg border border-gray-300 bg-white px-[13px] text-[20px] text-gray-500"
                    disabled={isPending}
                    placeholder="123456"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
        {!showTwoFactor && (
          <>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      className="mx-4 h-[51px] w-[364px] rounded-lg border border-gray-300 bg-white px-[13px] text-[20px] text-gray-500"
                      placeholder="Email address"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="password"
                      className="mx-4 h-[51px] w-[364px] rounded-lg border border-gray-300 bg-white px-[13px] text-[20px] text-gray-500"
                      placeholder="Password"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormError message={error || urlError} />
            <FormSuccess message={success} />
            <Button className="mx-4" type="submit" variant="login" size="login">
              Confirm
            </Button>
            <Button
              className="mx-4 mt-3 bg-[#24292f]"
              type="submit"
              variant="login"
              size="login"
              onClick={() => onClick("github")}
            >
              <GitHub />
            </Button>
            <Button
              className="mx-4 mt-3 bg-[#fff] shadow-form-equaly "
              type="submit"
              variant="login"
              size="login"
              onClick={() => onClick("google")}
            >
              <FcGoogle className="h-5 w-5" />
            </Button>

            <div className="mx-4 flex w-[364px] items-center justify-center">
              <Link
                href="/auth/reset"
                className="mt-3 text-[15px] font-medium text-[#0866FF] hover:underline hover:underline-offset-2"
              >
                Forgotten password?
              </Link>
            </div>
          </>
        )}
      </form>
    </Form>
  );
}
