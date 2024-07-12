import { useData } from "vike-react/useData"
function BooleanLogic() {
    return (
        <>
            <h4>Boolean Logic</h4>
            <ul>
                <li>A Boolean function is a function that operates on binary inputs and returns binary outputs. </li>
                <li>Any Boolean function can be realized using <b>Nand</b>.</li>
                <li>De Morgan's laws are important rules in Boolean algebra:
                    <ul>
                        <li className="italic font-mono">Not (A And B) = Not A Or Not B</li>
                        <li className="italic font-mono">Not (A Or B) = Not A And Not B</li>
                    </ul>
                </li>
            </ul>

            <p>This is truth table for Nand.</p>
            <table>
                <thead>
                    <tr>
                        <th>A</th>
                        <th>B</th>
                        <th>A Nand B</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    <tr>
                        <td>0</td>
                        <td>0</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>0</td>
                        <td>1</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>0</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>0</td>
                    </tr>
                </tbody>
            </table>
            <p>If we set both A and B to the same variable X, the truth table is equal to the <b>Not</b> truth table.</p>
            <table>
                <thead>
                    <tr>
                        <th>X</th>
                        <th>X</th>
                        <th>X Nand X</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    <tr>
                        <td>0</td>
                        <td>0</td>
                        <td>1</td>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>1</td>
                        <td>0</td>
                    </tr>
                </tbody>
            </table>
            <p className="italic font-mono">Not X = X Nand X.</p>
            <br />
            <p>Since <b>And</b> is equal to <b>Not Nand</b>，and <b>Not</b> can be expressed using <b>Nand</b>: </p>
            <p className="italic font-mono">A And B = Not (A Nand B) = (A Nand B) Nand (A Nand B)</p>
            <br />
            <p>Accroding to De Morgan's laws, it can be proven that <b>Or</b> can also be expressed using <b>Nand</b>:</p>
            <p className="italic font-mono">A Or B = Not (Not A and Not B)</p>
        </>
    )
}
function BooleanArithmetic() {
    return (
        <>
            <h4>Boolean Arithmetic</h4>
            <p>In the ALU design project, there is a description:<br /><span className="font-mono"> if (f == 1) sets out = x + y, else sets out = x & y</span></p>
            <p>Equal to:</p>
            <ul>
                <li>
                    <p>Calculate <span className="font-mono italic"> sets out = x + y</span></p>
                    <p className="text-sm text-zinc-500 font-mono italic">
                        Add16(a=a, b=b, out=aAddb);
                    </p>
                </li>
                <li>
                    <p>Calculate <span className="font-mono italic"> sets out = x & y</span></p>
                    <p className="text-sm text-zinc-500 font-mono italic">
                        And16(a=a, b=b, out=aAndb);
                    </p>
                </li>
                <li>
                    <p>Use Mux for branch operation</p>
                    <p className="text-sm text-zinc-500 font-mono italic">
                        Mux16(a=aAddb, b=aAndb, sel=f, out=out);
                    </p>
                </li>
            </ul>
        </>
    )
}

export default function Page() {
    const { blog } = useData()
    return (
        <div className="flex flex-col">
            <div className="font-medium text-base flex flex-col gap-1">
                <p className="text-zinc-700">{blog.name}</p>
                <p className=" text-zinc-500 text-sm">{blog.time} · {blog.description}</p>
            </div>

            <BooleanLogic />
            <BooleanArithmetic />
        </div>
    )
}
