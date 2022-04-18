import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LabelInput1 from 'components/atoms/LabelInput1';
import Button2 from 'components/atoms/Button2';
import Button1 from 'components/atoms/Button1';
import toast from 'react-hot-toast';
import altbaseService from "services/altbaseService";

const Add = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirm_password, setConfirm_password] = useState<string>("");

    const onBack = () => {
        navigate(-1);
    }

    const addHandler = async () => {
        let { status, content, message } = await altbaseService.addUser({
            name: "Random name",
            email,
            password,
            confirm_password
        })
        if (status === "success") {
            toast.success(message);
        } else {
            toast.error(message);
        }
    }
    
    return (
        <div className="p-4 bg-white">
            <div className="grid grid-cols-2 gap-4">
                <LabelInput1 label="Email  *" onChangeHandler={setEmail} text={email} placeholder="Enter the users email"></LabelInput1>
                <LabelInput1 label="Password  *" onChangeHandler={setPassword} text={password} placeholder="Enter the users password"></LabelInput1>
                <LabelInput1 label="Confirm Password  *" onChangeHandler={setConfirm_password} text={confirm_password} placeholder="Enter the users confirm_password"></LabelInput1>
            </div>
            <div className='w-full flex justify-center mt-8 col-span-3'>
                <Button1 className='w-32 mr-2' text='Save' confirming onClick={addHandler} />
                <Button2 className='w-32' text='Back' onClick={onBack}/>
            </div>
        </div>
    )
}

export default Add;