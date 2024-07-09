import React from "react";
import { cn } from "@/lib/utils";
const Code = React.forwardRef(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("prose border rounded-md md:w-full w-[320px] ", className)} {...props} />
))
export default Code
