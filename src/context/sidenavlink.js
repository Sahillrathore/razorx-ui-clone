import { createContext, useContext } from "react";

export const navcontext = createContext();

export const NavContextProivider = navcontext.Provider;

const useNavContext = () => {
    return useContext(navcontext);
}

export default useNavContext;