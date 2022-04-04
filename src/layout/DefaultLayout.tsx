import { Outlet } from 'react-router';
import SideBar from 'layout/SideBar';
import Header from 'layout/Header';
import Footer from 'layout/Footer';
import BreadCrumbContainer from 'layout/BreadCrumbContainer';
import { useContext } from 'react';
import { LayoutContext } from 'context/layoutContext';

const DefaultLayout = () => {
    const { sidemenuOpened, sidemenuToggle } = useContext(LayoutContext);
    return (
        <div className='relative min-h-screen flex'>
            <div className=''>
                <SideBar />
            </div>
            <div className=''>
                <SideBar />
            </div>
            <div className={`${ sidemenuOpened ? "ml-0" : "-ml-64" } flex flex-col justify-between`} style={{
                width: sidemenuOpened ? "calc(100% - 16rem)" : "100%"
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