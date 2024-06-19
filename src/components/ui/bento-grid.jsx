import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils";
import { navigate } from "vike/client/router";
import { ArrowRightIcon } from "./icons";
const BentoGrid = ({ children, className }) => {
	return (
		<div className={cn("grid w-full grid-cols-2 gap-4", className)}>
			{children}
		</div>
	);
};

const BentoCard = ({ name, className, background, description, href }) => {
	return (
		// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
		<div
			key={name}
			onClick={() => navigate(href)}
			className={cn(
				"group relative col-span-2 flex flex-col justify-between overflow-hidden rounded-xl hover:cursor-pointer",
				// light styles
				"bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
				// dark styles
				"transform-gpu dark:bg-black dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
				className,
			)}
		>
			<img
				src={background}
				className="border rounded-md md:absolute md:-right-36 md:-top-[90px] md:transition-all md:duration-300 md:ease-out md:scale-[0.6] md:group-hover:scale-100"
				alt={name}
			/>
			<Separator className="md:hidden" />
			<div className="pointer-events-none z-10  flex transform-gpu flex-col gap-1 md:p-6 pl-4 transition-all duration-300 group-hover:-translate-y-10">
				<h3 className="group-hover:opacity-0 transition-all duration-100 text-md font-semibold text-neutral-700 dark:text-neutral-300">
					{name}
				</h3>
				<p className="group-hover:opacity-0 transition-all duration-100 max-w-lg text-neutral-400 text-sm">
					{description}
				</p>
			</div>

			<div
				className={cn(
					"pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
				)}
			>
				<Button variant="ghost" asChild size="sm" className="pointer-events-auto">
					<a href={href}>
						<ArrowRightIcon className="h-4 w-4" />
					</a>
				</Button>
			</div>
			<div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
		</div>
	);
};

export { BentoCard, BentoGrid };
