import { Outlet } from 'react-router';

const EmailTemplate = () => {
    return (<div className='flex flex-col'>
        <Outlet></Outlet>
    </div>)
}

export default EmailTemplate;