import { FC } from 'react';

interface IConfirmAlert {
    onConfirm?: (x: any) => void;
    onCancel?: (x: any) => void;
}

const ConfirmAlert: FC<IConfirmAlert> = ({
    onConfirm=()=>{},
    onCancel=()=>{},
}) => {
    return (
        <div className='bg-white rounded-3xl p-2 w-80 fixed left-1/2 transform -translate-x-1/2'>
            <h3 className='text-green-500 pt-1 pb-2 w-full text-center border-b-2 border-color-13'>Are you sure?</h3>
            <p className='w-full flex justify-center py-4'>Want to deactive the content</p>
            <div className='w-full grid grid-cols-2 gap-4'>
                <button className='rounded-full bg-green-500 text-white font-bold py-2' onClick={onConfirm}>Yes</button>
                <button className='rounded-full bg-color-13 text-white font-bold py-2' onClick={onCancel}>No</button>
            </div>
        </div>
    )
}

export default ConfirmAlert;