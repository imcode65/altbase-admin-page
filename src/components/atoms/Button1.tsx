import { FC } from "react";
import ConfirmAlert from "components/moleculars/ConfirmAlert";
import { confirm } from "react-confirm-box";

interface IButton1 {
    className?: string;
    text?: string;
    rounded?: boolean;
    onClick?: () => void;
    confirming?: boolean;
}

const Button1: FC<IButton1> = ({ className="", text="", rounded=false, onClick=()=>{}, confirming=false }) => {
    return (
        <div onClick={async () => {
            if (confirming) {
                const result = await confirm("Are you sure?", {
                    // @ts-ignore
                    render: (message, onConfirm, onCancel) => <ConfirmAlert onConfirm={onConfirm} onCancel={onCancel} />
                });
                if (result) {
                    onClick();
                }
            } else {
                onClick();
            }
        }} className={`${className} h-10 p-2 ${ rounded ? "rounded-full" : "rounded" } flex justify-center items-center font-sm text-base text-white bg-color-20 hover:bg-black transition-all cursor-pointer active:ring-0 active:ring-black py-1`}>{text}</div>
    )
}

export default Button1;