import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LabelInput1 from 'components/atoms/LabelInput1';
import Select3 from 'components/atoms/Select3';
import TextArea from 'components/atoms/TextArea';
import LogoUploader from 'components/atoms/LogoUploader';
import SwitchButton from 'components/atoms/SwitchButton';
import Button1 from 'components/atoms/Button1';
import Button2 from 'components/atoms/Button2';
import toast from 'react-hot-toast';
import XLogo from 'assets/imgs/XLogo.png';
import altbaseService, { ICoinNews } from "services/altbaseService";

const Add = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [is_active, setIsActive] = useState<boolean>(true);
    const [coins, setCoins] = useState<string>("");
    const [banner_url, setBannerUrl] = useState<string>(XLogo);
    const [thumbnail_url, setThumbnailUrl] = useState<string>(XLogo);

    const onChangeStatus = (newStatus: boolean) => {
        setIsActive(newStatus);
        return newStatus;
    }

    const onBack = () => {
        navigate(-1);
    }

    const saveHandler = async() => {
        let { status, content, message } = await altbaseService.addCoinNews({
            title: title,
            coin_id: coins === "Altbase" ? "1" : "0",
            description: description,
            banner_url: banner_url,
            is_active: is_active ? "1" : "0"
        })
        if (status === "success") {
            toast.success(message);
        } else {
            toast.error(message);
        }
    }

    return (
        <div className="p-4 bg-white mt-8">
            <div className="grid grid-cols-2 gap-4">
                <Select3 label="Coins *" list={["Select Type", "DFS MAFIA", "Altbase"]} onChangeHandler={setCoins} value={coins}></Select3>
                <LabelInput1 label="Title *" placeholder="Enter the Title" text={title} onChangeHandler={setTitle}></LabelInput1>
            </div>
            <div className="mt-4">
                <TextArea label="Description" text={description} onChangeHandler={setDescription}></TextArea>
            </div>
            <div className="mt-4">
                <p>Thumbnail</p>
                <LogoUploader url={thumbnail_url}/>
            </div>
            <div className="mt-4">
                <p>Banner</p>
                <LogoUploader url={banner_url}/>
            </div>
            <div>
                Status
                <SwitchButton onChangeHandler={onChangeStatus}/>
            </div>
            <div className='w-full flex justify-center'>
                <Button1 className='w-32 mr-2' text='Save' confirming onClick={saveHandler} />
                <Button2 className='w-32' text='Back' onClick={onBack}/>
            </div>
        </div>
    )
}

export default Add;
