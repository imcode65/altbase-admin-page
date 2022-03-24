import { FC } from "react";

interface ITitle {
    className?: string;
    text?: string;
}

const Title: FC<ITitle> = ({ className="", text="" }) => {
    return (
        <div className={`${className} font-semibold text-2xl text-black`}>{text}</div>
    )
}

export default Title;