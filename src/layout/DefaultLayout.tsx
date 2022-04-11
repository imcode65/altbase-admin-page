import { Outlet } from 'react-router';
import SideBar from 'layout/SideBar';
import Header from 'layout/Header';
import Footer from 'layout/Footer';
import BreadCrumbContainer from 'layout/BreadCrumbContainer';
import { useContext } from 'react';
import { LayoutContext } from 'context/layoutContext';
import { md } from 'constants/screenSize';
import { useMediaQuery } from "react-responsive";

const DefaultLayout = () => {
    let isPortrait = useMediaQuery({ query: `(max-width: ${md}px)` });
    const { sidemenuOpened, sidemenuToggle } = useContext(LayoutContext);
    return (
        <div className='relative min-h-screen flex overflow-hidden'>
            <div className={`${ sidemenuOpened ? "z-20" : "" } flex`}>
                <SideBar />
            </div>
            <div className={`${ isPortrait || !sidemenuOpened ? (isPortrait ? "-ml-[100vw]" : "-ml-64") : "ml-0" } flex flex-col justify-between`} style={{
                width: isPortrait || !sidemenuOpened ? "100vw" : "calc(100% - 16rem)"
            }}>
                <Header onClick={() => sidemenuToggle(!sidemenuOpened)} />
                <BreadCrumbContainer />
                <div className='flex-grow flex-shrink px-3 py-2 bg-color-14'>
                    <Outlet />
                </div>
                <Footer />
            </div>
        </div>
    )
}

export default DefaultLayout;