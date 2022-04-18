import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { prefix } from "constants/menuInfo";
import LabelComponent from 'components/atoms/LabelComponent';
import LogoUploader from 'components/atoms/LogoUploader';
import Button2 from 'components/atoms/Button2';
import XLogo from 'assets/imgs/XLogo.png';
import toast from 'react-hot-toast';
import altbaseService, { ICoinNews } from "services/altbaseService";

const View = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [coin, setCoin] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [status, setStatus] = useState<string>("");
    const [createAt, setCreateAt] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [updatedAt, setUpdatedAt] = useState<string>("");
    const [banner_url, setBanner_url] = useState<string>(XLogo);
    const [thumbnail_url, setThumbnail_url] = useState<string>(XLogo);

    useEffect(() => {
        (async() => {
            let { status, content, message } = await altbaseService.getCoinNewsById(parseInt(id || "0"))
            if (status === "success") {
                setCoin(content.coin_id);
                setTitle(content.title);
                setStatus(content.is_active === 1 ? "active" : "Deactive");
                setDescription(content.description);
                setUpdatedAt(content.updated_at);
                setCreateAt(content.created_at);
                setThumbnail_url(content.thumbnail_url);
                setBanner_url(content.banner_url);
            } else {
                toast.error(message);
            }
        })();
    },[]);

    const onBack = () => {
        navigate(-1);
    }

    return (
        <>
            <div className="p-4 bg-white mt-8">
                <div className="grid md:grid-cols-2 gap-4">
                    <div>
                        <span className="front-bold"> Thumbnail </span>
                        <img className='h-8 m-2 rounded-md overflow-hidden' src={thumbnail_url} alt="XLogo" />
                        <LabelComponent className="mb-4" title="Coin" text={`${coin === "" ? "NA" : coin}`}></LabelComponent>
                        <LabelComponent className="mb-4" title="Title" text={`${title === "" ? "NA" : title}`}></LabelComponent>
                        <LabelComponent className="mb-4" title="Status" bage_text={status} bage_class={`${status === "active" ? "bg-green-500": "bg-red-500"}`}></LabelComponent>
                        <LabelComponent className="mb-4" title="Created At" text={`${createAt === "" ? "NA" : createAt}`}></LabelComponent>
                        <LabelComponent className="mb-4" title="Description" text={`${description === "" ? "NA" : description}`}></LabelComponent>
                        <LabelComponent className="mb-4" title="UpdatedAt" text={`${updatedAt === "" ? "NA" : updatedAt}`}></LabelComponent> 
                    </div>
                    <div>
                        <span className="front-bold"> Banner </span>
                        <img className='h-60 m-2 rounded-md overflow-hidden' src={banner_url} alt="XLogo" />
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-start m-6'>
                <Button2 className='w-32' text='Back' onClick={onBack}/>
            </div>
        </>
    )
}

export default View;
