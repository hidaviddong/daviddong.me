import { usePageContext } from "vike-react/usePageContext";
export default function Page() {
	const pageContext = usePageContext();
	return (
		<div className="h-screen w-full flex justify-center items-center">
			<h1 className="text-3xl"> Hello {pageContext.routeParams.name}</h1>
		</div>
	);
}
