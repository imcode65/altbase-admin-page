import { FC } from "react";

interface ILabelInput1 {
    className?: string;
    label?: string;
    text?: string;
    type?: string;
    placeholder?: string;
    alertmsg?: string;
}

const LabelInput1: FC<ILabelInput1> = ({ className="", label="", text="", type="text", placeholder="", alertmsg="" }) => {
    return (
        <div className={`${ className } font-semibold text-xl text-black w-full`}>
            <div className="flex flex-col items-start text-sm">
                <label>{ label }</label>
                <input className="border rounded outline-none p-2 w-full" type={ type } placeholder={ placeholder } />
            </div>
            { alertmsg === "" ? "" : <span className="text-red-500">{ alertmsg }</span> }
        </div>
    )
}

export default LabelInput1;