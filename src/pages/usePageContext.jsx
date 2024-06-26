export { usePageContext, PageContextProvider }

import React, { useContext } from 'react'
const Context = React.createContext(undefined)

function PageContextProvider({ pageContext, children }) {
    return <Context.Provider value={pageContext}>{children}</Context.Provider>
}

/** https://vike.dev/usePageContext */
function usePageContext() {
    const pageContext = useContext(Context)
    return pageContext
}