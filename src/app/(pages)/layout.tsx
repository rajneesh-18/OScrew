import type { Metadata } from "next";
import "../globals.css"

export const metadata: Metadata = {
  title: "OScrew",
  description: "A open space for people to share their failures and learnings",
};

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
