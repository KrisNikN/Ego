import { z } from "zod";

export const registerSchema = z.object({
  email: z.string({ invalid_type_error: "" }).nonempty().email(),
  password: z.string({ invalid_type_error: "" }).min(8).max(20)
});

export type RegisterSchema = z.infer<typeof registerSchema>;
