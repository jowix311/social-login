import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
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
    <Button className={cn("font-bold text-white", className)}>
      {children}
    </Button>
  );
};
