import { z } from "zod";
import { validateEmail } from "./app/validateZipCode";

export const schema = z.object({
    username: z
        .string()
        .trim()
        .min(3, { message: "Username must be at least 3 characters long" })
        .max(20, { message: "Username must be at most 20 characters long" }),
    email: z
        .string()
        .trim()
        .email({ message: "Email is not valid" })
        .refine(validateEmail, { message: "Email should not contain 'a'" }),
    accountname: z
        .string()
        .trim()
        .min(3, { message: "Account name must be at least 3 characters long" })
        .max(20, {
            message: "Account name must be at most 20 characters long",
        }),
    password: z
        .string()
        .trim()
        .min(3, { message: "Password must be at least 3 characters long" })
        .max(20, { message: "Password must be at most 20 characters long" }),
});
