export function title(pageContext) {
    const { project } = pageContext.data;
    return `${project.name}  · David Dong`;
}
