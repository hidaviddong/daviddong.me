import { useMediaQuery } from "@react-hookz/web";
import { useState } from "react";
import { Badge } from "./badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./tooltip";
function Tag({ text, tooltip }) {
	const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
	const isMediumDevice = useMediaQuery(
		"only screen and (min-width : 769px) and (max-width : 992px)",
	);
	const shouldOpen = isSmallDevice || isMediumDevice;
	const [open, setOpen] = useState(false);
	return (
		<TooltipProvider delayDuration={300}>
			<Tooltip open={open} onOpenChange={(e) => setOpen(e)}>
				<TooltipTrigger
					onClick={(e) => {
						shouldOpen && e.preventDefault() && setOpen(true);
					}}
				>
					<Badge variant="outline" className="px-2 mx-1 text-sm hover:cursor-pointer">
						{text}
					</Badge>
				</TooltipTrigger>
				<TooltipContent>{tooltip}</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}

export { Tag };
