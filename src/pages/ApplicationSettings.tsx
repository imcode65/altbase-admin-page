import LabelInput1 from 'components/atoms/LabelInput1';
import Button1 from 'components/atoms/Button1';
import { useState } from 'react';
import toast from 'react-hot-toast';

const SiteSettings = () => {
    const [appUrl, setAppUrl] = useState<string>("");
    const [pancakeRouterAddress, setPancakeRouterAddress] = useState<string>("");
    const [pancakeRouterPathAddress, setPancakeRouterPathAddress] = useState<string>("");
    const [xTokenAddress, setXTokenAddress] = useState<string>("");
    const [endPoint, setEndPoint] = useState<string>("");
    const [coinMarketApiKey, setCoinMarket] = useState<string>("");
    const [coinMarketApiUrl, setCoinMarketApiUrl] = useState<string>("");
    const [bscScanTxLink, setBscScanTxLink] = useState<string>("");
    const [bscScanAddressLink, setBscScanAddressLink] = useState<string>("");
    const [coinMarketCapApiKey, setCoinMarketCapApiKey] = useState<string>("");
    const [simplexVersion, setSimplexVersion] = useState<string>("");
    const [simplexApiUrl, setSimplexApiUrl] = useState<string>("");
    const [simplexApiKey, setSimplexApiKey] = useState<string>("");
    const [simplexPartner, setSimplexPartner] = useState<string>("");
    const [simplexPartnerUrl, setSimplexPartnerUrl] = useState<string>("");
    const [simplexPaymentFlowType, setSimplexPaymentFlowType] = useState<string>("");
    const [simplexPaymentSuccessUrl, setSimplexPaymentSuccessUrl] = useState<string>("");
    const [simplexPaymentFailUrl, setSimplexPaymentFailUrl] = useState<string>("");
    const [simplexPaymentStatusUrl, setSimplexPaymentStatusUrl] = useState<string>("");
    const [userPublicIpUrl, setUserPublicIpUrl] = useState<string>("");
    const [oneSignalAppId, setOneSignalAppId] = useState<string>("");
    const [oneSignalSenderId, setOneSignalSenderId] = useState<string>("");
    const [oneSignalAuthToken, setOneSignalAuthToken] = useState<string>("");
    const [oneSignalHost, setOneSignalHost] = useState<string>("");
    const [oneSignalPort, setOneSignalPort] = useState<string>("");
    const [minSellQuantity, setMinSellQuantity] = useState<string>("");
    const saveHandler = () => {
        toast.success('Successfully toasted!')
    }
    return (
        <div className='p-4'>
            <div className="grid md:grid-cols-2 gap-4">
                <LabelInput1 text={appUrl} onChangeHandler={setAppUrl} className="mt-4" label="API Url *" placeholder="https://api.100xcoin.io/" ></LabelInput1>
                <LabelInput1 text={pancakeRouterAddress} onChangeHandler={setPancakeRouterAddress} className="mt-4" label="Pancake Swap Router Address *" placeholder="0x05fF2B0DB69458A0750badebc4f9e13aDd608C7F" ></LabelInput1>
                <LabelInput1 text={pancakeRouterPathAddress} onChangeHandler={setPancakeRouterPathAddress} className="mt-4" label="Pancake Swap Router Path Address *" placeholder={`["0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c","0x016c285d5b918b92aa85ef1e147498badfe30d69"]`} ></LabelInput1>
                <LabelInput1 text={xTokenAddress} onChangeHandler={setXTokenAddress} className="mt-4" label="xToken Contract Address *" placeholder="0x016c285d5b918b92aa85ef1e147498badfe30d69" ></LabelInput1>
                <LabelInput1 text={endPoint} onChangeHandler={setEndPoint} className="mt-4" label="Block Chain EndPoint *" placeholder="https://bsc-mainnet.web3api.com/v1/1D38BXJIZ7GS3XNTYY77FA5E1H49W9V8B4" ></LabelInput1>
                <LabelInput1 text={coinMarketApiKey} onChangeHandler={setCoinMarket} className="mt-4" label="Coin Market API-Key *" placeholder="d8e59f61-4f78-4b2a-8b4a-d7118f5e6f7d" ></LabelInput1>
                <LabelInput1 text={coinMarketApiUrl} onChangeHandler={setCoinMarketApiUrl} className="mt-4" label="Coin Market API-Url *" placeholder="https://pro-api.coinmarketcap.com" ></LabelInput1>
                <LabelInput1 text={bscScanTxLink} onChangeHandler={setBscScanTxLink} className="mt-4" label="Bsc Scan Transaction Link *" placeholder="https://bscscan.com/tx/" ></LabelInput1>
                <LabelInput1 text={bscScanAddressLink} onChangeHandler={setBscScanAddressLink} className="mt-4" label="Bsc Scan Address Link *" placeholder="https://bscscan.com/address/" ></LabelInput1>
                <LabelInput1 text={coinMarketCapApiKey} onChangeHandler={setCoinMarketCapApiKey} className="mt-4" label="Coin Market Cap API-Key *" placeholder="DEPRECATED" ></LabelInput1>
                <LabelInput1 text={simplexVersion} onChangeHandler={setSimplexVersion} className="mt-4" label="Simplex Version *" placeholder="1" ></LabelInput1>
                <LabelInput1 text={simplexApiUrl} onChangeHandler={setSimplexApiUrl} className="mt-4" label="Simplex API Url *" placeholder="https://backend-wallet-api.simplexcc.com/" ></LabelInput1>
                <LabelInput1 text={simplexApiKey} onChangeHandler={setSimplexApiKey} className="mt-4" label="Simplex API key *" placeholder="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwYXJ0bmVyIjoiMTAweGNvaW4iLCJpcCI6WyIxMzQuMTIyLjExLjIwMiJdLCJzYW5kYm94IjpmYWxzZX0.ti_dYgXOIg_7nXYhzW65sv2xydpcItnvxCTc3QwfaDA" ></LabelInput1>
                <LabelInput1 text={simplexPartner} onChangeHandler={setSimplexPartner} className="mt-4" label="Simplex Partner *" placeholder="100xcoin" ></LabelInput1>
                <LabelInput1 text={simplexPartnerUrl} onChangeHandler={setSimplexPartnerUrl} className="mt-4" label="Simplex Payment Url *" placeholder="https://checkout.simplexcc.com/payments/new" ></LabelInput1>
                <LabelInput1 text={simplexPaymentFlowType} onChangeHandler={setSimplexPaymentFlowType} className="mt-4" label="Simplex Payment Flow Type *" placeholder="wallet" ></LabelInput1>
                <LabelInput1 text={simplexPaymentSuccessUrl} onChangeHandler={setSimplexPaymentSuccessUrl} className="mt-4" label="Simplex Payment Success Return Url *" placeholder="https://www.100xcoin.io/" ></LabelInput1>
                <LabelInput1 text={simplexPaymentFailUrl} onChangeHandler={setSimplexPaymentFailUrl} className="mt-4" label="Simplex Payment Fail Return Url *" placeholder="https://www.100xcoin.io/support" ></LabelInput1>
                <LabelInput1 text={simplexPaymentStatusUrl} onChangeHandler={setSimplexPaymentStatusUrl} className="mt-4" label="Simplex Payment Status Url *" placeholder="https://payment-status.simplex.com/#/payment/" ></LabelInput1>
                <LabelInput1 text={userPublicIpUrl} onChangeHandler={setUserPublicIpUrl} className="mt-4" label="User's Public IP get url *" placeholder="https://api.ipify.org/?format=json" ></LabelInput1>
                <LabelInput1 text={oneSignalAppId} onChangeHandler={setOneSignalAppId} className="mt-4" label="One Signal App Id *" placeholder="cb6e11a9-bb53-4324-b0bc-2caf2ef1e53f" ></LabelInput1>
                <LabelInput1 text={oneSignalSenderId} onChangeHandler={setOneSignalSenderId} className="mt-4" label="One Signal Sender Id *" placeholder="900419935998" ></LabelInput1>
                <LabelInput1 text={oneSignalAuthToken} onChangeHandler={setOneSignalAuthToken} className="mt-4" label="One Signal Auth Token *" placeholder="Basic M2YyYzM1ZTktMDUzNi00ZjQ2LTllMjEtMGUxZmVkOGU1NGVj" ></LabelInput1>
                <LabelInput1 text={oneSignalHost} onChangeHandler={setOneSignalHost} className="mt-4" label="One Signal Host *" placeholder="onesignal.com" ></LabelInput1>
                <LabelInput1 text={oneSignalPort} onChangeHandler={setOneSignalPort} className="mt-4" label="One Signal Port *" placeholder="443" ></LabelInput1>
                <LabelInput1 text={minSellQuantity} onChangeHandler={setMinSellQuantity} className="mt-4" label="Minimum 100x Sell Quantity *" placeholder="10" ></LabelInput1>
            </div>
            <div className='w-full flex justify-center mt-12'>
                <Button1 className='w-32' text='Save' confirming onClick={saveHandler} />
            </div>
        </div>
    )
}

export default SiteSettings
