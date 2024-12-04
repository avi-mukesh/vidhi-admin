import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import localFont from "next/font/local";
import "./globals.css";
import SignoutButton from "@/components/SignoutButton";
import { createClient } from "@/utils/supabase/server";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Admin | Vidhi Saharaa",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const supabaseClient = await createClient();
  const user = await supabaseClient.auth.getUser();
  const userObj = user.data.user;

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <h1>Vidhi Saharaa Admin Portal</h1>
        {userObj && <SignoutButton />}
        <Toaster position="bottom-right" />
        {children}
      </body>
    </html>
  );
}
