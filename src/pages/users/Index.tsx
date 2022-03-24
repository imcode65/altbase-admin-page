import { Outlet } from 'react-router';
import { SearchPanelUsers } from 'components/moleculars/SearchPanel';

const Users = () => {
    return (<div className='flex flex-col'>
        <SearchPanelUsers />
        <Outlet></Outlet>
    </div>)
}

export default Users;