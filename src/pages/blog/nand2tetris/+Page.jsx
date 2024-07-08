import { useData } from "vike-react/useData"
export default function Page() {
    const { blog } = useData()
    return (
        <div className="flex flex-col">
            <div className="font-medium text-base flex flex-col gap-1">
                <p className="text-zinc-700">{blog.name}</p>
                <p className=" text-zinc-500 text-sm">{blog.time} · {blog.description}</p>
            </div>

            <h4>Boolean Logic</h4>
            <ul>
                <li>A Boolean function is a function that operates on binary inputs and returns binary outputs. </li>
                <li>Any Boolean function can be realized using <b>Nand</b>.</li>
                <li>De Morgan's laws are important rules in Boolean algebra:
                    <ul>
                        <li>Not (A And B) = Not A Or Not B</li>
                        <li>Not (A Or B) = Not A And Not B</li>
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
            {/*  */}
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
            <p> So <b>Not X = X Nand X.</b></p>
            <br />
            <p>Since <b>And</b> is equal to <b>Not Nand</b>，and <b>Not</b> can be expressed using <b>Nand</b>: </p>
            <p>A And B = Not (A Nand B) = (A Nand B) Nand (A Nand B)</p>
            <br />
            <p>Accroding to De Morgan's laws, it can be proven that <b>Or</b> can also be expressed using <b>Nand</b>:</p>
            <p>A Or B = Not (Not A and Not B)</p>
        </div>
    )
}
