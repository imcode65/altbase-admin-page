import { FC } from 'react';

interface IInput1 {
    placeholder?: string;
    value?: string;
    onChangeHandler?: (x: string) => void;
}

const Input1: FC<IInput1> = ({ placeholder="", value="", onChangeHandler=()=>{} }) => {
    return <input 
        value={value}
        onChange={e => onChangeHandler(e.target.value)}
        className="rounded border border-color-13 px-3 py-1 outline-none focus:border-color-15 text-sm"
        type="text"
        placeholder={ placeholder }
    />
}

export default Input1;