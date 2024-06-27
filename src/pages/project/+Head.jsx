import { useData } from "vike-react/useData";

export { Head }
function Head() {
    const { project } = useData()
    const URL = "https://daviddong.me"
    return (
        <>
            <meta charSet="UTF-8" />
            <title>{project.name} · David Dong</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="author" content="David Dong" />
            <meta
                name="description"
                content={project.description}
            />
            <meta name="keywords" content={project.keywords.join(",")} />
            <meta property="og:title" content={project.name} />
            <meta
                property="og:description"
                content={project.description}
            />
            <meta property="og:image" content={`${URL}${project.background}`} />
            <meta property="og:url" content={`${URL}${project.href}`} />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content={project.name} />
            <meta name="twitter:title" content={project.title} />
            <meta
                name="twitter:description"
                content={project.description}
            />
            <meta name="twitter:image" content={`${URL}${project.background}`} />
        </>
    );
}