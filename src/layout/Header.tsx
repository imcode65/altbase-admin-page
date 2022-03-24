import { FC } from 'react';
import IconBars from 'components/icons/IconBars';
import IconPower from 'components/icons/IconPower';

interface IHeader {
    onClick?: () => void;
}
const Header: FC<IHeader> = ({ onClick=()=>{} }) => {
    return (
        <div className={`h-14 border-b border-color-13 flex justify-between items-center px-4`}>
            <div onClick={onClick} className='cursor-pointer opacity-70 hover:opacity-100'>
                <IconBars />
            </div>
            <div className='cursor-pointer opacity-70 hover:opacity-100'>
                <IconPower />
            </div>
        </div>
    )
}

export default Header;