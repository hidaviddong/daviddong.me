import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
export default function Page() {
	return (
		<article className="prose prose-p:text-neutral-500 p-12">
			<h1>Hey, I'm Haoyu</h1>
			<p>
				You can call me David. I'm a software engineer and previously worked at
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger>
							<Badge variant="outline" className="px-2 mx-1 text-sm">
								{/* <a href="https://www.tencentmusic.com/en-us/">Tencent Music</a> */}
								Tencent Music
							</Badge>
						</TooltipTrigger>
						<TooltipContent> Intern Software Developer from May 2022 to Oct 2022 </TooltipContent>
					</Tooltip>
				</TooltipProvider>
				and
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger>
							<Badge variant="outline" className="px-2 mx-1 text-sm" asChild>
								{/* <a href="https://icode.pku.edu.cn/">Peking University Institute</a> */}
								Peking University Institute
							</Badge>
						</TooltipTrigger>
						<TooltipContent> Junior Software Developer from Jul 2023 to Jul 2024 </TooltipContent>
					</Tooltip>
				</TooltipProvider>
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
						<TooltipContent>R&B, Neo Soul, Gospel</TooltipContent>
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
						<TooltipContent>Thriller, Tragicomedy</TooltipContent>
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
