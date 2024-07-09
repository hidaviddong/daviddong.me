export function title(pageContext) {
    const { blog } = pageContext.data;
    if (blog) {
        return `${blog.name} · David Dong`;
    }
    return "David Dong's blog list"
}
