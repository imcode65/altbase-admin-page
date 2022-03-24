import { FC } from 'react';

interface IInput1 {
    placeholder?: string;
}

const Input1: FC<IInput1> = ({ placeholder="" }) => {
    return <input className="rounded border border-color-13 px-3 py-1 outline-none" type="text" placeholder={ placeholder } />
}

export default Input1;