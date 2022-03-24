import { FC } from 'react';
import { IIcon } from './IIcon';

const IconLock: FC<IIcon> = ({ className="", clickHandler=()=>{} }) => {
    return (<svg onClick={clickHandler} className={`h-5 w-5 ${className}`} xmlns="http://www.w3.org/2000/svg" id="Layer_1" x="0" y="0" version="1.1" viewBox="0 0 29 29" xmlSpace="preserve">
        <path fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="2" d="M14.5 2.5A5.5 5.5 0 0 1 20 8v4.5H9V8a5.5 5.5 0 0 1 5.5-5.5z"/><path d="M6 11.5h17a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-11a2 2 0 0 1 2-2z"/>
    </svg>)
}

export default IconLock;