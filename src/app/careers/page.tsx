import type { Metadata } from "next";
import CareersClient from "./CareersClient";

export const metadata: Metadata = {
  title: "Careers | Lambda Phi Nu",
};

export default function CareersPage() {
  return <CareersClient />;
}
