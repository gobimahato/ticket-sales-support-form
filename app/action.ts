"use server";

// Import validation schema and helpers
import { submissionSchema } from "@/lib/ZodSchema";
import { parseWithZod } from "@conform-to/zod";
import { redirect } from "next/navigation";

/**
 * Handles the "Talk to Sales" form submission.
 * Validates the form data, sends it to the backend, and redirects on success.
 */
export async function TalksToSalesAction(prevState: any, formData: FormData) {
  // Validate form data using Zod schema
  const submission = parseWithZod(formData, {
    schema: submissionSchema,
  });

  // If validation fails, return errors to the form
  if (submission.status !== "success") {
    return submission.reply();
  }

  // Send form data to the backend endpoint
  const response = await fetch(process.env.TALKS_TO_SALES_URL!, {
    method: "POST",
    body: formData,
  });

  // If backend returns error, throw
  if (!response.ok) {
    throw new Error("Something went wrong!");
  }

  // Redirect to success page on success
  return redirect("/success");
}

/**
 * Handles the "Support Ticket" form submission.
 * Validates the form data, sends it to the backend, and redirects on success.
 */
export async function SupportTicketAction(prevState: any, formData: FormData) {
  // Validate form data using Zod schema
  const submission = parseWithZod(formData, {
    schema: submissionSchema,
  });

  // If validation fails, return errors to the form
  if (submission.status !== "success") {
    return submission.reply();
  }

  // Send form data to the backend endpoint
  const response = await fetch(process.env.TALKS_TO_SALES_URL!, {
    method: "POST",
    body: formData,
  });

  // If backend returns error, throw
  if (!response.ok) {
    throw new Error("Something went wrong!");
  }

  // Redirect to success page on success
  return redirect("/success");
}
