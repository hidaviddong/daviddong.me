import { Works, SideProjects } from "@/config/project"
export async function data(pageContext) {
    const allProject = [...Works, ...SideProjects]
    const project = allProject.find((project) => project.href === pageContext.urlParsed.pathname)
    return {
        project
    }
}