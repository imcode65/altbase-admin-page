import { FC } from 'react';
import { IIcon } from './IIcon';

const IconCreditCard: FC<IIcon> = ({ className="", clickHandler=()=>{}, dark=false }) => {
    return (
        <svg
            onClick={clickHandler}
            className={`h-5 w-5 ${className}`}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
        >
            <path fill={dark ? "#000000" : "#FFFFFF"} d="M30 4H2a2 2 0 0 0-2 2v20a2 2 0 0 0 2 2h28a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 22H2V14h28v12zM2 10.084V6h28v4.084H2zM5 24h10a1 1 0 0 0 0-2H5a1 1 0 0 0 0 2zm13-1a1 1 1080 1 0 2 0 1 1 1080 1 0-2 0zm4 0a1 1 1080 1 0 2 0 1 1 1080 1 0-2 0zm4 0a1 1 1080 1 0 2 0 1 1 1080 1 0-2 0z"/>
        </svg>)
}

export default IconCreditCard;