import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <>
      <section
        className="animate-in fade-in-50 flex min-h-screen w-full flex-col items-center justify-center px-2 py-8 text-center sm:px-4"
        aria-labelledby="success-heading"
      >
        <div className="flex w-full max-w-md flex-col items-center justify-center gap-4 rounded-xl border border-dashed border-green-200 bg-white/90 p-6 shadow-2xl sm:p-10 dark:border-green-800 dark:bg-gray-900/10">
          {/* Success Icon */}
          <div className="flex size-20 items-center justify-center rounded-full bg-green-500/10 shadow-inner dark:bg-green-900/20">
            <Check
              className="size-10 text-green-500 dark:text-green-400"
              aria-hidden="true"
            />
          </div>

          {/* Heading */}
          <h2
            id="success-heading"
            className="mt-2 text-2xl font-bold tracking-tight text-green-700 dark:text-green-300"
          >
            Success, we got your Message!
          </h2>

          {/* Subtext */}
          <p className="mt-1 text-lg text-gray-600 dark:text-gray-300">
            Our Team will come back shortly!
          </p>

          {/* Button to go back to home */}
          <Button
            asChild
            className="mt-4 w-full text-base font-semibold shadow-md"
          >
            <Link href="/">Go back to Homepage</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
