import { Outlet } from 'react-router';
import { SearchPanelCms } from 'components/moleculars/SearchPanel';

const Cms = () => {
    return (<div className='flex flex-col'>
        <SearchPanelCms />
        <Outlet></Outlet>
    </div>)
}

export default Cms;