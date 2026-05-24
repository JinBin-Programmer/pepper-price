import type { Metadata } from "next";
import { getPepperData } from "@/lib/pepper";
import ClientPage from "@/components/ClientPage";

export const revalidate = 21600;

export const metadata: Metadata = {
  title: "Pepper Price Malaysia — Daily MPB Rates",
  description:
    "Today's Malaysia Pepper Board (MPB) prices for Black Pepper Sarawak (BPS) and White Pepper Sarawak (WPS) in RM per tonne and RM per kg.",
};

export default async function HomePage() {
  const data = await getPepperData();
  return <ClientPage data={data} />;
}
