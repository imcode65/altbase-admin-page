import { useLocation } from "react-router";
import { useState } from 'react';
import LabelInput1 from 'components/atoms/LabelInput1';
import TextArea from 'components/atoms/TextArea';
import Button1 from 'components/atoms/Button1';
import Button2 from 'components/atoms/Button2';
import SwitchButton from 'components/atoms/SwitchButton';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const Edit = () => {
    const navigate = useNavigate();
    const text = "This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of Your information when You use the Service and tells You about Your privacy rights and how the law protects You.";
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
        <div className="p-4 bg-white mt-8">
            <div className="mb-16">
                <LabelInput1 className="mt-6" label="Title *" placeholder="Enter the title" text="Privacy Policy"></LabelInput1>
                <TextArea className="mt-6" label="Content *" placeholder="Enter your description" text={text}></TextArea>
            </div>
            <SwitchButton onChangeHandler={onChangeStatus}/>
            <div className='w-full flex justify-center mt-8'>
                <Button1 className='w-32 mr-2' text='Save' confirming onClick={saveHandler} />
                <Button2 className='w-32 ' text='Back' onClick={onBack}/>
            </div>
        </div>
    )
}

export default Edit;
