import { useData } from "vike-react/useData"
export default function Page() {
    const { blog } = useData()
    return (
        <div className="flex flex-col">
            <div className="font-medium text-base flex flex-col gap-1">
                <p className="my-0 text-zinc-700">
                    Reading :
                    <i> {blog.title}</i>
                </p>
                <p className="my-0 text-zinc-500 text-sm">{blog.date} · {blog.description}</p>
            </div>
            <p>Boolean Logic</p>
            <div className="flex flex-col space-y-12">
                <div className="flex flex-col justify-center items-center">
                    <math className="text-2xl" xmlns="http://www.w3.org/1998/Math/MathML">
                        <mover>
                            <mrow>
                                <mi>x</mi>
                            </mrow>
                            <mrow>
                                <mo>-</mo>
                            </mrow>
                        </mover>
                        <mo>&#x00B7;</mo>
                        <mi>y</mi>
                        <mo>+</mo>
                        <mover>
                            <mrow>
                                <mi>y</mi>
                            </mrow>
                            <mrow>
                                <mo>-</mo>
                            </mrow>
                        </mover>
                        <mo>&#x00B7;</mo>
                        <mi>x</mi>
                    </math>
                </div>

            </div>
        </div>
    )
}
