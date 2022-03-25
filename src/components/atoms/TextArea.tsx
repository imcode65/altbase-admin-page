import { FC } from "react";

interface ITextArea {
    className?: string;
    label?: string;
    text?: string;
    type?: string;
    placeholder?: string;
    alertmsg?: string;
    onChangeHandler?: (x: string) => void;
}

const TextArea: FC<ITextArea> = ({ className="", label="", text="", placeholder="", alertmsg="", onChangeHandler=()=>{} }) => {
    return (
        <div className={`${ className } font-semibold text-xl text-black w-full`}>
            <div className="flex flex-col items-start text-sm">
                <label className="font-bold">{ label }</label>
                <textarea className="border rounded outline-none p-2 w-full h-48" onChange={e => onChangeHandler(e.target.value)} placeholder={ placeholder } value={text}/>
            </div>
            { alertmsg === "" ? "" : <span className="text-red-500">{ alertmsg }</span> }
        </div>
    )
}

export default TextArea;