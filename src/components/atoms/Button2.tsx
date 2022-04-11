import { FC } from "react";
import ConfirmAlert from "components/moleculars/ConfirmAlert";
import { confirm } from "react-confirm-box";

interface IButton2 {
    className?: string;
    text?: string;
    rounded?: boolean;
    onClick?: () => void;
    confirming?: boolean;
}

const Button2: FC<IButton2> = ({ className="", text="", rounded=false, onClick=()=>{}, confirming=false }) => {
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
        }} className={`${className} h-10 p-2 ${ rounded ? "rounded-full" : "rounded-md" } flex justify-center items-center font-semibold text-md text-black bg-gray-400 hover:bg-gray-500 transition-all cursor-pointer active:ring-2 active:ring-black`}>{text}</div>
    )
}

export default Button2;