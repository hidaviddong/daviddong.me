import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export default function Page() {
	return (
		<article className="prose prose-stone prose-p:text-neutral-500 p-12">
			<h1>Hey, I'm Haoyu</h1>
			<p>
				You can call me David. I'm a software engineer and previously worked at
				<Badge variant="outline" className="px-2 mx-1 text-sm">
					Tencent Music
				</Badge>
				and
				<Badge variant="outline" className="px-2 mx-1 text-sm">
					Peking University Institute
				</Badge>
				.
			</p>
			<p>
				In my free time, I usually
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger>
							<Badge variant="outline" className="px-2 mx-1 text-sm">
								play guitar
							</Badge>
						</TooltipTrigger>
						<TooltipContent className="py-0">
							<p>R&B, Neo Soul, Gospel</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
				,and
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger>
							<Badge variant="outline" className="px-2 mx-1 text-sm">
								watch movies
							</Badge>
						</TooltipTrigger>
						<TooltipContent className="py-0">
							<p>Thriller, Tragicomedy</p>
						</TooltipContent>
					</Tooltip>
				</TooltipProvider>
				. My favorite director is Woody Allen.
			</p>
			<p>
				Recently, I moved to Hong Kong and am seeking a software development position. Please feel
				free to contact me!
			</p>
		</article>
	);
}
