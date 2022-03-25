import { useState, FC } from "react";
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
                        render: (message, onConfirm, onCancel) => <div className='bg-white rounded-3xl p-2 w-80'>
                            <h3 className='text-green-500 pt-1 pb-2 w-full text-center border-b-2 border-color-13'>Are you sure?</h3>
                            <p className='w-full flex justify-center py-4'>Want to deactive the content</p>
                            <div className='w-full grid grid-cols-2 gap-4'>
                                <button className='rounded-full bg-green-500 text-white font-bold py-2' onClick={onConfirm}>Yes</button>
                                <button className='rounded-full bg-color-13 text-white font-bold py-2' onClick={onCancel}>No</button>
                            </div>
                        </div>
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