import { FC } from 'react';
import { IIcon } from './IIcon';

const IconPower: FC<IIcon> = ({ className="", clickHandler=()=>{} }) => {
    return (<svg onClick={clickHandler} className={`h-5 w-5 ${className}`} xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22"><g fill="none" fillRule="evenodd" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" transform="translate(0 1)"><path d="M16.36 4.64a9 9 0 11-12.73 0M10 0v10"/></g></svg>)
}

export default IconPower;