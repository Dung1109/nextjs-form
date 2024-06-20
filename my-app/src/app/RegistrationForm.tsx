"use client";

import {
    Form,
    FormField,
    FormLabel,
    FormControl,
    FormDescription,
    FormMessage,
    FormItem,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { schema } from "./registrationSchema";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useFormState } from "react-dom";
import { useRef } from "react";

export const RegistrationForm = ({
    onDataAction,
}: {
    onDataAction: (
        prevState: {
            message: string;
            user?: z.infer<typeof schema>;
            issues?: string[];
        },
        data: FormData
    ) => Promise<{
        message: string;
        user?: z.infer<typeof schema>;
        issues?: string[];
    }>;
}) => {
    const [state, formAction] = useFormState(onDataAction, {
        message: "",
    });

    const formRef = useRef<HTMLFormElement>(null);

    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: {
            username: "",
            email: "",
            accountname: "",
            password: "",
        },
    });

    const onSubmit = async (data: z.infer<typeof schema>) => {
        const formData = new FormData();
        formData.append("username", data.username);
        formData.append("email", data.email);
        formData.append("accountname", data.accountname);
        formData.append("password", data.password);

        // form.reset();

        // fetch("/api/register", {
        //     method: "POST",
        //     body: formData,
        // })
        //     .then((res) => res.json())
        //     .then((res) => console.log(res));

        // console.log(await onDataAction(formData));
    };

    return (
        <Form {...form}>
            <div>{state?.message}</div>
            <div>{state?.issues?.join(", ")}</div>
            <form
                ref={formRef}
                className="space-y-8 min-w-[600px]"
                onSubmit={form.handleSubmit(() => formRef?.current?.submit())}
                action={formAction}
            >
                <div className="md:flex md:justify-between">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input placeholder="" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Your username.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Your email address.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="md:flex md:justify-between">
                    <FormField
                        control={form.control}
                        name="accountname"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Account Name</FormLabel>
                                <FormControl>
                                    <Input placeholder="" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Your Account Name.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input placeholder="" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Your Password.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <Button type="submit" className="block mx-auto">
                    Submit
                </Button>
            </form>
        </Form>
    );
};
