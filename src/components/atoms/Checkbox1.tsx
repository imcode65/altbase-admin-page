import { FC } from "react";
import { v4 as uuidv4 } from 'uuid';

interface ICheckbox1 {
    id?: string;
    className?: string;
    text?: string;
}

const Checkbox1: FC<ICheckbox1> = ({ id=uuidv4(), className="", text="" }) => {
    return (
        <div className={`${className} font-semibold text-xl text-black flex items-center`}>
            <input className="form-check-input h-6 w-6 mr-1 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 my-1 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer text-white" id={id} type="checkbox" />
            <label htmlFor={id}>{ text }</label>
        </div>
    )
}

export default Checkbox1;