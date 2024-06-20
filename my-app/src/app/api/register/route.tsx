import { schema } from "@/app/registrationSchema";
import { error, log } from "console";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const formData = await request.formData();

    const data = Object.fromEntries(formData);

    let parsedData = schema.safeParse(data);

    if (parsedData.success) {
        return NextResponse.json({ message: "Success", data: parsedData.data });
    } else {
        return NextResponse.json({ error: parsedData.error }, { status: 400 });
    }
}
