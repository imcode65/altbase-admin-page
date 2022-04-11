import { FC } from 'react';
import { IIcon } from './IIcon';

const IconNewspaper: FC<IIcon> = ({ className="", clickHandler=()=>{}, dark=false }) => {
    return (
        <svg
            onClick={clickHandler}
            className={`h-5 w-5 ${className}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <g data-name="katman 2">
                <path fill={dark ? "#000000" : "#FFFFFF"} stroke="#2c2c2c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21,20H3a2,2,0,0,1-2-2V4H19V18A2,2,0,0,0,21,20Z"/>
                <path fill={dark ? "#000000" : "#FFFFFF"} stroke="#2c2c2c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19,10h4v8a2,2,0,0,1-2,2"/>
                <rect width="4" height="4" x="5" y="8" fill={dark ? "#000000" : "#FFFFFF"} stroke="#2c2c2c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                <line x1="13" x2="15" y1="8" y2="8" fill={dark ? "#000000" : "#FFFFFF"} stroke="#2c2c2c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                <line x1="13" x2="15" y1="12" y2="12" fill={dark ? "#000000" : "#FFFFFF"} stroke="#2c2c2c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                <line x1="5" x2="15" y1="16" y2="16" fill={dark ? "#000000" : "#FFFFFF"} stroke="#2c2c2c" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
                <rect width="24" height="24" fill="none"/>
            </g>
        </svg>
    )
}

export default IconNewspaper;