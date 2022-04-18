import { useNavigate, useParams } from "react-router";
import LabelInput1 from 'components/atoms/LabelInput1';
import Button1 from 'components/atoms/Button1';
import Button2 from 'components/atoms/Button2';
import EditorComponent from 'components/atoms/EditorComponent';
import toast from 'react-hot-toast';
import { useState } from "react";
import altbaseService from "services/altbaseService";
import TextArea from 'components/atoms/TextArea';

const Add = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    const onBack = () => {
        navigate(-1);
    }

    const addHandler = async () => {
        let { status, content, message } = await altbaseService.addCMS({
            title: title,
            content: description,
        })
        if (status === "success") {
            toast.success(message);
        } else {
            toast.error(message);
        }
    }

    return (
        <div className="p-4 bg-white">
            <LabelInput1 label="Title  *" onChangeHandler={setTitle} text={title} placeholder="Enter the users email"></LabelInput1>
            <div className="mt-4">
                <TextArea label="Description *" text={description} onChangeHandler={setDescription}></TextArea>
            </div>
            <div className='w-full flex justify-center mt-8 col-span-3'>
                <Button1 className='w-32 mr-2' text='Save' confirming onClick={addHandler} />
                <Button2 className='w-32' text='Back' onClick={onBack}/>
            </div>
        </div>
    )
}

export default Add;