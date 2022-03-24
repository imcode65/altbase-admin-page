import { FC, ReactElement } from 'react';
import LayoutContextProvider from "context/layoutContext";

const Providers: FC<{children: ReactElement}> = ({ children }) => {
    return (<LayoutContextProvider>
        { children }
    </LayoutContextProvider>);
};

export default Providers;
