import { FC, ReactElement } from 'react';
import LayoutContextProvider from "context/layoutContext";
import { Provider } from "react-redux";
import store from "store";

const Providers: FC<{children: ReactElement}> = ({ children }) => {
    return (
        <Provider store={store}>
            <LayoutContextProvider>
                { children }
            </LayoutContextProvider>
        </Provider>);
};

export default Providers;
