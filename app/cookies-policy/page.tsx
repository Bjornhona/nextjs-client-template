import type { Metadata } from "next";
import CookiesPolicyContents from "@/components/ui/legal/CookiesPolicyContents";

export const metadata: Metadata = {
  title: "Política de Cookies | CG Consulting",
  description: "Información legal del titular del sitio web",
};

const CookiesPolicy = async () => {
  return (
    <CookiesPolicyContents />
  )
};

export default CookiesPolicy;
