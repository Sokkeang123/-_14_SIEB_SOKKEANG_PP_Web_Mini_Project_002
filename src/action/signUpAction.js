"use server";

import { signIn } from "@/auth";
import { signUpService } from "@/services/signUpService";

export const signUpAction = async (user) => {
  const res = await signUpService(user);
  return res;
};
