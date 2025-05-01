"use server";

import { redirect } from "next/navigation";

export async function TalksToSalesAction(formData: FormData) {
  const response = await fetch(process.env.TALKS_TO_SALES_URL!, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Something went wrong!");
  }

  return redirect("/success");
}
