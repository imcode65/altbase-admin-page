import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
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

const Edit = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [title, setTitle] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [coins, setCoins] = useState<string>("");
    const [is_active, setIsActive] = useState<boolean>(true);
    const [banner_url, setBannerUrl] = useState<string>(XLogo);
    const [thumbnail_url, setThumbnailUrl] = useState<string>(XLogo);

    useEffect(() => {
        (async() => {
            let { status, content, message } = await altbaseService.getCoinNewsById(parseInt(id || "0"))
            if( status === "success") {
                setTitle(content.title);
                setCoins(content.coin_id === 1 ? "Altbase" : "DFS MAFIA");
                setDescription(content.description);
                setThumbnailUrl(thumbnail_url);
                setBannerUrl(banner_url);


            } else {
                toast.error(message);
            }
        })();
    }, [])

    const onChangeStatus = (newStatus: boolean) => {
        setIsActive(newStatus);
        return newStatus;
    }

    const onBack = () => {
        navigate(-1);
    }

    const saveHandler = async() => {
        (async() => {
            let { status, content, message } = await altbaseService.updateCoinNews(parseInt(id || "0"), {
                title: title,
                is_active: is_active ? "1" : "0",
                coin_id: coins === "Altbase" ? '1' : '0',
                description: description
            });
            if( status === "success") {
                toast.success(message);
            } else {
                toast.error(message);
            }
        })();
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
                <LogoUploader  url={thumbnail_url}/>
            </div>
            <div className="mt-4">
                <p>Banner</p>
                <LogoUploader url={banner_url}/>
            </div>
            <div>
                Status
                <SwitchButton onChangeHandler={onChangeStatus} value={is_active}/>
            </div>
            <div className='w-full flex justify-center'>
                <Button1 className='w-32 mr-2' text='Save' confirming onClick={saveHandler} />
                <Button2 className='w-32' text='Back' onClick={onBack}/>
            </div>
        </div>
    )
}

export default Edit;
