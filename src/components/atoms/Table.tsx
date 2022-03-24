import IconEdit from 'components/icons/IconEdit';
import IconEye from 'components/icons/IconEye';
import { FC } from 'react';
import SwitchButton from 'components/atoms/SwitchButton';
import { confirm } from "react-confirm-box";

interface IField {
    text?: string;
    code: string;
}
export interface ITable {
    fields?: IField[];
    datas?: any[];
}

const Table: FC<ITable> = ({ fields=[], datas=[] }) => {
    return (
        <table className='w-full mx-2 border-2 border-x-color-13'>
            <tbody>
                <tr className='bg-color-14'>
                { fields.map((field, id) => <td className={`${ id === 0 ? "pl-2" : "" } ${ id === fields.length ? "pr-2" : "" } py-4`} key={id}>{ field.text || "" }</td>) }
                </tr>
                { datas.map((data, id) => <tr className='w-full px-2 py-4 hover:bg-color-13' key={id}>
                    { fields.map((field, iid) => <td className={`${ iid === 0 ? "pl-2" : "" } ${ iid === fields.length ? "pr-2" : "" } py-2 border-t border-color-13`} key={id * 100 + iid}>
                        { field.code === 'action' ? (
                            <div className='flex'>
                            { data.action.edit ? (
                                <IconEdit clickHandler={data.action.editHandler} className='mr-4 opacity-40 cursor-pointer' />
                            ) : "" }
                            { data.action.view ? (
                                <IconEye clickHandler={data.action.viewHandler} className='opacity-40 cursor-pointer' />
                            ) : "" }
                            </div>
                        ) : (
                            field.code === 'status' ? (
                                <SwitchButton onChangeHandler={async (x: boolean) => {
                                    const result = await confirm("Are you sure?", {
                                        // @ts-ignore
                                        render: (message, onConfirm, onCancel) => <div className='bg-white rounded-3xl p-2 w-80'>
                                            <h3 className='text-green-500 pt-1 pb-2 w-full text-center border-b-2 border-color-13'>Are you sure?</h3>
                                            <p className='w-full flex justify-center py-4'>Want to deactive the content</p>
                                            <div className='w-full grid grid-cols-2 gap-4'>
                                                <button className='rounded-full bg-green-500 text-white font-bold py-2' onClick={onConfirm}>Yes</button>
                                                <button className='rounded-full bg-color-13 text-white font-bold py-2' onClick={onCancel}>No</button>
                                            </div>
                                        </div>
                                    });
                                    if (result) {
                                        return data.status.changeHandler(x)
                                    } else {
                                        return !x;
                                    }
                                }} />
                            ) : data[field.code] || "") }
                    </td>) }
                </tr>) }
            </tbody>
        </table>
    )
}

export default Table;