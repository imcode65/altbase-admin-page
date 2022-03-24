import { Outlet } from 'react-router';
import { SearchPanelCoinCategory } from 'components/moleculars/SearchPanel';

const CoinCategory = () => {
    return (<div className='flex flex-col'>
        <SearchPanelCoinCategory />
        <Outlet></Outlet>
    </div>)
}

export default CoinCategory;