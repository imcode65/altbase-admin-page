import { Outlet } from 'react-router';

const Cms = () => {
    return (<div className='flex flex-col'>
        <Outlet></Outlet>
    </div>)
}

export default Cms;