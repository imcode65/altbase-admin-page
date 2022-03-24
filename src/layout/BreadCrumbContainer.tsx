import Title from 'components/atoms/Title';
import BreadCrumb from 'components/atoms/BreadCrumb';
import { prefix, menuInfo } from 'constants/menuInfo';
import { useLocation } from 'react-router';

const BreadCrumbContainer = () => {
    const location = useLocation();
    const currentMenu = menuInfo.filter((menuItem) => location.pathname.startsWith(prefix + menuItem.matchingUrl))?.[0];
    return (
        <div className="flex items-center justify-between h-14 px-3 bg-color-14">
            { currentMenu ? <>
                <Title text={currentMenu.breadCrumbTitle} />
                <BreadCrumb prefix={prefix} to={currentMenu.to} list={currentMenu.breadCrumb} activeNum={currentMenu.breadCrumbActiveNum} />
            </> : "" }
        </div>
    )
}

export default BreadCrumbContainer;
