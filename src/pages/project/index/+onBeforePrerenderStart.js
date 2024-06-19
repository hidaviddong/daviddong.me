// Environment: Node.js
import { SideProjects, Works } from "@/config/project";
export { onBeforePrerenderStart };
async function onBeforePrerenderStart() {
	const lists = [...SideProjects, ...Works];
	return lists.map((list) => list.href);
}
