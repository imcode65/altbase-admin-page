import { Outlet } from 'react-router';
import { SearchPanelEmailTemplate } from 'components/moleculars/SearchPanel';

const Users = () => {
    return (<div className='flex flex-col'>
        <SearchPanelEmailTemplate />
        <Outlet></Outlet>
    </div>)
}

export default Users;