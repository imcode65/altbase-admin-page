import { FC } from 'react';
import IconRefresh from 'components/icons/IconRefresh';
import { IIcon } from 'components/icons/IIcon';

interface IIconButton {
    Icon?: FC<IIcon>;
    className?: string;
    onAddLinks?: () => void;
}

const IconButton: FC<IIconButton> = ({ Icon=IconRefresh, className="", onAddLinks = () => {} }) => {
    return (
        <button onClick={onAddLinks} className={`w-8 h-8 rounded border border-color-20 flex justify-center items-center hover:bg-color-20 hover:text-white transition ${className}`}>
            <Icon />
        </button>
    )
}

export default IconButton;
