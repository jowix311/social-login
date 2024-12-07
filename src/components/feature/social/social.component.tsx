"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { signIn, signOut } from "next-auth/react";
import { PropsWithChildren } from "react";

type CommonProps = PropsWithChildren & {
  className?: string;
};

export const SocialBlock = ({ children, className }: CommonProps) => {
  return (
    <div className={cn("m-auto border p-10 shadow-sm", className)}>
      {children}
    </div>
  );
};

export const FacebookLogin = ({ children, className }: CommonProps) => {
  return (
    <Button
      className={cn("font-bold text-white", className)}
      onClick={() => {
        signIn("facebook");
      }}
    >
      {children}
    </Button>
  );
};

export const TwitterLogin = ({ children, className }: CommonProps) => {
  return (
    <Button
      className={cn("font-bold text-white", className)}
      onClick={() => {
        signIn("twitter");
      }}
    >
      {children}
    </Button>
  );
};

export const SignOut = ({ children, className }: CommonProps) => {
  return (
    <Button
      className={cn("font-bold text-white", className)}
      onClick={() => {
        signOut({ redirectTo: "/" });
      }}
    >
      {children}
    </Button>
  );
};
