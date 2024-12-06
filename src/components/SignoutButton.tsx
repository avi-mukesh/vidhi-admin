"use client";
import React from "react";
import { _signOut } from "@/lib/user/actions";

const SignoutButton = () => {
  return (
    <button className="bg-slate-200 p-1" onClick={_signOut}>
      Sign out
    </button>
  );
};

export default SignoutButton;
