import { FC } from "react";
import { IIcon } from "components/icons/IIcon";

interface IIconInput1 {
    Icon: FC<IIcon>;
    className?: string;
    text?: string;
    type?: string;
    placeholder?: string;
    alertmsg?: string;
    onChangeHandler?: (x: string) => void;
}

const IconInput1: FC<IIconInput1> = ({ className="", text="", Icon, type="text", placeholder="", alertmsg="", onChangeHandler=()=>{} }) => {
    return (
        <div className={`${ className } font-semibold text-xl text-black`}>
            <div className="flex items-center text-sm">
                <Icon className="mr-2 opacity-40" />
                <input value={text} onChange={e => onChangeHandler(e.target.value)} className="border-none outline-none w-full" type={ type } placeholder={ placeholder } />
            </div>
            { alertmsg === "" ? "" : <span className="text-red-500">{ alertmsg }</span> }
        </div>
    )
}

export default IconInput1;