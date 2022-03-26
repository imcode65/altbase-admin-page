import { FC } from "react";

interface ILabelComponent {
    className?: string;
    text?: string;
    bage_class?: string;
    bage_text?: string;
    title? : string;
}

const LabelComponent: FC<ILabelComponent> = ({ className="", text="", title="", bage_class="", bage_text="" }) => {
    return (
        <div className={`${ className } text-xl text-black mb-7`}>
            <div className="text-sm font-bold">
                <p> {title} </p>
            </div>
            <div className="text-sm break-all flex flex-wrap">
                {
                    bage_text ? <span className={`${bage_class} font-bold px-2 rounded-full text-xs text-white`}> { bage_text }</span> : ""
                }
                <span>{text}</span>
            </div>
        </div>
    )
}

export default LabelComponent;