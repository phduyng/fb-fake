"use client";

import { settings } from "@/actions/setting";
import { FormError } from "@/components/shared/FormError";
import { FormSuccess } from "@/components/shared/FormSuccess";
import { Button } from "@/components/shared/ui/button";
import { Card, CardContent, CardHeader } from "@/components/shared/ui/card";
import {
  Dialog,
  DialogPortal,
  DialogTrigger,
} from "@/components/shared/ui/dialog";
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
import { Select, SelectValue } from "@/components/shared/ui/select";
import { Switch } from "@/components/shared/ui/switch";
import { useCurrentUser } from "@/hooks/useCurrentUser";
import { SettingsSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { DialogContent } from "@radix-ui/react-dialog";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { FaPenToSquare } from "react-icons/fa6";
import { z } from "zod";

const EditDialog = () => {
  const user = useCurrentUser();

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof SettingsSchema>>({
    resolver: zodResolver(SettingsSchema),
    defaultValues: {
      password: undefined,
      newPassword: undefined,
      name: user?.name || undefined,
      email: user?.email || undefined,
      isTwoFactorEnabled: user?.isTwoFactorEnabled || undefined,
    },
  });

  const onSubmit = (values: z.infer<typeof SettingsSchema>) => {
    startTransition(() => {
      settings(values)
        .then((data) => {
          if (data.error) {
            setError(data.error);
          }
          if (data.success) {
            setSuccess(data.success);
          }
        })
        .catch(() => setError("Something went wrong!"));
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex-center text-text-1">
          <FaPenToSquare />
          <span className="font-semibold">Edit profile</span>
        </Button>
      </DialogTrigger>
      <DialogPortal>
        <DialogContent>
          <Card className="w-[600px]">
            <CardHeader>
              <p className="text-center text-2xl font-semibold">⚙️ Settings</p>
            </CardHeader>
            <CardContent className="shadow-3xl fixed left-1/2 top-1/2 z-50 h-auto w-fit -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-lg bg-bg-2 px-8 py-6">
              <Form {...form}>
                <form
                  className="space-y-6"
                  onSubmit={form.handleSubmit(onSubmit)}
                >
                  <div className="space-y-4">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              className="mx-3 rounded-lg px-4 py-2"
                              placeholder="John Doe"
                              disabled={isPending}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    {user?.isOAuth === false && (
                      <>
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  className="mx-3 rounded-lg px-4 py-2"
                                  placeholder="example@gmail.com"
                                  type="email"
                                  disabled={isPending}
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
                              <FormLabel>Password</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  className="mx-3 rounded-lg px-4 py-2"
                                  placeholder="******"
                                  type="password"
                                  disabled={isPending}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="newPassword"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>New Password</FormLabel>
                              <FormControl>
                                <Input
                                  {...field}
                                  className="mx-3 rounded-lg px-4 py-2"
                                  placeholder="******"
                                  type="password"
                                  disabled={isPending}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </>
                    )}
                    {user?.isOAuth === false && (
                      <>
                        <FormField
                          control={form.control}
                          name="isTwoFactorEnabled"
                          render={({ field }) => (
                            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-3 shadow-sm">
                              <div className="space-y-0.5">
                                <FormLabel>Two Factor Authentication</FormLabel>
                                <FormDescription>
                                  Enable two factor authentication for your
                                  account
                                </FormDescription>
                              </div>
                              <FormControl>
                                <Switch
                                  disabled={isPending}
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </>
                    )}
                  </div>
                  <FormError message={error} />
                  <FormSuccess message={success} />
                  <Button disabled={isPending} className='text-text-1 font-semibold' type="submit">
                    Save
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default EditDialog;
