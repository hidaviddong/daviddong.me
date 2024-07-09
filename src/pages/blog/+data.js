import { Blog } from "@/config"

export async function data(pageContext) {
    const blog = Blog.find((project) => project.href === pageContext.urlParsed.pathname)
    return {
        blog
    }
}