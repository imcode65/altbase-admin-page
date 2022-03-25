import { Outlet } from 'react-router';

const Coins = () => {
    return (<div className='flex flex-col'>
        <Outlet></Outlet>
    </div>)
}

export default Coins;