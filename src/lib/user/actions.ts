"use server";

import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export async function _signOut() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  return redirect("/login");
}