import IconRight from 'components/icons/IconRight';
import { FC } from 'react';

interface IBoardCard {
    className?: string;
    infoNumber?: number;
    infoText?: string;
}

const BoardCard: FC<IBoardCard> = ({ className="", infoNumber=0, infoText="" }) => {
    return (<div className={`rounded flex flex-col text-white ${ className }`}>
        <div className="h-24 p-2 flex flex-col">
            <div className='text-4xl'>{ infoNumber }</div>
            <div>{ infoText }</div>
        </div>
        <div className="h-8 flex justify-center items-center bg-black bg-opacity-10 cursor-pointer">
            <span className='mr-1'>More Info</span>
            <IconRight dark={false} />
        </div>
    </div>)
}

export default BoardCard;