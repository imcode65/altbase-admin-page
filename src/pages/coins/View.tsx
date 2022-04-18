import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import LabelComponent from 'components/atoms/LabelComponent';
import Button2 from 'components/atoms/Button2';
import { prefix } from "constants/menuInfo";
import XLogo from 'assets/imgs/XLogo.png';
import toast from 'react-hot-toast';
import altbaseService from "services/altbaseService";

const View = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [name, setName] = useState<string>("");
    const [symbol, setSymbol] = useState<string>("");
    const [url, setUrl] = useState<string>("");
    const [text, setText] = useState<string>("");
    const [address, setAddress] = useState<string>("0x55d398326f99059ff775485246999027b3197955");
    const [category, setCategory] = useState<string>("Tether USD");
    const [routerPathAddress, setRouterPathAddress] = useState<string>("0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c,0x55d398326f99059ff775485246999027b3197955");
    const [routerAddressVersion, setRouterAddressVersion] = useState<string>("V1");
    const [capUrl, setCapUrl] = useState<string>("");
    const [status, setStatus] = useState<boolean>(true);
    const [criteria, setCriteria] = useState<string>("0");
    const [createdAt, setCreatedAt] = useState<string>("Mar 16, 2022, 9:14:10 AM");
    const [socialMediaLink, setSocialMediaLink] = useState<string>("NA");
    const [website, setWebsite] = useState<string>("");
    const [isMarket, setIsMarket] = useState<number>(1);

    const onBack = () => {
        navigate(-1);
    }
    useEffect(() => {
        (async () => {
            let { status, content, message } = await altbaseService.getCoinById(parseInt(id || "0"))
            if (status === "success") {
                setAddress(content.contract_address)
                setName(content.name)
                setSymbol(content.symbol)
                setRouterPathAddress(content.pancake_router_path_address)
                setCategory(content.coinCategory.title)
                setWebsite(content.website_url)
                setText(content.about)
                setCriteria(content.buy_criteria)
                setIsMarket(content.is_active)
                setUrl(content.coinmarketcap_listed_url)
                // setSocialMedias(JSON.parse(content.social_media_links).map((single: any) => ({media: single.socialMediaType.charAt(0).toUpperCase() + single.socialMediaType.slice(1), link: single.socialMediaLink})))
                setStatus(content.is_active);
            } else {
                toast.error(message);
            }
        })()
    }, []);
    return (
        <div className="p-4 bg-white mt-8">
            <div className="grid md:grid-cols-2">
                <div className="flex justify-center items-center">
                    <img className='h-8 m-2 rounded-md overflow-hidden' src={XLogo} alt="XLogo" />
                    <LabelComponent title={symbol} text={name}></LabelComponent>
                </div>
                <LabelComponent title={symbol} text={url}></LabelComponent>
            </div>
            <LabelComponent title="About" text={text}></LabelComponent>
            <div className="grid md:grid-cols-2">
                <LabelComponent className='mt-2' title="Coin Category" text={category}></LabelComponent>
                <LabelComponent className='mt-2' title="Contract Address" text={address}></LabelComponent>
                <LabelComponent className='mt-2' title="Router Address Version" text={routerAddressVersion}></LabelComponent>
                <LabelComponent className='mt-2' title="Router Path Address" text={routerPathAddress}></LabelComponent>
                <LabelComponent className='mt-2' title="Coin market cap URL" text={capUrl} bage_text={`${capUrl === "" ? 'no': ''}`} bage_class={`${capUrl === "" ? 'bg-red-500': ''}`}></LabelComponent>
                <LabelComponent className='mt-2' title="Status" bage_text={`${status ? 'active': 'Inactive'}`} bage_class={`${status ? 'bg-green-500': 'bg-red-500'}`} ></LabelComponent>
                <LabelComponent className='mt-2' title="Buy Criteria (100x)" text={criteria}></LabelComponent>
                <LabelComponent className='mt-2' title="Created At" text={createdAt}></LabelComponent>
                <LabelComponent className='mt-2' title="Social Media Links" text={socialMediaLink}></LabelComponent>
            </div>
            <div className='w-full flex justify-start mt-8'>
                <Button2 className='w-32' text='Back' onClick={onBack}/>
            </div>
        </div>
    )
}

export default View;