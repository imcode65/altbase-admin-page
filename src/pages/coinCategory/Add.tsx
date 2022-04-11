import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LabelInput1 from 'components/atoms/LabelInput1';
import Button2 from 'components/atoms/Button2';
import Button1 from 'components/atoms/Button1';
import toast from 'react-hot-toast';

const Add = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState<string>("");

    const onBack = () => {
        navigate(-1);
    }
    
    const saveHandler = () => {
        toast.success('Successfully toasted!')
    }

    return (
        <div className="p-4 bg-white">
            <LabelInput1 label="Title *" onChangeHandler={setTitle} text={title} placeholder="Featured Coin"></LabelInput1>
            <div className='w-full flex justify-center mt-8 col-span-3'>
                <Button1 className='w-32 mr-2' text='Save' confirming onClick={saveHandler} />
                <Button2 className='w-32' text='Back' onClick={onBack}/>
            </div>
        </div>
    )
}

export default Add;