import { FC, Fragment } from 'react';
interface IBreadCrumb {
    list?: string[];
    activeNum?: number;
}

const BreadCrumb: FC<IBreadCrumb> = ({ list=[], activeNum=0 }) => {
    return <div className='flex'>
    { list.map((item, id) => (
    <Fragment key={id}>{ id === 0 ? "" : <span className='mx-1'>/</span> }<span className={`cursor-pointer ${ activeNum === id ? "text-blue-300" : "" }`}>{ item }</span></Fragment>
    )) }
    </div>
}

export default BreadCrumb;