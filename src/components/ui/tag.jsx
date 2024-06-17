import { Badge } from "./badge";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
function Tag({ text, tooltip }) {
	return (
		<Popover>
			<PopoverTrigger>
				<Badge variant="outline" className="px-2 mx-1 text-sm">
					{text}
				</Badge>
			</PopoverTrigger>
			<PopoverContent side="top" className="text-sm w-full p-2">{tooltip}</PopoverContent>
		</Popover>
	);
}
export { Tag };
