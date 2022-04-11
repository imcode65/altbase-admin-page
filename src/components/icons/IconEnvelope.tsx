import { FC } from 'react';
import { IIcon } from './IIcon';

const IconEnvelope: FC<IIcon> = ({ className="", clickHandler=()=>{}, dark=false }) => {
    return (<svg onClick={clickHandler} className={`h-4 w-5 ${className}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 96">
        <path fill={dark ? "#000000" : "#FFFFFF"} d="M0 11.283V8a8 8 0 0 1 8-8h112a8 8 0 0 1 8 8v3.283l-64 40zm66.12 48.11a4.004 4.004 0 0 1-4.24 0L0 20.717V88a8 8 0 0 0 8 8h112a8 8 0 0 0 8-8V20.717z" data-name="Layer 2"/>
    </svg>)
}

export default IconEnvelope;