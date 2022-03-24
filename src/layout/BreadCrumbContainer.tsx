import Title from 'components/atoms/Title';
import BreadCrumb from 'components/atoms/BreadCrumb';
import { prefix, menuInfo } from 'constants/menuInfo';
import { useLocation } from 'react-router';

const BreadCrumbContainer = () => {
    const location = useLocation();
    const currentMenu = menuInfo.filter((menuItem) => location.pathname === (prefix + menuItem.to))?.[0];
    return (
        <div className="flex items-center justify-between h-14 px-3 bg-color-14">
            { currentMenu ? <>
                <Title text={currentMenu.breadCrumbTitle} />
                <BreadCrumb list={currentMenu.breadCrumb} activeNum={0} />
            </> : "" }
        </div>
    )
}

export default BreadCrumbContainer;
