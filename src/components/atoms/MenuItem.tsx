import { FC } from 'react';
import { IIcon } from "components/icons/IIcon";
import { Link } from 'react-router-dom';

interface IMenuItem {
    text?: string;
    Icon?: FC<IIcon>;
    active?: boolean;
    to?: string;
}

const MenuItem: FC<IMenuItem> = ({ text="", Icon="", active=false, to="" }) => {
    return (
        <Link to={to}>
            <li className={`flex items-center opacity-80 hover:placeholder-opacity-100 text-white py-4 px-6 hover:bg-white hover:bg-opacity-10 mb-1 ${active ? "bg-white bg-opacity-10" : ""}`}>
                <Icon className='mr-2' dark={false} />
                <span>{ text }</span>
            </li>
        </Link>
    )
}

export default MenuItem;
