import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LabelInput1 from 'components/atoms/LabelInput1';
import Button2 from 'components/atoms/Button2';
import Button1 from 'components/atoms/Button1';
import { prefix } from "constants/menuInfo";

const Add = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confirmPassword, setConfirmPassword] = useState<string>("");

    const onBack = () => {
        navigate(`${ prefix }/users/manage`);
    }
    
    return (
        <div className="p-4 bg-white">
            <div className="grid grid-cols-2 gap-4">
                <LabelInput1 label="Email  *" onChangeHandler={setEmail} text={email} placeholder="Enter the users email"></LabelInput1>
                <LabelInput1 label="Password  *" onChangeHandler={setPassword} text={password} placeholder="Enter the users password"></LabelInput1>
                <LabelInput1 label="Confirm Password  *" onChangeHandler={setConfirmPassword} text={confirmPassword} placeholder="Enter the users confirmPassword"></LabelInput1>
            </div>
            <div className='w-full flex justify-center mt-8 col-span-3'>
                <Button1 className='w-32 mr-2' text='Save'/>
                <Button2 className='w-32' text='Back' onClick={() => onBack()}/>
            </div>
        </div>
    )
}

export default Add;