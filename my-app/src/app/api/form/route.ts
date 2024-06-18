import {NextResponse} from "next/server";
import {formSchema} from "@/lib/types";


export async function POST(request: Request) {
    const body: unknown = await request.json();

    console.log("Body is", body);

    let result = formSchema.safeParse(body);

    let zodErrors: any = {};
    if (!result.success) {
        result.error.issues.forEach((issue) => {
            zodErrors = {...zodErrors, [issue.path[0]]: issue.message};
        });
        return NextResponse.json({error: result.error.issues});
    }

    return NextResponse.json(
        Object.keys(zodErrors).length > 0 ? {error: zodErrors} : {success: true}
    );
}
