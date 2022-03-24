import { Outlet } from 'react-router';
import { SearchPanelEmailTemplate } from 'components/moleculars/SearchPanel';

const EmailTemplate = () => {
    return (<div className='flex flex-col'>
        <SearchPanelEmailTemplate />
        <Outlet></Outlet>
    </div>)
}

export default EmailTemplate;