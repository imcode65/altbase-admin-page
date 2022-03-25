import { Outlet } from 'react-router';

const CoinNews = () => {
    return (<div className='flex flex-col'>
        <Outlet></Outlet>
    </div>)
}

export default CoinNews;