export default function Code({ html }) {
    return (
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
        <div className="prose border rounded-md md:w-full w-[320px] overflow-hidden" dangerouslySetInnerHTML={{ __html: html }} />
    )
}
