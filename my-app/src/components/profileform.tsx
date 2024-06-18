"use client";

import {zodResolver} from "@hookform/resolvers/zod";
import {useForm} from "react-hook-form";
import {z} from "zod";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage,} from "./ui/form";
import {Input} from "./ui/input";
import {Button} from "./ui/button";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "./ui/tabs";
import {Card, CardContent, CardDescription, CardHeader, CardTitle,} from "./ui/card";
import {Label} from "./ui/label";
import {formSchema} from "@/lib/types";



export default function ProfileForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            accountname: "",
            password: "",
        },
    });


    const handleSubmit = async (data: z.infer<typeof formSchema>) => {

        const response = await fetch("/api/form", {
            method: "POST",
            body: JSON.stringify({
                username: data.username,
                accountname: data.accountname,
                password: 12,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        });

        const responseData = await response.json();

        if (!response.ok) {
            alert("Submission failed");
            return;
        }

        if (responseData.error) {
            const errors = responseData.error;
            if (errors.username) {

            }
        }

        console.log(data);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)}>
                <FormField
                    control={form.control}
                    name="username"
                    render={({field}) => (
                        <FormItem>
                            <FormLabel>Username</FormLabel>
                            <FormControl>
                                <Input placeholder="shadcn" {...field} className="w-80"/>
                            </FormControl>
                            <FormDescription>
                                This is your public display name.
                            </FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                <Tabs defaultValue="account">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="account">Account</TabsTrigger>
                        <TabsTrigger value="password">Password</TabsTrigger>
                    </TabsList>
                    <TabsContent value="account">
                        <Card>
                            <CardHeader>
                                <CardTitle>Account Name</CardTitle>
                                <CardDescription>
                                    Make changes to your account here. Click save when you're
                                    done.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <FormField
                                        name="accountname"
                                        control={form.control}
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel>Account Name</FormLabel>
                                                <FormControl>
                                                    <Input {...field} />
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="password">
                        <Card>
                            <CardHeader>
                                <CardTitle>Password</CardTitle>
                                <CardDescription>
                                    Change your password here. After saving, you'll be logged out.
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-2">
                                <div className="space-y-1">
                                    <Label htmlFor="current">Current password</Label>
                                    <FormField
                                        name="password"
                                        control={form.control}
                                        render={({field}) => (
                                            <FormItem>
                                                <FormLabel>Password</FormLabel>
                                                <FormControl>
                                                    <Input {...field} />
                                                </FormControl>
                                                <FormMessage/>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>

                <Button type="submit" className="block m-auto mt-3">
                    Save
                </Button>
            </form>
        </Form>
    );
}
