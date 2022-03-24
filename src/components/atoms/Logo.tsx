import { FC } from "react";

interface ILogo {
    className?: string;
}

const Logo: FC<ILogo> = ({ className="" }) => {
    return (
        <div className={`${className}`} style={{
            background: "linear-gradient(to right, #DF8136 0%, #EB2061 50%, #AE30CF 100%)",
            backgroundClip: "text",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontSize: "24px",
            fontWeight: "900",
        }}>100xAltbase</div>
    )
}

export default Logo;