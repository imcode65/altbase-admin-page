import { FC } from "react";

interface ILabelComponent {
    className?: string;
    text?: string;
    title? : string;
}

const LabelComponent: FC<ILabelComponent> = ({ className="", text="", title="" }) => {
    return (
        <div className={`${ className } text-xl text-black mb-7`}>
            <div className="text-sm font-bold">
                <p> {title} </p>
            </div>
            <div className="text-sm break-all">
                <p> {text} </p>
            </div>
        </div>
    )
}

export default LabelComponent;