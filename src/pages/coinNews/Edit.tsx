import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { prefix } from "constants/menuInfo";
import LabelInput1 from 'components/atoms/LabelInput1';
import Select3 from 'components/atoms/Select3';
import TextArea from 'components/atoms/TextArea';
import LogoUploader from 'components/atoms/LogoUploader';
import SwitchButton from 'components/atoms/SwitchButton';
import Button1 from 'components/atoms/Button1';
import Button2 from 'components/atoms/Button2';

const Edit = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [status, setStatus] = useState<boolean>(true);

    const onChangeStatus = (newStatus: boolean) => {
        setStatus(newStatus);
        return newStatus;
    }

    const onBack = () => {
        navigate(`${ prefix }/coin-news/manage`);
    }

    return (
        <div className="p-4 bg-white mt-8">
            <div className="grid grid-cols-2 gap-4">
                <Select3 label="Coins *" list={["Select Type", "All", "Individual"]}></Select3>
                <LabelInput1 label="Title *" placeholder="Enter the Title" text={title} onChangeHandler={setTitle}></LabelInput1>
            </div>
            <div className="mt-4">
                <TextArea label="Description" text={description} onChangeHandler={setDescription}></TextArea>
            </div>
            <div className="mt-4">
                <p>Thumbnail</p>
                <LogoUploader />
            </div>
            <div className="mt-4">
                <p>Banner</p>
                <LogoUploader />
            </div>
            <div>
                Status
                <SwitchButton onChangeHandler={onChangeStatus}/>
            </div>
            <div className='w-full flex justify-center'>
                <Button1 className='w-32 mr-2' text='Save' />
                <Button2 className='w-32' text='Back' onClick={onBack}/>
            </div>
        </div>
    )
}

export default Edit;
