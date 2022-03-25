import { FC } from "react";

interface ITextArea {
    className?: string;
    label?: string;
    text?: string;
    type?: string;
    placeholder?: string;
    alertmsg?: string;
}

const TextArea: FC<ITextArea> = ({ className="", label="", text="", placeholder="", alertmsg="" }) => {
    return (
        <div className={`${ className } font-semibold text-xl text-black w-full`}>
            <div className="flex flex-col items-start text-sm">
                <label>{ label }</label>
                <textarea className="border rounded outline-none p-2 w-full h-48" placeholder={ placeholder } />
            </div>
            { alertmsg === "" ? "" : <span className="text-red-500">{ alertmsg }</span> }
        </div>
    )
}

export default TextArea;