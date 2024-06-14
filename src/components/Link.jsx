export default function Link({ href, children }) {
    return (
        <a href={href} className="hover:bg-zinc-100 hover:border-none rounded-md p-1">
            {children}
        </a >
    );
}