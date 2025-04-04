import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const body = await req.json();
        console.log("Form Data Recieved")

        return NextResponse.json({message: "Form Submitted wuth success!", data:body})
    } catch (error) {
        return NextResponse.json({error: "Failed to process request"}, {status: 500} )
    }
}