import Logo from 'components/atoms/Logo';
import MenuItem from 'components/atoms/MenuItem';
import GradientText from 'components/atoms/GradientText';
import { useLocation } from 'react-router';
import { useContext } from 'react';
import { LayoutContext } from 'context/layoutContext';
import { prefix, menuInfo } from 'constants/menuInfo';

const SideBar = () => {
    const location = useLocation();
    const { sidemenuOpened } = useContext(LayoutContext);
    return (
        <div className={`flex flex-col align-start h-full w-64 transition-all ${ sidemenuOpened ? "translate-x-0 shadow-lg" : "-translate-x-64"} border-r bg-color-11`}>
            <div className="flex flex-col items-center justify-center border-b border-color-12 h-14">
                <Logo></Logo>
            </div>
            <div className=''>
                <GradientText className='w-full flex justify-center mb-4' text='Welcome Admin' />
                <ul>
                { menuInfo.map((menuItem, id) => (
                    <MenuItem to={prefix + menuItem.to} key={id} Icon={menuItem.Icon} text={menuItem.text} active={location.pathname === prefix + menuItem.to} />
                )) }
                </ul>
            </div>
        </div>
    )
}

export default SideBar;