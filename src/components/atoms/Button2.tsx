import { FC } from "react";

interface IButton1 {
    className?: string;
    text?: string;
    rounded?: boolean;
    onClick?: () => void;
}

const Button1: FC<IButton1> = ({ className="", text="", rounded=false, onClick=()=>{} }) => {
    return (
        <div onClick={onClick} className={`${className} h-10 p-2 ${ rounded ? "rounded-full" : "rounded-md" } flex justify-center items-center font-semibold text-md text-black bg-gray-400 hover:bg-gray-500 transition-all cursor-pointer active:ring-2 active:ring-black`}>{text}</div>
    )
}

export default Button1;