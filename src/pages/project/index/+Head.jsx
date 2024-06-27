export { Head }
function Head() {
    const URL = "https://daviddong.me"
    return (
        <>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta name="author" content="David Dong" />
            <meta
                name="description"
                content="David Dong's project lists"
            />
            <meta name="keywords" content="project,TypeScript,React" />
            <meta property="og:title" content="David Dong's project lists" />
            <meta
                property="og:description"
                content="David Dong's project lists"
            />
            <meta property="og:image" content={`${URL}/og.webp`} />
            <meta property="og:url" content={`${URL}/project`} />
            <meta property="og:type" content="website" />
            <meta name="twitter:card" content="David Dong's project lists" />
            <meta name="twitter:title" content="David Dong's project lists" />
            <meta
                name="twitter:description"
                content="David Dong's project lists"
            />
            <meta name="twitter:image" content={`${URL}/og.webp`} />
        </>
    );
}