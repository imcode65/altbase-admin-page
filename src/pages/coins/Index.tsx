import { Outlet } from 'react-router';
import { SearchPanelCoins } from 'components/moleculars/SearchPanel';

const Coins = () => {
    return (<div className='flex flex-col'>
        <SearchPanelCoins />
        <Outlet></Outlet>
    </div>)
}

export default Coins;