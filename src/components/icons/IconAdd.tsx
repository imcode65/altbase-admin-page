import { FC } from 'react';
import { IIcon } from './IIcon';

const IconAdd: FC<IIcon> = ({ className="", clickHandler=()=>{} }) => {
    return (<svg onClick={clickHandler} className={`h-5 w-5 ${className}`} xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><path strokeWidth="4" stroke="#FFFFFF" d="M38 26h-12v12h-4v-12h-12v-4h12v-12h4v12h12v4z"/><path fill="none" d="M0 0h48v48h-48z"/></svg>)
}

export default IconAdd;