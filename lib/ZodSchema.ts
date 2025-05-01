import { z } from "zod";

/**
 * Zod schema for validating form submissions.
 * - name: required, at least 2 characters
 * - email: required, must be a valid email
 * - message: required, 2-500 characters
 * - image: optional, must be a File instance if provided
 */
export const submissionSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(2, "Message must be at least 2 characters.").max(500, "Message must be at most 500 characters."),
  image: z.instanceof(File).optional(),
});
