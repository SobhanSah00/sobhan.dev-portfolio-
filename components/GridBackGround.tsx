import { cn } from "@/lib/utils";
import React from "react";

interface childrenType {
  children : React.ReactNode | string | number
}

export function GridBackgroundDemo({ children }: childrenType) {
  return (
    <div className="relative flex min-h-screen w-full bg-white dark:bg-neutral-950">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,rgba(228,228,231,0.6)_1px,transparent_1px),linear-gradient(to_bottom,rgba(228,228,231,0.3)_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,rgba(80,80,80,0.5)_1px,transparent_1px),linear-gradient(to_bottom,rgba(60,60,60,0.25)_1px,transparent_1px)]"
        )}
      />
      <div className="relative">
        {children}
      </div>
    </div>
  );
}