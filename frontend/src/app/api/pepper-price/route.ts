import { NextResponse } from "next/server";
import { getPepperData } from "@/lib/pepper";

export const revalidate = 0;

export async function GET() {
  const data = await getPepperData();
  return NextResponse.json(data, {
    headers: { "Cache-Control": "public, s-maxage=21600, stale-while-revalidate=3600" },
  });
}
