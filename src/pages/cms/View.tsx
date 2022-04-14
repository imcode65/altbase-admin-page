import LabelInput1 from 'components/atoms/LabelInput1';
import TextArea from 'components/atoms/TextArea';
import Button2 from 'components/atoms/Button2';
import { useNavigate, useParams } from 'react-router-dom';
import LabelComponent from 'components/atoms/LabelComponent';
import { useState, useEffect } from 'react';
import toast from "react-hot-toast";
import { prefix } from "constants/menuInfo";
import altbaseService, { ICMS } from "services/altbaseService";

const View = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [text, setText] = useState<string>("");
    const [titleText, setTitleText] = useState<string>("");
    const [slugText, setSlugText] = useState<string>("");
    const [contentText, setContentText] = useState<string>("");

    useEffect(() => {
        (async() => {
            let { status, content, message } = await altbaseService.getCMSById(parseInt(id || "0"));
            if( status === "success") {
                setContentText(content.content);
                setTitleText(content.title);
                setSlugText(content.slug);
            } else {
                toast.error(message);
            }
        })();
    })

    const onBack = () => {
        navigate(-1);
    }

    return (
        <div className="p-4 bg-white mt-8">
            <div className="grid grid-cols-2">
                <LabelComponent text={titleText} title="Title"></LabelComponent>
                <LabelComponent text={slugText} title="Slug"></LabelComponent>
            </div>
            <LabelComponent text={contentText} title="Content"></LabelComponent>
            <div className='w-full flex justify-start mt-8'>
                <Button2 className='w-32 ' text='Back' onClick={onBack}/>
            </div>
        </div>
    )
}

export default View;