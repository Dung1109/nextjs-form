"use server";

export async function validateEmail(email: string): Promise<boolean> {
    console.log("validateEmail on SERVER", email);
    return !email.includes("a");
}
