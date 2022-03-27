import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from 'components/atoms/IconButton';
import Paginator from 'components/atoms/Paginator';
import Select1 from 'components/atoms/Select1';
import Table, { IField } from 'components/atoms/Table';
import IconRefresh from 'components/icons/IconRefresh';
import Button3 from 'components/atoms/Button3';

interface IAdditionalBtn {
    text?: string;
    clickHandler: () => void;
}
interface IDataTable {
    datas?: any[];
    fields?: IField[];
    currentPage?: number;
    changeCurrentPageHandler?: (x: number) => void;
    totalPage?: number;
    totalCounts?: number;
    refreshHandler?: () => void;
    additionalBtns?: IAdditionalBtn[];
}
const DataTable: FC<IDataTable> = ({ fields=[], datas=[], currentPage=1, changeCurrentPageHandler=()=>{}, totalPage=1, totalCounts=1, refreshHandler=()=>{}, additionalBtns=[] }) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState<boolean>(false);
    const [cntPerPage, setCntPerPage] = useState<number>(5);
    const totalPages = 1;
    const paginatorHandler = (x: number) => {
        if (1 <= x && x <= totalPages) {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
                changeCurrentPageHandler(x);
            }, 200);
        }
    }
    return (
        <div className='bg-white relative'>
            { loading ? <div className='absolute w-full h-full flex justify-center items-center bg-gray-300 z-40'>
                Loading
            </div> : '' }
            <div className='p-4 flex justify-between'>
                <Select1 label='Item per page' value={cntPerPage} onChangeHandler={val => setCntPerPage(typeof val === "string" ? parseInt(val) : val)} list={[5, 10, 15, 50, 100]} />
                <div className='flex gap-2'>
                    { additionalBtns.map((addBtn, id) => (
                        <Button3 text={addBtn.text || ""} onClick={addBtn.clickHandler} />
                    ))}
                    <IconButton Icon={IconRefresh} onClick={refreshHandler} />
                </div>
            </div>
            <div className='w-full px-2 overflow-hidden'>
                <div className='overflow-auto'>
                    <Table fields={fields} datas={datas} />
                </div>
            </div>
            <div className='flex justify-between items-center p-4'>
                <p>Showing {(currentPage - 1) * cntPerPage + 1} to {Math.min(totalCounts, currentPage * cntPerPage)} of {totalCounts} record{ totalCounts > 1 ? "s" : "" }</p>
                <Paginator totalPages={totalPages} currentPage={currentPage} btnClickHandler={paginatorHandler} />
            </div>
        </div>
    )
}

export default DataTable;