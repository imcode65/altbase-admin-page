import { FC, useState } from 'react';
import IconButton from 'components/atoms/IconButton';
import Paginator from 'components/atoms/Paginator';
import Select1 from 'components/atoms/Select1';
import Table, { IField } from 'components/atoms/Table';

interface IDataTable {
    datas?: any[];
    fields?: IField[];
}
const DataTable: FC<IDataTable> = ({ fields=[], datas=[] }) => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [loading, setLoading] = useState<boolean>(false);
    const totalPages = 1;
    const paginatorHandler = (x: number) => {
        if (1 <= x && x <= totalPages) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                setCurrentPage(x);
            }, 1000);
        }
    }
    return (
        <div className='bg-white relative'>
            { loading ? <div className='absolute w-full h-full flex justify-center items-center bg-gray-300 z-40'>
                Loading
            </div> : '' }
            <div className='p-4 flex justify-between'>
                <Select1 label='Item per page' list={[5, 10, 15, 50, 100]} />
                <IconButton />
            </div>
            <div className='w-full px-2 overflow-hidden'>
                <div className='overflow-auto'>
                    <Table fields={fields} datas={datas} />
                </div>
            </div>
            <div className='flex justify-between items-center p-4'>
                <p>Showing 1 to 9 record</p>
                <Paginator totalPages={totalPages} currentPage={currentPage} btnClickHandler={paginatorHandler} />
            </div>
        </div>
    )
}

export default DataTable;