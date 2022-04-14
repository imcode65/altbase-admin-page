import Logo from 'components/atoms/Logo';
import MenuItem from 'components/atoms/MenuItem';
import GradientText from 'components/atoms/GradientText';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';
import { LayoutContext } from 'context/layoutContext';
import { prefix, menuInfo } from 'constants/menuInfo';
import { md } from 'constants/screenSize';
import { useMediaQuery } from "react-responsive";
import { useAppDispatch, useAppSelector } from 'store/hooks';

const SideBar = () => {
    const { authInfo } = useAppSelector(state => state.auth);
    let isPortrait = useMediaQuery({ query: `(max-width: ${md}px)` });
    const location = useLocation();
    const { sidemenuOpened, sidemenuToggle } = useContext(LayoutContext);
    return (
        <>
            <div className={`flex flex-col align-start h-full w-64 transition-all ${ sidemenuOpened ? "translate-x-0 shadow-lg" : (isPortrait ? "-translate-x-[100vw]" : "-translate-x-64")} bg-color-11 shadow-2xl`}>
                <div className="flex flex-col items-center justify-center border-b border-color-12 h-14">
                    <Logo></Logo>
                </div>
                <div className=''>
                    <GradientText className='w-full flex justify-center mb-4' text={authInfo?.name} />
                    <ul>
                    { menuInfo.filter(val => val.breadCrumbActiveNum === 1).map((menuItem, id) => (
                        <MenuItem to={prefix + menuItem.matchingUrl} key={id} Icon={menuItem.Icon} text={menuItem.text} active={location.pathname.startsWith(prefix + menuItem.matchingUrlSidebar)} />
                    )) }
                    </ul>
                </div>
            </div>
            { isPortrait ? <div onClick={() => sidemenuToggle(!sidemenuOpened)} className={`bg-black bg-opacity-10 ${ sidemenuOpened ? "" : "-translate-x-[100vw]"}`} style={{
                width: "calc(100vw - 16rem)",
            }}>
            </div> : "" }
        </>
    )
}

export default SideBar;