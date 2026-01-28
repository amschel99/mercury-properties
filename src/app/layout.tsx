import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mercury Properties | Rent Smarter. Own Stress-Free.",
  description: "Kenya's premium property management company. We find tenants, manage security, handle taxes, and keep your property profitable.",
  keywords: "property management Kenya, rental houses Nairobi, landlord services, tenant screening Kenya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="noise">
        {children}
      </body>
    </html>
  );
}
