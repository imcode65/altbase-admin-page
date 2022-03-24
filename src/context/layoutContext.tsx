import { createContext, ReactElement, useState, FC } from "react";
import { md } from 'constants/screenSize';
import { useMediaQuery } from "react-responsive";

interface ILayoutContext {
    sidemenuOpened: boolean;
    sidemenuToggle: (x: boolean) => void;
}
export const LayoutContext = createContext<ILayoutContext>({
    sidemenuOpened: false,
    sidemenuToggle: () => {}
});

interface ILayoutContextProvider {
    children: ReactElement;
}

const LayoutContextProvider: FC<ILayoutContextProvider> = ({ children }) => {
    let isPortrait = useMediaQuery({ query: `(max-width: ${md}px)` });
    const [sidemenuOpened, sidemenuToggle] = useState<boolean>(!isPortrait)
    return (
        <LayoutContext.Provider
            value={{
                sidemenuOpened,
                sidemenuToggle
            }}
        >{ children }</LayoutContext.Provider>
    )
}

export default LayoutContextProvider;
