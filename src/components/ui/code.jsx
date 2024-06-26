import { useEffect, useState } from "react";
import { codeToHtml } from 'shiki'

export default function Code({ code }) {
    const [html, setHtml] = useState("");
    useEffect(() => {
        const renderShikiHtml = async () => {
            const generatedHtml = await codeToHtml(code, {
                lang: 'javascript',
                theme: 'vitesse-light'
            });
            setHtml(generatedHtml);
        };
        renderShikiHtml()
    }, [code])
    return (
        // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
        <div className="prose border rounded-md md:w-full w-[320px] overflow-hidden" dangerouslySetInnerHTML={{ __html: html }} />
    )
}
