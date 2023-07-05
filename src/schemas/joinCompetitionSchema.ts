import { z } from "zod";

export const joinCompetitionSchema = z.object({
  code: z.string({ invalid_type_error: "" }).nonempty()
});

export type JoinWaitListFormValues = z.infer<typeof joinCompetitionSchema>;
