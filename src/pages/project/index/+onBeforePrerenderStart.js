// Environment: Node.js
import { OpenSourceProjects, Works } from "@/config/project";
export { onBeforePrerenderStart }
async function onBeforePrerenderStart() {
    const lists = [...OpenSourceProjects, ...Works]
    return lists.map(list => list.href)
}