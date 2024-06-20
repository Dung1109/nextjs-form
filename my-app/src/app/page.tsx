import ReactHookForm from "@/components/ReactHookForm";
import ProfileForm from "@/components/profileform";
import { Mail } from "@/components/resizenav";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cookies } from "next/headers";
import Image from "next/image";
import { RegistrationForm } from "./RegistrationForm";
import { schema } from "./registrationSchema";
import { z } from "zod";

const layout = cookies().get("react-resizable-panels:layout");
const collapsed = cookies().get("react-resizable-panels:collapsed");

const defaultLayout = layout ? JSON.parse(layout.value) : undefined;
const defaultCollapsed = collapsed ? JSON.parse(collapsed.value) : undefined;

export default function Home() {
    const onFormAction = async (formData: FormData) => {
        "use server";

        const data = Object.fromEntries(formData);
        const parsed = schema.safeParse(data);

        if (parsed.success) {
            console.log("User registered - Server");
            return { message: "User registered!!", user: parsed.data };
        } else {
            return {
                message: "Invalid data",
                issues: parsed.error.issues.map((issue) => issue.message),
            };
        }
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <RegistrationForm onDataAction={onFormAction} />
        </div>
    );
}
