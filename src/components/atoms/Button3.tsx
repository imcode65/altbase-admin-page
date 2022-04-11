import { FC } from "react";
import ConfirmAlert from "components/moleculars/ConfirmAlert";
import { confirm } from "react-confirm-box";

interface IButton3 {
    className?: string;
    text?: string;
    rounded?: boolean;
    onClick?: () => void;
    confirming?: boolean;
}

const Button3: FC<IButton3> = ({ className="", text="", rounded=false, onClick=()=>{}, confirming=false }) => {
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
        }} className={`${className} h-10 px-2 ${ rounded ? "rounded-full" : "rounded-md" } flex justify-center items-center font-semibold text-md text-color-20 hover:text-white bg-white hover:bg-color-20 transition-all cursor-pointer border border-color-20`}>{text}</div>
    )
}

export default Button3;