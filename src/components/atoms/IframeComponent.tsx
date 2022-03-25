import { FC } from "react";

interface IIframeComponent {
    className?: string;
    src?: string;
    title? : string;
    topText? : string;
}

const IframeComponent: FC<IIframeComponent> = ({ className="", src="", title="", topText="" }) => {
    return (
        <div className={`${ className } mb-7`}>
            <p className="font-bold text-sm text-black mb-4">{ topText }</p>
            <iframe src={src} title={title}></iframe>
        </div>
    )
}

export default IframeComponent;