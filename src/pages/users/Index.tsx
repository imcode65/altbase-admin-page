import { Outlet } from 'react-router';

const Users = () => {
    return (<div className='flex flex-col'>
        <Outlet></Outlet>
    </div>)
}

export default Users;