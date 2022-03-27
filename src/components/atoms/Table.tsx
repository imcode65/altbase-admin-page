import IconEdit from 'components/icons/IconEdit';
import IconEye from 'components/icons/IconEye';
import { FC } from 'react';

export interface IField {
    text?: string;
    code: string;
}
export interface ITable {
    fields?: IField[];
    datas?: any[];
}

const Table: FC<ITable> = ({ fields=[], datas=[] }) => {
    return (
        <table className='w-full border-2 border-x-color-13 min-w-[768px]'>
            <tbody className='text-color-20'>
                <tr className='bg-color-14 font-bold'>
                { fields.map((field, id) => <td className={`${ id === 0 ? "pl-2" : "" } ${ id === fields.length ? "pr-2" : "" } py-4`} key={id}>{ field.text || "" }</td>) }
                </tr>
                { datas.map((data, id) => <tr className='w-full px-2 py-4 hover:bg-color-13' key={id}>
                    { fields.map((field, iid) => <td className={`${ iid === 0 ? "pl-2" : "" } ${ iid === fields.length ? "pr-2" : "" } py-2 border-t border-color-13`} key={id * 100 + iid}>
                        { field.code === 'action' ? (
                            <div className='flex'>
                            { data.action.edit ? (
                                <IconEdit clickHandler={() => data.action.editHandler(data.sr_no)} className='mr-4 opacity-40 cursor-pointer' />
                            ) : "" }
                            { data.action.view ? (
                                <IconEye clickHandler={() => data.action.viewHandler(data.sr_no)} className='opacity-40 cursor-pointer' />
                            ) : "" }
                            </div>
                        ) : data[field.code] || "" }
                    </td>) }
                </tr>) }
            </tbody>
        </table>
    )
}

export default Table;