import { useState } from "react";
export default function Project() {
	const [counter, setCounter] = useState(0);
	return (
		<div>
			<span>{counter}</span>
			<button
				type="button"
				className="rounded-md bg-white p-2 text-slate-700"
				onClick={() => setCounter(counter + 1)}
			>
				Click
			</button>
		</div>
	);
}
