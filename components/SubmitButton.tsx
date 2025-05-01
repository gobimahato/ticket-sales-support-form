"use client";

import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <Button variant="outline" disabled>
          <Loader2 className="mr-1 size-4 animate-spin" /> Submitting...
        </Button>
      ) : (
        <Button type="submit">Submit Form</Button>
      )}
    </>
  );
}
