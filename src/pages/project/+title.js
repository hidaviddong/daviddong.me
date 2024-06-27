export function title(pageContext) {
    const { project } = pageContext.data;
    if (project) {
        return `${project.name} · David Dong`;
    }
    return "David Dong's project list"
}
