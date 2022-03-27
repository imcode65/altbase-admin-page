import { FC } from "react";

interface IButton3 {
    className?: string;
    text?: string;
    rounded?: boolean;
    onClick?: () => void;
}

const Button3: FC<IButton3> = ({ className="", text="", rounded=false, onClick=()=>{} }) => {
    return (
        <div onClick={onClick} className={`${className} h-10 px-2 ${ rounded ? "rounded-full" : "rounded-md" } flex justify-center items-center font-semibold text-md text-color-20 hover:text-white bg-white hover:bg-color-20 transition-all cursor-pointer border border-color-20`}>{text}</div>
    )
}

export default Button3;