import { FC } from "react";

interface ILabelInput1 {
    className?: string;
    label?: string;
    text?: string;
    type?: string;
    placeholder?: string;
    alertmsg?: string;
    disabled?: boolean;
    onChangeHandler?: (x: string) => void;
}

const LabelInput1: FC<ILabelInput1> = ({ className="", label="", text="", type="text", placeholder="", alertmsg="", disabled="", onChangeHandler=()=>{} }) => {
    return (
        <div className={`${ className } font-semibold text-xl text-black w-full`}>
            <div className="flex flex-col items-start text-sm">
                <label className="font-bold">{ label }</label>
                <input className={`border rounded outline-none p-2 w-full ${ disabled ? "bg-gray-300": "" }`} onChange={e => onChangeHandler(e.target.value)} type={ type } placeholder={ placeholder } value={ text } disabled={ disabled ? true: false}/>
            </div>
            { alertmsg === "" ? "" : <span className="text-red-500">{ alertmsg }</span> }
        </div>
    )
}

export default LabelInput1;