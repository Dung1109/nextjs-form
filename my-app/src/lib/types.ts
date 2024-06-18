import {z} from "zod";

export const formSchema = z.object({
    username: z
        .string()
        .min(8, {
            message: "Username must be at least 8 characters",
        })
        .max(50, {
            message: "Username must be at max 50 characters",
        }),
    accountname: z
        .string()
        .min(2, {message: "Account name must be at least 2"})
        .optional(),
    password: z.string().min(8, {message: "Password must be at least 8"}),
});

export type TFormData = z.infer<typeof formSchema>;
