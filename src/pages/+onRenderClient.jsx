export { onRenderClient }

import React from 'react'
import { hydrateRoot } from 'react-dom/client'
import LayoutDefault from './Layout.jsx'

async function onRenderClient(pageContext) {
    const { Page } = pageContext
    hydrateRoot(
        document.getElementById('app'),
        <LayoutDefault>
            <Page />
        </LayoutDefault>
    )
}