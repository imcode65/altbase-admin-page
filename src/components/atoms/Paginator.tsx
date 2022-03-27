import { FC } from 'react';
import IconDoubleLeft from 'components/icons/IconDoubleLeft';
import IconDoubleRight from 'components/icons/IconDoubleRight';

interface IPaginator {
    totalPages?: number;
    currentPage?: number;
    btnClickHandler?: (x: number) => void;
}

const Paginator: FC<IPaginator> = ({ totalPages=1, currentPage=1, btnClickHandler=()=>{} }) => {
    const pages = (new Array(totalPages)).fill(true).map((x,id) => id+1);
    return (<div className='cursor-pointer flex'>
        <button onClick={() => btnClickHandler(1)} className='w-8 h-8 border rounded-l-md flex items-center justify-center opacity-40'>
            <IconDoubleLeft className='w-3 h-3' />
            <IconDoubleLeft className='w-3 h-3' />
        </button>
        <button onClick={() => btnClickHandler(currentPage - 1)} className='w-8 h-8 border-t border-b border-r flex items-center justify-center opacity-40'>
            <IconDoubleLeft className='w-3 h-3' />
        </button>
        { pages.map((page,id) => 
            ((currentPage - 3 < page && page < currentPage + 3) || (currentPage < 3 && page < 6) || (totalPages - 2 < currentPage && totalPages - 5 < page ) ?
            <button onClick={e => btnClickHandler(page)} className={`w-8 h-8 flex justify-center items-center border-t border-b ${ currentPage === page ? "bg-black text-white" : "bg-white text-black" }`} key={page}>{ page }</button>
            : "")
        ) }
        <button onClick={() => btnClickHandler(currentPage + 1)} className='w-8 h-8 border-t border-b border-r flex items-center justify-center opacity-40'>
            <IconDoubleRight className='w-3 h-3' />
        </button>
        <button onClick={() => btnClickHandler(totalPages)} className='w-8 h-8 border rounded-l-md flex items-center justify-center opacity-40'>
            <IconDoubleRight className='w-3 h-3' />
            <IconDoubleRight className='w-3 h-3' />
        </button>
    </div>)
}

export default Paginator;