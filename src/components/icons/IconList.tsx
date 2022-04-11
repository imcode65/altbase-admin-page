import { FC } from 'react';
import { IIcon } from './IIcon';

const IconList: FC<IIcon> = ({ className="", clickHandler=()=>{}, dark=false }) => {
    return (
        <svg
            onClick={clickHandler}
            className={`h-5 w-5 ${className}`}
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
        >
            <path fill={dark ? "#000000" : "#FFFFFF"} d="M0 1h3v3H0V1zM0 6h3v3H0V6zM0 11h3v3H0v-3zM5 1h11v3H5V1zM5 6h11v3H5V6zM5 11h11v3H5v-3z"/>
        </svg>)
}

export default IconList;