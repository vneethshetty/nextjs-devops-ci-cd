import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    app: "Next.js CI/CD Dashboard",
    environment: process.env.NODE_ENV,
    deployedAt: new Date().toISOString(),
  });
}
