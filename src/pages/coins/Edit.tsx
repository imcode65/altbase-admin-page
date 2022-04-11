import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import LabelInput1 from 'components/atoms/LabelInput1';
import LabelComponent from 'components/atoms/LabelComponent';
import LabelHorizontalComponent from 'components/atoms/LabelHorizontalComponent';
import TextArea from 'components/atoms/TextArea';
import IconButton from 'components/atoms/IconButton';
import IconAdd from 'components/icons/IconAdd';
import LogoUploader from 'components/atoms/LogoUploader';
import Button1 from 'components/atoms/Button1';
import Button2 from 'components/atoms/Button2';
import SwitchButton from 'components/atoms/SwitchButton';
import { v4 as uuidv4 } from 'uuid';
import Select2 from 'components/atoms/Select2';
import Input1 from 'components/atoms/Input1';
import IconClose from 'components/icons/IconClose';

const yesId = uuidv4();
const noId = uuidv4();
const socialMediaList = [
    "Linkedin",
    "Twitter",
    "Discord",
    "Telegram",
    "Whatsapp",
    "Skype",
    "Email",
];
interface ISocialMedia {
    media: string;
    link: string;
}

const Edit = () => {
    const navigate = useNavigate();
    const [address, setAddress] = useState<string>("0x55d398326f99059ff775485246999027b3197955");
    const [name, setName] = useState<string>("Tether USD");
    const [symbol, setSymbol] = useState<string>("USDT");
    const [routerPathAddress, setRouterPathAddress] = useState<string>("0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c,0x55d398326f99059ff775485246999027b3197955");
    const [category, setCategory] = useState<string>("Tether USD");
    const [website, setWebsite] = useState<string>("https://tether.to/en/");
    const [aboutText, setAboutText] = useState<string>("asdfasdfasdfasdfasdf");
    const [criteria, setCriteria] = useState<string>("0");
    const [isMarket, setIsMarket] = useState<boolean>(true);
    const [url, setUrl] = useState<string>("https://coinmarketcap.com/currencies/tether/");
    const [socialMedias, setSocialMedias] = useState<ISocialMedia[]>([]);
    const [status, setStatus] = useState<boolean>(true);

    const onChangeStatus = (newStatus: boolean) => {
        setStatus(newStatus);
        return newStatus;
    }

    const onMarket = (value: boolean) => {
        setIsMarket(value);
    }

    const onAddLinks = () => {
        setSocialMedias(val => [...val, { media: socialMediaList[0], link: "" }])
    }

    const onRemoveLink = (_id: number) => {
        setSocialMedias(val => val.filter((media,id) => id !== _id ));
    }

    const onBack = () => {
        navigate(-1);
    }

    const onSave = () => {

    }

    return (
        <div className="p-4 bg-white mt-8">
            <div className="grid md:grid-cols-2 gap-2">
                <LabelComponent title="Contract Address:" text={address}></LabelComponent>
                <LabelHorizontalComponent title="Pancake Router Address Version:" text={`address`}></LabelHorizontalComponent>
                <LabelHorizontalComponent title="Name:" text={name}></LabelHorizontalComponent>
            </div>
            <div className="">
                <LabelHorizontalComponent title="RouterPathAddress:" text={routerPathAddress}></LabelHorizontalComponent>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
                <LabelInput1 label="Category" text={category} onChangeHandler={setCategory}></LabelInput1>
                <LabelInput1 label="Website *" text={website} onChangeHandler={setWebsite}></LabelInput1>
            </div>
            <div className="my-4">
                <TextArea label="About *" text={aboutText} onChangeHandler={setAboutText}></TextArea>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
                <LabelInput1 label="Buy Criteria (100X) *" text={criteria} onChangeHandler={setCriteria}></LabelInput1>
                <div>
                    <span className="text-sm font-bold">Is Listed in Coin Market *</span><br></br>
                    <input id={yesId} type="radio" name="market" value="yes" defaultChecked={ isMarket ? true : false} onClick={() => onMarket(true)}></input><label htmlFor={yesId} className="mr-6 text-sm font-bold">&nbsp;Yes</label>
                    <input id={noId} type="radio" name="market" value="no"  defaultChecked={ !isMarket ? true : false} onClick={() => onMarket(false)}></input><label htmlFor={noId} className="text-sm font-bold">&nbsp;No</label><br></br>
                </div>
                <LabelInput1 label="URL *" text={url} onChangeHandler={setUrl}></LabelInput1>
            </div>
            <div className="my-4">
                <div className="flex items-center mb-2">
                    <span className="text-sm font-bold">Social Media Links &nbsp;</span>
                    <IconButton Icon={IconAdd} className="bg-black" onClick={onAddLinks}></IconButton>
                </div>
                <div className="flex flex-col">
                { socialMedias.map((val: ISocialMedia, index: number) => (
                    <div key={index} className="flex gap-4 mb-2">
                        <Select2 className={"flex-grow flex-shrink"} list={socialMediaList} value={val.media} onChangeHandler={(newMedia) => {
                            setSocialMedias(val => val.map((media, id) => index === id ? ({
                                media: newMedia,
                                link: media.link,
                            }) : media))
                        }} />
                        <Input1 value={val.link} onChangeHandler={(newLink) => {
                            setSocialMedias(val => val.map((media, id) => index === id ? ({
                                media: media.media,
                                link: newLink,
                            }) : media))
                        }} className={"flex-grow flex-shrink"} />
                        <IconButton Icon={IconClose} className="bg-black flex-grow-0 flex-shrink-0" onClick={() => onRemoveLink(index)}></IconButton>
                    </div>
                )) }
                </div>
            </div>
            <div>
                <p className="text-sm font-bold">Logo</p>
                <LogoUploader />
            </div>
            <SwitchButton onChangeHandler={onChangeStatus}/>
            <div className='w-full flex justify-center mt-8'>
                <Button1 className='w-32 mr-2' text='Save' confirming onClick={onSave}/>
                <Button2 className='w-32' text='Back' onClick={onBack}/>
            </div>
        </div>
    )
}

export default Edit;
