import { FC } from "react";

interface IButton1 {
    className?: string;
    text?: string;
    rounded?: boolean;
    onClick?: () => void;
}

const Button1: FC<IButton1> = ({ className="", text="", rounded=false, onClick=()=>{} }) => {
    return (
        <div onClick={onClick} className={`${className} h-10 p-2 ${ rounded ? "rounded-full" : "rounded" } flex justify-center items-center font-sm text-base text-white bg-color-20 hover:bg-black transition-all cursor-pointer active:ring-0 active:ring-black py-1`}>{text}</div>
    )
}

export default Button1;