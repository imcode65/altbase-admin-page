import { FC } from 'react';
import IconRefresh from 'components/icons/IconRefresh';
import { IIcon } from 'components/icons/IIcon';

interface IIconButton {
    Icon?: FC<IIcon>;
}

const IconButton: FC<IIconButton> = ({ Icon=IconRefresh }) => {
    return (
        <button className='w-8 h-8 rounded border border-color-20 flex justify-center items-center hover:bg-color-20 hover:text-white transition'>
            <Icon />
        </button>
    )
}

export default IconButton;
