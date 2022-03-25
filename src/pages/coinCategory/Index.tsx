import { Outlet } from 'react-router';

const CoinCategory = () => {
    return (<div className='flex flex-col'>
        <Outlet></Outlet>
    </div>)
}

export default CoinCategory;