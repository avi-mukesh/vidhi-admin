"use client";
import React from "react";
import { _signOut } from "@/lib/user/actions";

const SignoutButton = () => {
  return <button onClick={_signOut}>Sign out</button>;
};

export default SignoutButton;
