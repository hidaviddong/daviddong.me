import { useData } from "vike-react/useData";
export { Head }
function Head() {
    const { blog } = useData()
    const URL = "https://daviddong.me"
    console.log('blog', blog)
    if (blog) {
        return (
            <>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="author" content="David Dong" />
                <meta
                    name="description"
                    content={blog.description}
                />
                <meta name="keywords" content={blog.keywords.join(",")} />
                <meta property="og:title" content={blog.name} />
                <meta
                    property="og:description"
                    content={blog.description}
                />
                <meta property="og:image" content={`${URL}${blog.background}`} />
                <meta property="og:url" content={`${URL}${blog.href}`} />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content={blog.name} />
                <meta name="twitter:title" content={blog.title} />
                <meta
                    name="twitter:description"
                    content={blog.description}
                />
                <meta name="twitter:image" content={`${URL}${blog.background}`} />
            </>
        );
    }
    return (
        <>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="author" content="David Dong" />
            <meta
                name="description"
                content="David Dong's blog lists"
            />
            <meta name="keywords" content="blog" />
            <meta property="og:title" content="David Dong's blog lists" />
            <meta
                property="og:description"
                content="David Dong's blog lists"
            />
            <meta property="og:image" content={`${URL}/og.webp`} />
            <meta property="og:url" content={`${URL}/blog`} />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="David Dong's blog lists" />
            <meta name="twitter:title" content="David Dong's blog lists" />
            <meta
                name="twitter:description"
                content="David Dong's blog lists"
            />
            <meta name="twitter:image" content={`${URL}/og.webp`} />
        </>
    );
}