import { useLocation } from "react-router";
import { useState, useEffect } from 'react';
import LabelInput1 from 'components/atoms/LabelInput1';
import TextArea from 'components/atoms/TextArea';
import Button1 from 'components/atoms/Button1';
import Button2 from 'components/atoms/Button2';
import SwitchButton from 'components/atoms/SwitchButton';
import { useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import altbaseService, { ICMS } from "services/altbaseService";

const Edit = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [is_active, setIs_active] = useState<boolean>(false);
    const [titleText, setTitleText] = useState<string>("");
    const [slugText, setSlugText] = useState<string>("");
    const [contentText, setContentText] = useState<string>("");

    useEffect(() => {
        (async() => {
            let { status, content, message } = await altbaseService.getCMSById(parseInt(id || "0"));
            console.log(content);
            if( status === "success") {
                setContentText(content.content);
                setTitleText(content.title);
                setSlugText(content.slug);
                setIs_active(Boolean(content.is_active));
            } else {
                toast.error(message);
            }
        })();
    }, [])

    const onChangeStatus = (newStatus: boolean) => {
        setIs_active(newStatus);
        return newStatus;
    }

    const onBack = () => {
        navigate(-1);
    }
    
    const saveHandler = () => {
        (async() => {
            let { status, content, message } = await altbaseService.updateCMS(parseInt(id || "0"), {
                title: titleText,
                content: contentText,
                is_active: is_active ? "1" : "0"
            });
            if( status === "success") {
                setContentText(content.content);
                setTitleText(content.title);
                setSlugText(content.slug);
                toast.success(message);
            } else {
                toast.error(message);
            }
        })();
    }
    
    return (
        <div className="p-4 bg-white mt-8">
            <div className="mb-16">
                <LabelInput1 className="mt-6" label="Title *" placeholder="Enter the title" text={titleText} onChangeHandler={setTitleText}></LabelInput1>
                <TextArea className="mt-6" label="Content *" placeholder="Enter your description" text={contentText} onChangeHandler={setContentText}></TextArea>
            </div>
            <SwitchButton onChangeHandler={onChangeStatus} value={is_active}/>
            <div className='w-full flex justify-center mt-8'>
                <Button1 className='w-32 mr-2' text='Save' confirming onClick={saveHandler} />
                <Button2 className='w-32 ' text='Back' onClick={onBack}/>
            </div>
        </div>
    )
}

export default Edit;
