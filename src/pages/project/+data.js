import { Works, OpenSourceProjects } from "@/config"
export async function data(pageContext) {
    const allProject = [...Works, ...OpenSourceProjects]
    const project = allProject.find((project) => project.href === pageContext.urlParsed.pathname)
    return {
        project
    }
}