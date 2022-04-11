import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LabelInput1 from 'components/atoms/LabelInput1';
import Button2 from 'components/atoms/Button2';
import Button1 from 'components/atoms/Button1';
import Select3 from 'components/atoms/Select3';
import toast from 'react-hot-toast';

const Add = () => {
    const navigate = useNavigate();
    const [contactAddress, setContactAddress] = useState<string>("");
    const [pancake, setPancake] = useState<string>("");

    const onBack = () => {
        navigate(-1);
    }

    const saveHandler = () => {
        toast.success('Successfully toasted!')
    }
    
    return (
        <div className="p-4 bg-white">
            <div className="grid grid-cols-2 gap-4">
                <LabelInput1 label="Contact Address  *" onChangeHandler={setContactAddress} text={contactAddress} placeholder="Enter the contact address"></LabelInput1>
                <Select3 label="Pancake Router Address Version *" list={["Select Pancake Router Address Version", "Router Address V1", "Router Address V2"]}></Select3>
            </div>
            <div className='w-full flex justify-center mt-8 col-span-3'>
                <Button1 className='w-32 mr-2' text='Save' confirming onClick={saveHandler} />
                <Button2 className='w-32' text='Back' onClick={onBack}/>
            </div>
        </div>
    )
}

export default Add;