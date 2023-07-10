import { z } from "zod";

export const usersApiShema = z.object({
  data: z.string({ invalid_type_error: "" }).nonempty()
});

export type UsersApiShema = z.infer<typeof usersApiShema>;
