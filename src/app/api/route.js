import { NextResponse } from "next/server";
// import express from "express";

// const app = express();

// app.use(express.json())



export async function GET() {
    return NextResponse.json({message: "This is next js backend!"})
}