import React from "react";
import { redirect } from "next/navigation";

import { createClient } from "@/utils/supabase/server";
import Link from "next/link";

export default async function layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();

  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    redirect("/login");
  }

  return (
    <>
      <Link href="/">Home</Link>
      {children}
    </>
  );
}
