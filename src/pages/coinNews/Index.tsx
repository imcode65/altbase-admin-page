import { Outlet } from 'react-router';
import { SearchPanelCoinNews } from 'components/moleculars/SearchPanel';

const CoinNews = () => {
    return (<div className='flex flex-col'>
        <SearchPanelCoinNews />
        <Outlet></Outlet>
    </div>)
}

export default CoinNews;