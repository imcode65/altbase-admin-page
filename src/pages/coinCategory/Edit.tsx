import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LabelInput1 from 'components/atoms/LabelInput1';
import Button2 from 'components/atoms/Button2';
import Button1 from 'components/atoms/Button1';
import SwitchButton from 'components/atoms/SwitchButton';
import toast from 'react-hot-toast';

const Edit = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState<string>("");    
    const [status, setStatus] = useState<boolean>(true);

    const onChangeStatus = (newStatus: boolean) => {
        setStatus(newStatus);
        return newStatus;
    }

    const onBack = () => {
        navigate(-1);
    }
    
    const saveHandler = () => {
        toast.success('Successfully toasted!')
    }
    
    return (
        <div className="p-4 bg-white">
            <LabelInput1 label="Title *" onChangeHandler={setTitle} text={title} placeholder="Featured Coin"></LabelInput1>
            <div className="mt-4">
                <span className="font-bold text-sm">Status</span>
                <SwitchButton onChangeHandler={onChangeStatus}/>
            </div>
            <div className='w-full flex justify-center mt-8 col-span-3'>
                <Button1 className='w-32 mr-2' text='Save' confirming onClick={saveHandler} />
                <Button2 className='w-32' text='Back' onClick={onBack}/>
            </div>
        </div>
    )
}

export default Edit;