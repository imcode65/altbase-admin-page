import { FC } from "react";

interface ILabelComponent {
    className?: string;
    text?: string;
    title? : string;
}

const LabelComponent: FC<ILabelComponent> = ({ className="", text="", title="" }) => {
    return (
        <div className={`${ className } text-sm text-black mb-7 flex flex-wrap`}>
            <span className="font-bold"> {title} &nbsp; </span>
            <span className="break-all"> {text} </span>
        </div>
    )
}

export default LabelComponent;