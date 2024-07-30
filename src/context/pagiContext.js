import { createContext, useContext } from "react";

export const pageContext = createContext();

export const PageContextProvider = pageContext.Provider;

const usePageContext = () => {
    return useContext(pageContext);
}

export default usePageContext;