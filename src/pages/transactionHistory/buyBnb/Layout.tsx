import { Outlet } from 'react-router';
import { SearchPanelTxBuyBnb } from 'components/moleculars/SearchPanel';

const TxBuyBnb = () => {
    return (<div className='flex flex-col'>
        <SearchPanelTxBuyBnb />
        <Outlet></Outlet>
    </div>)
}

export default TxBuyBnb;