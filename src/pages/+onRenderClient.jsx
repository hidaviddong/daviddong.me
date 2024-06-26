export { onRenderClient }

import React from 'react'
import { hydrateRoot, createRoot } from 'react-dom/client'
import LayoutDefault from './Layout.jsx'

let root;
async function onRenderClient(pageContext) {
    const { Page } = pageContext
    const container = document.getElementById('app')
    const page = (
        <LayoutDefault>
            <Page />
        </LayoutDefault>
    )
    if (pageContext.isHydration) {
        root = hydrateRoot(container, page)
    } else {
        if (!root) {
            root = createRoot(container)
            root.render(page)
        }
    }
}