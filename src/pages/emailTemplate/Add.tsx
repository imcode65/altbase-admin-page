import { useNavigate, useParams } from "react-router";
import LabelInput1 from 'components/atoms/LabelInput1';
import Button1 from 'components/atoms/Button1';
import Button2 from 'components/atoms/Button2';
import EditorComponent from 'components/atoms/EditorComponent';
import toast from 'react-hot-toast';
import { useState } from "react";
import altbaseService from "services/altbaseService";

const Add = () => {
    const navigate = useNavigate();
    const [template_name, setTemplate_name] = useState<string>("");
    const [template_slug, setTemplate_slug] = useState<string>("");
    const [template_from, setTemplate_from] = useState<string>("");
    const [template_subject, setTemplate_subject] = useState<string>("");
    const [template_from_mail, setTemplate_from_mail] = useState<string>("");
    const [template_html, setTemplate_html] = useState<string>();
    const [template_variables, setTemplate_variables] = useState<string>();

    const goBack = () => {
        navigate(-1);
    }

    const addHandler = async () => {
        let { status, content, message } = await altbaseService.addEmailTemplate({
            template_name,
            template_slug,
            template_from,
            template_subject,
            template_from_mail,
            template_html,
            template_variables,
        })
        if (status === "success") {
            toast.success(message);
        } else {
            toast.error(message);
        }
    }

    return (
        <div className="p-4 bg-white mt-8">
            <div className="grid md:grid-cols-2 gap-4">
                <LabelInput1 text={template_name} onChangeHandler={setTemplate_name} className="mt-2 md:mt-6" label="Template Name *" placeholder=""></LabelInput1>
                <LabelInput1 text={template_slug} onChangeHandler={setTemplate_slug} className="mt-2 md:mt-6" label="Template Slug *" placeholder=""></LabelInput1>
            </div>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
                <LabelInput1 text={template_from} onChangeHandler={setTemplate_from} className="mt-2 md:mt-6" label="Template From *" placeholder=""></LabelInput1>
                <LabelInput1 text={template_subject} onChangeHandler={setTemplate_subject} className="mt-2 md:mt-6" label="Template Subject *" placeholder=""></LabelInput1>
                <LabelInput1 text={template_from_mail} onChangeHandler={setTemplate_from_mail} className="mt-2 md:mt-6" label="Template From Email *" placeholder=""></LabelInput1>
            </div>
            <EditorComponent label="Template HTML *" propContent={template_html} contentChangeHandler={setTemplate_html}></EditorComponent>
            <div className="grid grid-cols-2 gap-4">
                <LabelInput1 text={template_variables} onChangeHandler={setTemplate_variables} className="" label="Template Variable" placeholder=""></LabelInput1>
            </div>
            <div className='w-full flex justify-center mt-8'>
                <Button1 className='w-32 mr-2' text='Add' confirming onClick={addHandler} />
                <Button2 className='w-32 ' text='Back' onClick={goBack} />
            </div>
        </div>
    )
}

export default Add;
