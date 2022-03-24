import { FC, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

interface IBreadCrumb {
    prefix?: string;
    to?: string[];
    list?: string[];
    activeNum?: number;
}

const BreadCrumb: FC<IBreadCrumb> = ({ prefix="", to=[], list=[], activeNum=0 }) => {
    const navigate = useNavigate();
    return <div className='flex'>
    { list.map((item, id) => (
    <Fragment key={id}>
        { id === 0 ? "" : <span className='mx-1'>/</span> }
        <span onClick={() => activeNum > id ? navigate(prefix + to[id]) : {} } className={`cursor-pointer ${ activeNum > id ? "text-blue-300" : "" }`}>{ item }</span>
    </Fragment>
    )) }
    </div>
}

export default BreadCrumb;