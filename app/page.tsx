"use client";

// UI Components
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import SubmitButton from "@/components/SubmitButton";

// Form & Validation
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { submissionSchema } from "@/lib/ZodSchema";
import { useActionState } from "react";

// Actions
import { SupportTicketAction, TalksToSalesAction } from "./action";
import { ModeToggle } from "@/components/ui/mode-toggle";

export default function Home() {
  // Sales form state and validation
  const [salesResult, salesAction] = useActionState(
    TalksToSalesAction,
    undefined,
  );
  const [salesForm, salesFields] = useForm({
    lastResult: salesResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: submissionSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  // Support form state and validation
  const [supportResult, supportAction] = useActionState(
    SupportTicketAction,
    undefined,
  );
  const [supportForm, supportFields] = useForm({
    lastResult: supportResult,
    onValidate({ formData }) {
      return parseWithZod(formData, { schema: submissionSchema });
    },
    shouldValidate: "onBlur",
    shouldRevalidate: "onInput",
  });

  return (
    <>
      <div className="absolute top-5 right-10">
        <ModeToggle />
      </div>

      <section className="flex min-h-screen w-screen flex-col items-center justify-center px-5">
        <h1 className="mb-7 text-4xl font-bold">Contact Us</h1>

        <Card className="w-full max-w-md">
          <Tabs defaultValue="sales">
            <CardContent className="mt-3">
              {/* Tab Triggers */}
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="sales">Talk to Sales</TabsTrigger>
                <TabsTrigger value="support">Support</TabsTrigger>
              </TabsList>

              {/* Sales Tab Content */}
              <TabsContent value="sales">
                <p className="text-muted-foreground pt-2">
                  You want to integrate your product with us? We can help you.
                  Please contact us down below.
                </p>

                <form
                  id={salesForm.id}
                  onSubmit={salesForm.onSubmit}
                  action={salesAction}
                  noValidate
                  className="mt-5 flex flex-col gap-y-4"
                >
                  {/* Honeypot field for spam/bot protection */}
                  <input type="hidden" name="_gotcha" />

                  {/* Name Field */}
                  <div className="grid space-y-2">
                    <Label htmlFor="sales-name">Name</Label>
                    <Input
                      id="sales-name"
                      key={salesFields.name.key}
                      name={salesFields.name.name}
                      defaultValue={salesFields.name.initialValue}
                      placeholder="e.g. Jane Doe"
                    />
                    <p className="text-sm text-red-500">
                      {salesFields.name.errors}
                    </p>
                  </div>

                  {/* Email Field */}
                  <div className="grid space-y-2">
                    <Label htmlFor="sales-email">Email</Label>
                    <Input
                      id="sales-email"
                      type="email"
                      key={salesFields.email.key}
                      name={salesFields.email.name}
                      defaultValue={salesFields.email.initialValue}
                      placeholder="e.g. jane.doe@gmail.com"
                    />
                    <p className="text-sm text-red-500">
                      {salesFields.email.errors}
                    </p>
                  </div>

                  {/* Question Field */}
                  <div className="grid space-y-2">
                    <Label htmlFor="sales-question">Question or Problem</Label>
                    <Textarea
                      id="sales-question"
                      key={salesFields.message.key}
                      name={salesFields.message.name}
                      defaultValue={salesFields.message.initialValue}
                      placeholder="Tell us about your integration needs or any questions you have..."
                      className="h-32"
                    />
                    <p className="text-sm text-red-500">
                      {salesFields.message.errors}
                    </p>
                  </div>

                  {/* Submit Button */}
                  <SubmitButton />
                </form>
              </TabsContent>

              {/* Support Tab Content */}
              <TabsContent value="support">
                <p className="text-muted-foreground pt-2">
                  Troubleshoot a technical issue or payment problem.
                </p>

                <form
                  id={supportForm.id}
                  onSubmit={supportForm.onSubmit}
                  action={supportAction}
                  noValidate
                  className="mt-5 flex flex-col gap-y-4"
                >
                  {/* Honeypot field for spam/bot protection */}
                  <input type="hidden" name="_gotcha" />

                  {/* Name Field */}
                  <div className="grid space-y-2">
                    <Label htmlFor="support-name">Name</Label>
                    <Input
                      id="support-name"
                      key={supportFields.name.key}
                      name={supportFields.name.name}
                      defaultValue={supportFields.name.initialValue}
                      placeholder="e.g. Jane Doe"
                    />
                    <p className="text-sm text-red-500">
                      {supportFields.name.errors}
                    </p>
                  </div>

                  {/* Email Field */}
                  <div className="grid space-y-2">
                    <Label htmlFor="support-email">Email</Label>
                    <Input
                      id="support-email"
                      type="email"
                      key={supportFields.email.key}
                      name={supportFields.email.name}
                      defaultValue={supportFields.email.initialValue}
                      placeholder="e.g. jane.doe@gmail.com"
                    />
                    <p className="text-sm text-red-500">
                      {supportFields.email.errors}
                    </p>
                  </div>

                  {/* Problem Field */}
                  <div className="grid space-y-2">
                    <Label htmlFor="support-question">
                      Question or Problem
                    </Label>
                    <Textarea
                      id="support-question"
                      key={supportFields.message.key}
                      name={supportFields.message.name}
                      defaultValue={supportFields.message.initialValue}
                      placeholder="Describe the issue or problem you are facing..."
                      className="h-32"
                    />
                    <p className="text-sm text-red-500">
                      {supportFields.message.errors}
                    </p>
                  </div>

                  {/* Asset Upload Field */}
                  <div className="grid space-y-2">
                    <Label htmlFor="asset">Asset</Label>
                    <Input
                      id="asset"
                      key={supportFields.image.key}
                      name={supportFields.image.name}
                      type="file"
                    />
                  </div>

                  {/* Submit Button */}
                  <SubmitButton />
                </form>
              </TabsContent>
            </CardContent>
          </Tabs>
        </Card>
      </section>
    </>
  );
}
