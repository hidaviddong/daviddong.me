import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { navigate } from "vike/client/router";
import { useImageMeta } from "@/hooks";

const BentoImage = ({ className, ...props }) => {
	const { width, height } = useImageMeta(props.src);
	// biome-ignore lint/a11y/useAltText: <explanation>
	return <img
		className={cn("border rounded-md md:absolute md:-right-36 md:-top-[90px] md:transition-all md:duration-300 md:ease-out md:scale-[0.6] md:group-hover:scale-100", className)}
		width={width}
		height={height}
		{...props}
	/>
}
const BentoGrid = ({ children, className }) => {
	return <div className={cn("grid w-full grid-cols-2 gap-4", className)}>{children}</div>;
};

const BentoCard = ({ name, className, background, description, href, children }) => {
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
			{children}
			<Separator className="md:hidden" />
			<div className="pointer-events-none z-10  flex transform-gpu flex-col gap-1 md:p-6 pl-4 md:transition-all md:duration-200 md:group-hover:opacity-0">
				<h3 className="text-md font-semibold text-neutral-700 dark:text-neutral-300">{name}</h3>
				<p className="max-w-lg text-neutral-400 text-sm">{description}</p>
			</div>
		</div>
	);
};

export { BentoCard, BentoGrid, BentoImage };
