import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LabelComponent from 'components/atoms/LabelComponent';
import Button2 from 'components/atoms/Button2';
import { prefix } from "constants/menuInfo";
import XLogo from 'assets/imgs/XLogo.png';

const View = () => {
    const navigate = useNavigate();
    const [url, setUrl] = useState<string>("https://coinmarketcap.com/currencies/tether/");
    const [text, setText] = useState<string>("Tether (USDT) is a cryptocurrency with a value meant to mirror the value of the U.S. dollar. The idea was to create a stable cryptocurrency that can be used like digital dollars. Coins that serve this purpose of being a stable dollar substitute are called “stable coins.” Tether is the most popular stable coin and even acts as a dollar replacement on many popular exchanges! According to their site, Tether converts cash into digital currency, to anchor or “tether” the value of the coin to the price of national currencies like the US dollar, the Euro, and the Yen. Like other cryptos it uses blockchain. Unlike other cryptos, it is [according to the official Tether site] “100% backed by USD” (USD is held in reserve).");
    const [address, setAddress] = useState<string>("0x55d398326f99059ff775485246999027b3197955");
    const [category, setCategory] = useState<string>("Tether USD");
    const [routerPathAddress, setRouterPathAddress] = useState<string>("0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c,0x55d398326f99059ff775485246999027b3197955");
    const [routerAddressVersion, setRouterAddressVersion] = useState<string>("V1");
    const [capUrl, setCapUrl] = useState<string>("");
    const [status, setStatus] = useState<boolean>(true);
    const [criteria, setCriteria] = useState<string>("0");
    const [createdAt, setCreatedAt] = useState<string>("Mar 16, 2022, 9:14:10 AM");
    const [socialMediaLink, setSocialMediaLink] = useState<string>("NA");

    const onBack = () => {
        navigate(-1);
    }
    
    return (
        <div className="p-4 bg-white mt-8">
            <div className="grid md:grid-cols-2">
                <div className="flex justify-center items-center">
                    <img className='h-8 m-2 rounded-md overflow-hidden' src={XLogo} alt="XLogo" />
                    <LabelComponent title="Tether USD:" text={"USDT"}></LabelComponent>
                </div>
                <LabelComponent title="Tether USD:" text={url}></LabelComponent>
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