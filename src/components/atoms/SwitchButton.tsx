import { useState, FC } from "react";
import ConfirmAlert from "components/moleculars/ConfirmAlert";
import { confirm } from "react-confirm-box";

interface ISwitchButton {
    onChangeHandler?: (x: boolean) => {};
    confirming?: boolean;
}
const SwitchButton: FC<ISwitchButton> = ({ onChangeHandler=()=>{}, confirming=false }) => {
    const [toggle, setToggle] = useState(true);
    return (
        <div
            className="w-12 h-4 my-2 flex items-center bg-gray-400 rounded-full cursor-pointer"
            onClick={async () => {
                if (confirming) {
                    const result = await confirm("Are you sure?", {
                        // @ts-ignore
                        render: (message, onConfirm, onCancel) => <ConfirmAlert onConfirm={onConfirm} onCancel={onCancel} />
                    });
                    if (result) {
                        let res = await onChangeHandler(!toggle);
                        if (typeof res === "boolean") {
                            setToggle(res);
                        }
                    }
                } else {
                    let res = await onChangeHandler(!toggle);
                    if (typeof res === "boolean") {
                        setToggle(res);
                    }
                }
            }}
        >
            <div className={`h-6 w-6 rounded-full shadow-md duration-300 ease-in-out transform ${toggle ? "bg-white" : "bg-color-10 translate-x-6"}`} />
        </div>
    )
}

export default SwitchButton;