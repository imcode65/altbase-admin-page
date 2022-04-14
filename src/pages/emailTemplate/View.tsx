import LabelComponent from 'components/atoms/LabelComponent';
import IframeComponent from 'components/atoms/IframeComponent';
import Button2 from 'components/atoms/Button2';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import altbaseService from "services/altbaseService";

const View = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [nameText, setNameText] = useState<string>("Email Verification");
    const [slugText, setSlugText] = useState<string>("email_Verification");
    const [subjectText, setSubjectText] = useState<string>("Verify your email address");
    const [fromNameText, setFromNameText] = useState<string>("<%=closing_text%>");
    const [emailText, setEmailText] = useState<string>("ainfo@altbase.com");
    const [iframeSrc, setIframeSrc] = useState<string>("https://www.w3schools.com");

    const onBack = () => {
        navigate(-1);
    }

    useEffect(() => {
        (async () => {
            let { status, content, message } = await altbaseService.getEmailTemplateById(parseInt(id || "0"))
            
        })()
    }, []);
    return (
        <div className="p-4 bg-white mt-8">
            <div className="grid md:grid-cols-2 p-2">
                <div>
                    <LabelComponent text={nameText} title="Template Name"></LabelComponent>
                    <LabelComponent text={slugText} title="Template Slug"></LabelComponent>
                    <LabelComponent text={subjectText} title="Template Subject"></LabelComponent>
                    <LabelComponent text={fromNameText} title="Template From Name"></LabelComponent>
                    <LabelComponent text={emailText} title="Template From Email"></LabelComponent>
                </div>
                <IframeComponent topText="Template HTML Preview" src={iframeSrc}></IframeComponent>
            </div>
            <div className='w-full flex justify-start mt-8'>
                <Button2 className='w-32 ' text='Back' onClick={onBack}/>
            </div>
        </div>
    )
}

export default View;