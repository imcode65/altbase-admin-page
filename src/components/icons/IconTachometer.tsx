import { FC } from 'react';
import { IIcon } from './IIcon';

const IconTachometer: FC<IIcon> = ({ className="", clickHandler=()=>{}, dark=true }) => {
    return (
        <svg
            onClick={clickHandler}
            className={`h-5 w-5 ${className}`}
            xmlns="http://www.w3.org/2000/svg"
            width="512"
            height="512"
            viewBox="0 0 512 512"
        >
            <path fill={dark ? "#000000" : "#FFFFFF"} stroke={dark ? "#000000" : "#FFFFFF"} d="M344 256l-84.4 64.2c-1.2-.1-2.4-.2-3.6-.2-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32c0-1.2-.1-2.4-.2-3.6L352 264l-8-8z"/>
            <path fill={dark ? "#000000" : "#FFFFFF"} stroke={dark ? "#000000" : "#FFFFFF"} d="M256 96C132.3 96 32 196.3 32 320c0 34.4 7.8 66.9 21.6 96h36.1c-15.4-26.6-24.2-56.6-25.5-88H96v-16H64.2c1.2-28.8 8.7-56.5 21.8-81.4l27.5 15.9 8-13.9L94 216.8c7.4-11.6 16.2-22.6 26.2-32.6 10.2-10.1 21.3-19 33.1-26.5l15.8 27.3 13.9-8-15.8-27.3c24.8-13 52.2-20.3 80.8-21.5V160h16v-31.8c28.6 1.2 56 8.6 80.8 21.5L329.1 177l13.9 8 15.8-27.3c11.8 7.5 22.9 16.4 33.1 26.5 10 10 18.7 20.9 26.2 32.6l-27.4 15.8 8 13.9 27.5-15.9c13.1 24.9 20.6 52.6 21.8 81.4h-32v16h31.8c-1.3 31.4-10.1 61.4-25.5 88h36.1c13.8-29.1 21.6-61.6 21.6-96 0-123.7-100.3-224-224-224z"/>
        </svg>)
}

export default IconTachometer;