import { FC } from "react";

interface IGradientText {
    className?: string;
    text?: string;
}

const GradientText: FC<IGradientText> = ({ className="", text="" }) => {
    return (
        <div className={`${className}`} style={{
            background: "linear-gradient(to right, #DF8136 0%, #EB2061 50%, #AE30CF 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontWeight: "900",
        }}>{ text }</div>
    )
}

export default GradientText;