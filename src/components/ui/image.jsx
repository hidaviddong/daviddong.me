import { useImageMeta } from "@/hooks/useImageMeta";
const Image = ({ className, ...props }) => {
    const { width, height } = useImageMeta(props.src);
    const defaultClasses = "border rounded-md md:absolute md:-right-36 md:-top-[90px] md:transition-all md:duration-300 md:ease-out md:scale-[0.6] md:group-hover:scale-100";
    const finalClasses = className ? className : defaultClasses;
    // biome-ignore lint/a11y/useAltText: <explanation>
    return <img
        className={finalClasses}
        width={width}
        height={height}
        {...props}
    />
}
export { Image }