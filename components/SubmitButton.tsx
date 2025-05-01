"use client";

// React hooks
import { useFormStatus } from "react-dom";

// UI Components
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react";

/**
 * SubmitButton component
 * - Shows a loading spinner and disables the button while the form is submitting.
 * - Uses useFormStatus from react-dom for pending state.
 */
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
