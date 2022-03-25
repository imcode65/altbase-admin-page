import { useLocation } from "react-router";
import LabelInput1 from 'components/atoms/LabelInput1';
import Button1 from 'components/atoms/Button1';
import Button2 from 'components/atoms/Button2';
import EditorComponent from 'components/atoms/EditorComponent';

const Edit = () => {
    return (
        <div className="p-4 bg-white mt-8">
            <div className="grid grid-cols-2 gap-4">
                <LabelInput1 className="mt-6" label="Template Name *" placeholder="" text="Thank you Email" disabled={true}></LabelInput1>
                <LabelInput1 className="mt-6" label="Template Slug *" placeholder="" text="feedback_received" disabled={true}></LabelInput1>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-8">
                <LabelInput1 className="mt-6" label="Template From *" placeholder="" text="<%=closing_text%>"></LabelInput1>
                <LabelInput1 className="mt-6" label="Template Subject *" placeholder="" text="Altbase Feedback Request"></LabelInput1>
                <LabelInput1 className="mt-6" label="Template From Email *" placeholder="" text="info@altbase.com"></LabelInput1>
            </div>
            <EditorComponent label="Template HTML *"></EditorComponent>
            <div className="grid grid-cols-2 gap-4 mt-20">
                <LabelInput1 className="" label="Template Variable" placeholder="" text="<%=closing_text%>" disabled={true}></LabelInput1>
            </div>
            <div className='w-full flex justify-center mt-8'>
                <Button1 className='w-32 mr-2' text='Save' />
                <Button2 className='w-32 ' text='Back' />
            </div>
        </div>
    )
}

export default Edit;
