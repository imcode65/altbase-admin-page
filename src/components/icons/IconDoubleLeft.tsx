import { FC } from 'react';
import { IIcon } from './IIcon';

const IconDoubleLeft: FC<IIcon> = ({ className="", clickHandler=()=>{} }) => {
    return (<svg onClick={clickHandler} className={`h-5 w-5 ${className}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17,17a1,1,0,0,1-.71-.29l-4-4a1,1,0,0,1,0-1.41l4-4a1,1,0,0,1,1.41,1.41L14.41,12l3.29,3.29A1,1,0,0,1,17,17Z"/><path d="M11,17a1,1,0,0,1-.71-.29l-4-4a1,1,0,0,1,0-1.41l4-4a1,1,0,0,1,1.41,1.41L8.41,12l3.29,3.29A1,1,0,0,1,11,17Z"/></svg>)
}

export default IconDoubleLeft;