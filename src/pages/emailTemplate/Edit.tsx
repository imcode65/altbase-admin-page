import { useNavigate } from "react-router";
import LabelInput1 from 'components/atoms/LabelInput1';
import Button1 from 'components/atoms/Button1';
import Button2 from 'components/atoms/Button2';
import EditorComponent from 'components/atoms/EditorComponent';
import toast from 'react-hot-toast';
import { useState } from "react";

const Edit = () => {
    const navigate = useNavigate();
    const [templateFrom, setTemplateFrom] = useState<string>("<%=closing_text%>");
    const [templateSubject, setTemplateSubject] = useState<string>("Altbase Feedback Request");
    const [templateEmail, setTemplateEmail] = useState<string>("info@altbase.com");

    const goBack = () => {
        navigate(-1);
    }

    const saveHandler = () => {
        toast.success('Successfully toasted!')
    }

    return (
        <div className="p-4 bg-white mt-8">
            <div className="grid md:grid-cols-2 gap-4">
                <LabelInput1 className="mt-2 md:mt-6" label="Template Name *" placeholder="" text="Thank you Email" disabled={true}></LabelInput1>
                <LabelInput1 className="mt-2 md:mt-6" label="Template Slug *" placeholder="" text="feedback_received" disabled={true}></LabelInput1>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
                <LabelInput1 text={templateFrom} onChangeHandler={setTemplateFrom} className="mt-2 md:mt-6" label="Template From *" placeholder=""></LabelInput1>
                <LabelInput1 text={templateSubject} onChangeHandler={setTemplateSubject} className="mt-2 md:mt-6" label="Template Subject *" placeholder=""></LabelInput1>
                <LabelInput1 text={templateEmail} onChangeHandler={setTemplateEmail} className="mt-2 md:mt-6" label="Template From Email *" placeholder=""></LabelInput1>
            </div>
            <EditorComponent label="Template HTML *"></EditorComponent>
            <div className="grid grid-cols-2 gap-4">
                <LabelInput1 className="" label="Template Variable" placeholder="" text="<%=closing_text%>" disabled={true}></LabelInput1>
            </div>
            <div className='w-full flex justify-center mt-8'>
                <Button1 className='w-32 mr-2' text='Save' confirming onClick={saveHandler} />
                <Button2 className='w-32 ' text='Back' onClick={goBack} />
            </div>
        </div>
    )
}

export default Edit;
