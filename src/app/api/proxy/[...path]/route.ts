import { NextRequest, NextResponse } from "next/server";

const BASE_URL = process.env.BASE_URL || "https://api.escuelajs.co";

export async function GET(req: NextRequest) {
  const path = req.nextUrl.pathname.replace("/api/proxy", "");
  const targetUrl = `${BASE_URL}${path}${req.nextUrl.search}`;

  try {
    const response = await fetch(targetUrl, {
      method: "GET",
      headers: {
        ...req.headers,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      console.error("Fetch error:", response.statusText);
      return NextResponse.json({ error: "Failed to fetch from target API" }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Error during fetch:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}