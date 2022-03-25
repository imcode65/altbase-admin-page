import { useLocation } from "react-router";
import { useState } from 'react';
import LabelInput1 from 'components/atoms/LabelInput1';
import LabelComponent from 'components/atoms/LabelComponent';
import LabelHorizontalComponent from 'components/atoms/LabelHorizontalComponent';
import TextArea from 'components/atoms/TextArea';
import IconButton from 'components/atoms/IconButton';
import IconAdd from 'components/icons/IconAdd';
import Button1 from 'components/atoms/Button1';
import Button2 from 'components/atoms/Button2';

const Edit = () => {
    const [address, setAddress] = useState<string>("0x55d398326f99059ff775485246999027b3197955");
    const [name, setName] = useState<string>("Tether USD");
    const [symbol, setSymbol] = useState<string>("USDT");
    const [routerPathAddress, setrouterPathAddress] = useState<string>("0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c,0x55d398326f99059ff775485246999027b3197955");
    const [category, setCategory] = useState<string>("Tether USD");
    const [website, setWebsite] = useState<string>("https://tether.to/en/");
    const [aboutText, setAboutText] = useState<string>("asdfasdfasdfasdfasdf");
    const [criteria, setCriteria] = useState<string>("0");
    const [isMarket, setIsMarket] = useState<boolean>(true);
    const [url, setUrl] = useState<string>("https://coinmarketcap.com/currencies/tether/");
    const [countLinks, setCountLinks] = useState<number>(0);
    const [marketArray, setMarketArray] = useState<array>([]);

    const onMarket = (value: boolean) => {
        setIsMarket(value);
    }

    const onAddLinks = () => {
        setCountLinks(countLinks + 1)
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
                    <input type="radio" name="market" value="yes" checked={ isMarket ? true : false} onClick={() => onMarket(true)}></input><label className="mr-6 text-sm font-bold">&nbsp;Yes</label>
                    <input type="radio" name="market" value="no"  checked={ !isMarket ? true : false} onClick={() => onMarket(false)}></input><label className="text-sm font-bold">&nbsp;No</label><br></br>
                </div>
                <LabelInput1 label="URL *" text={url} onChangeHandler={setUrl}></LabelInput1>
            </div>
            <div className="mt-4">
                <div className="flex items-center">
                    <span className="text-sm font-bold">Social Media Links &nbsp;</span>
                    <IconButton Icon={IconAdd} className="bg-black" onAddLinks={onAddLinks}></IconButton>
                    {
                        marketArray.map((val: any, index: number) => (
                            <input></input>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Edit;
