import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CricketTalks | Your Cricket Destination",
  description:
    "Latest cricket news, match previews, team profiles and cricket analysis.",
};

export default function RootLayout({
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
