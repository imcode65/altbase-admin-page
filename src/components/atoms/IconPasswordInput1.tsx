import { FC, useState } from "react";
import IconEye from "components/icons/IconEye";
import { IIcon } from "components/icons/IIcon";

interface IIconPasswordInput1 {
    Icon: FC<IIcon>;
    className?: string;
    text?: string;
    placeholder?: string;
    alertmsg?: string;
    onChangeHandler?: (x: string) => void;
}

const IconPasswordInput1: FC<IIconPasswordInput1> = ({ className="", text="", Icon, placeholder="", alertmsg="", onChangeHandler=()=>{} }) => {
    const [typeIsPWD, setTypeIsPWD] = useState<boolean>(true)
    return (
        <div className={`${ className } font-semibold text-xl text-black`}>
            <div className="flex items-center text-sm">
                <Icon className="mr-2 opacity-40" />
                <input value={text} onChange={e => onChangeHandler(e.target.value)} className="flex-grow flex-shrink border-none outline-none w-full" type={typeIsPWD ? "password" : "text"} placeholder={ placeholder } />
                <div onClick={() => setTypeIsPWD(val => !val)}>
                    <IconEye />
                </div>
            </div>
            { alertmsg === "" ? "" : <span className="text-red-500">{ alertmsg }</span> }
        </div>
    )
}

export default IconPasswordInput1;