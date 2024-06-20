import { z } from "zod";

export const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" })
    .max(20, { message: "Username must be at most 20 characters long" }),
  email: z.string().email({ message: "Email is not valid" }),
  accountname: z
    .string()
    .min(3, { message: "Account name must be at least 3 characters long" })
    .max(20, {
      message: "Account name must be at most 20 characters long",
    }),
  password: z
    .string()
    .min(3, { message: "Password must be at least 3 characters long" })
    .max(20, { message: "Password must be at most 20 characters long" }),
});
