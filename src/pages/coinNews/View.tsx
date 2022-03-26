import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { prefix } from "constants/menuInfo";
import LabelComponent from 'components/atoms/LabelComponent';
import LogoUploader from 'components/atoms/LogoUploader';
import Button2 from 'components/atoms/Button2';
import XLogo from 'assets/imgs/XLogo.png';

const View = () => {
    const navigate = useNavigate();
    const [coin, setCoin] = useState<string>("");
    const [title, setTitle] = useState<string>("");
    const [status, setStatus] = useState<string>("");
    const [createAt, setCreateAt] = useState<string>("");
    const [updatedAt, setUpdatedAt] = useState<string>("");

    const onBack = () => {
        navigate(`${ prefix }/coin-news/manage`);
    }

    return (
        <>
            <div className="p-4 bg-white mt-8">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <span className="front-bold"> Thumbnail </span>
                        <img className='h-8 m-2 rounded-md overflow-hidden' src={XLogo} alt="XLogo" />
                        <LabelComponent title="Coin Category" text={`${coin === "" ? "NA" : coin}`}></LabelComponent>
                        <LabelComponent title="Title" text={`${title === "" ? "NA" : title}`}></LabelComponent>
                        <LabelComponent title="Status" text={`${status === "" ? "NA" : status}`}></LabelComponent>
                        <LabelComponent title="CreatedAt" text={`${createAt === "" ? "NA" : createAt}`}></LabelComponent>
                        <LabelComponent title="UpdatedAt" text={`${updatedAt === "" ? "NA" : updatedAt}`}></LabelComponent> 
                    </div>
                    <div>
                        <span className="front-bold"> Banner </span>
                        <img className='h-60 m-2 rounded-md overflow-hidden' src={XLogo} alt="XLogo" />
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
