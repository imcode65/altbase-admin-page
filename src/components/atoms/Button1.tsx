import { FC } from "react";

interface IButton1 {
    className?: string;
    text?: string;
    rounded?: boolean;
    onClick?: () => void;
}

const Button1: FC<IButton1> = ({ className="", text="", rounded=false, onClick=()=>{} }) => {
    return (
        <div onClick={onClick} className={`${className} p-2 ${ rounded ? "rounded-full" : "rounded-md" } flex justify-center items-center font-semibold text-md text-white bg-color-20 hover:bg-black transition-all cursor-pointer`}>{text}</div>
    )
}

export default Button1;