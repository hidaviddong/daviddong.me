export async function data(pageContext) {
    const blogs = [
        {
            title: 'The Elements of Computing Systems',
            date: '2024',
            href: '/blog/nand2tetris',
            description: "I want to understand how computers workd at a low level."
        }
    ]
    const blog = blogs.find((project) => project.href === pageContext.urlParsed.pathname)
    return {
        blog
    }
}