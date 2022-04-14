import LabelInput1 from 'components/atoms/LabelInput1';
import Button1 from 'components/atoms/Button1';
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import altbaseService from "services/altbaseService";

const SiteSettings = () => {
    const [apiUrl, setApiUrl] = useState<string>("");
    const [pancakeSwapRouterAddress, setPancakeSwapRouterAddress] = useState<string>("");
    const [pancakeSwapRouterPathAddress, setPancakeSwapRouterPathAddress] = useState<string>("");
    const [xTokenContractAddress, setXTokenContractAddress] = useState<string>("");
    const [blockchainEndPoint, setBlockchainEndPoint] = useState<string>("");
    const [cointMarketAPIKey, setCointMarketAPIKey] = useState<string>("");
    const [coinMarketAPIUrl, setCoinMarketAPIUrl] = useState<string>("");
    const [bscscanTxnLink, setBscscanTxnLink] = useState<string>("");
    const [bscScanAddressLink, setBscScanAddressLink] = useState<string>("");
    const [cointMarketCapAPIKey, setCointMarketCapAPIKey] = useState<string>("");
    const [simplexVersion, setSimplexVersion] = useState<string>("");
    const [simplexAPIUrl, setSimplexAPIUrl] = useState<string>("");
    const [simplexAPIKey, setSimplexAPIKey] = useState<string>("");
    const [simplexPartner, setSimplexPartner] = useState<string>("");
    const [simplexPaymentUrl, setSimplexPaymentUrl] = useState<string>("");
    const [simplexPaymentFlowType, setSimplexPaymentFlowType] = useState<string>("");
    const [simplexReturnSuccessUrl, setSimplexReturnSuccessUrl] = useState<string>("");
    const [simplexReturnFailUrl, setSimplexReturnFailUrl] = useState<string>("");
    const [simplexPaymentStatusUrl, setSimplexPaymentStatusUrl] = useState<string>("");
    const [publicIPGetLink, setPublicIPGetLink] = useState<string>("");
    const [oneSignalAppId, setOneSignalAppId] = useState<string>("");
    const [oneSignalSenderId, setOneSignalSenderId] = useState<string>("");
    const [oneSignalAuthToken, setOneSignalAuthToken] = useState<string>("");
    const [oneSignalHost, setOneSignalHost] = useState<string>("");
    const [oneSignalPort, setOneSignalPort] = useState<string>("");
    const [min100xSellQty, setMin100xSellQty] = useState<string>("");
    const [wBnbContractAddress, setWBnbContractAddress] = useState<string>("");
    const [pancakeSwapRouterAddressV2, setPancakeSwapRouterAddressV2] = useState<string>("");
    const [pancakeSwapRouterEndPoint, setPancakeSwapRouterEndPoint] = useState<string>("");
    const [gasLimit, setGasLimit] = useState<string>("");
    const [pancakeSwapV1ExchangeUrl, setPancakeSwapV1ExchangeUrl] = useState<string>("");
    const [pancakeSwapV2ExchangeUrl, setPancakeSwapV2ExchangeUrl] = useState<string>("");

    useEffect(() => {
        (async () => {
            let { status, content, message } = await altbaseService.getApplicationSettings();
            if( status === "success") {
                setApiUrl(content.apiUrl);
                setPancakeSwapRouterAddress(content.pancakeSwapRouterAddress);
                setPancakeSwapRouterPathAddress(content.pancakeSwapRouterPathAddress);
                setXTokenContractAddress(content.xTokenContractAddress);
                setBlockchainEndPoint(content.blockchainEndPoint);
                setCointMarketAPIKey(content.cointMarketAPIKey);
                setCoinMarketAPIUrl(content.coinMarketAPIUrl);
                setBscscanTxnLink(content.bscscanTxnLink);
                setBscScanAddressLink(content.bscScanAddressLink);
                setCointMarketCapAPIKey(content.cointMarketCapAPIKey);
                setSimplexVersion(content.simplexVersion);
                setSimplexAPIUrl(content.simplexAPIUrl);
                setSimplexAPIKey(content.simplexAPIKey);
                setSimplexPartner(content.simplexPartner);
                setSimplexPaymentUrl(content.simplexPaymentUrl);
                setSimplexPaymentFlowType(content.simplexPaymentFlowType);
                setSimplexReturnSuccessUrl(content.simplexReturnSuccessUrl);
                setSimplexReturnFailUrl(content.simplexReturnFailUrl);
                setSimplexPaymentStatusUrl(content.simplexPaymentStatusUrl);
                setPublicIPGetLink(content.publicIPGetLink);
                setOneSignalAppId(content.oneSignalAppId);
                setOneSignalSenderId(content.oneSignalSenderId);
                setOneSignalAuthToken(content.oneSignalAuthToken);
                setOneSignalHost(content.oneSignalHost);
                setOneSignalPort(content.oneSignalPort);
                setMin100xSellQty(content.min100xSellQty);
                setWBnbContractAddress(content.wBnbContractAddress);
                setPancakeSwapRouterAddressV2(content.pancakeSwapRouterAddressV2);
                setPancakeSwapRouterEndPoint(content.pancakeSwapRouterEndPoint);
                setGasLimit(content.gasLimit);
                setPancakeSwapV1ExchangeUrl(content.pancakeSwapV1ExchangeUrl);
                setPancakeSwapV2ExchangeUrl(content.pancakeSwapV2ExchangeUrl);
            }
            else {
                console.log("failed");
            }
        })();
    },[])

    const saveHandler = () => {
        ( async () => {
            let data = {
                apiUrl: apiUrl,
                pancakeSwapRouterAddress: pancakeSwapRouterAddress,
                xTokenContractAddress: xTokenContractAddress,
                pancakeSwapRouterPathAddress: pancakeSwapRouterPathAddress,
                blockchainEndPoint: blockchainEndPoint,
                cointMarketAPIKey: cointMarketAPIKey,
                coinMarketAPIUrl: coinMarketAPIUrl,
                bscscanTxnLink: bscscanTxnLink,
                cointMarketCapAPIKey: cointMarketCapAPIKey,
                simplexVersion: simplexVersion,
                simplexAPIUrl: simplexAPIUrl,
                simplexAPIKey: simplexAPIKey,
                simplexPartner: simplexPartner,
                simplexPaymentUrl: simplexPaymentUrl,
                simplexPaymentFlowType: simplexPaymentFlowType,
                simplexReturnSuccessUrl: simplexReturnSuccessUrl,
                simplexReturnFailUrl: simplexReturnFailUrl,
                simplexPaymentStatusUrl: simplexPaymentStatusUrl,
                publicIPGetLink: publicIPGetLink,
                oneSignalAppId: oneSignalAppId,
                oneSignalSenderId: oneSignalSenderId,
                oneSignalAuthToken: oneSignalAuthToken,
                oneSignalHost: oneSignalHost,
                oneSignalPort: oneSignalPort,
                min100xSellQty: min100xSellQty,
                wBnbContractAddress: wBnbContractAddress,
                pancakeSwapRouterAddressV2: pancakeSwapRouterAddressV2,
                pancakeSwapRouterEndPoint: pancakeSwapRouterEndPoint,
                gasLimit: gasLimit,
                bscScanAddressLink: bscScanAddressLink,
                pancakeSwapV1ExchangeUrl: pancakeSwapV1ExchangeUrl,
                pancakeSwapV2ExchangeUrl: pancakeSwapV2ExchangeUrl,
            }
            let { status, content, message } = await altbaseService.updateApplicationSettings(data);
            if( status === "success" ) {
                toast.success('Successfully toasted!')
            }
        })();
    }

    return (
        <div className='p-4'>
            <div className="grid md:grid-cols-2 gap-4">
                <LabelInput1 text={apiUrl} onChangeHandler={setApiUrl} className="mt-4" label="API Url *" placeholder="https://api.100xcoin.io/" ></LabelInput1>
                <LabelInput1 text={pancakeSwapRouterAddress} onChangeHandler={setPancakeSwapRouterAddress} className="mt-4" label="Pancake Swap Router Address *" placeholder="0x05fF2B0DB69458A0750badebc4f9e13aDd608C7F" ></LabelInput1>
                <LabelInput1 text={pancakeSwapRouterPathAddress} onChangeHandler={setPancakeSwapRouterPathAddress} className="mt-4" label="Pancake Swap Router Path Address *" placeholder={`["0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c","0x016c285d5b918b92aa85ef1e147498badfe30d69"]`} ></LabelInput1>
                <LabelInput1 text={xTokenContractAddress} onChangeHandler={setXTokenContractAddress} className="mt-4" label="xToken Contract Address *" placeholder="0x016c285d5b918b92aa85ef1e147498badfe30d69" ></LabelInput1>
                <LabelInput1 text={blockchainEndPoint} onChangeHandler={setBlockchainEndPoint} className="mt-4" label="Block Chain EndPoint *" placeholder="https://bsc-mainnet.web3api.com/v1/1D38BXJIZ7GS3XNTYY77FA5E1H49W9V8B4" ></LabelInput1>
                <LabelInput1 text={cointMarketAPIKey} onChangeHandler={setCointMarketAPIKey} className="mt-4" label="Coin Market API-Key *" placeholder="d8e59f61-4f78-4b2a-8b4a-d7118f5e6f7d" ></LabelInput1>
                <LabelInput1 text={coinMarketAPIUrl} onChangeHandler={setCoinMarketAPIUrl} className="mt-4" label="Coin Market API-Url *" placeholder="https://pro-api.coinmarketcap.com" ></LabelInput1>
                <LabelInput1 text={bscscanTxnLink} onChangeHandler={setBscscanTxnLink} className="mt-4" label="Bsc Scan Transaction Link *" placeholder="https://bscscan.com/tx/" ></LabelInput1>
                <LabelInput1 text={bscScanAddressLink} onChangeHandler={setBscScanAddressLink} className="mt-4" label="Bsc Scan Address Link *" placeholder="https://bscscan.com/address/" ></LabelInput1>
                <LabelInput1 text={cointMarketCapAPIKey} onChangeHandler={setCointMarketCapAPIKey} className="mt-4" label="Coin Market Cap API-Key *" placeholder="DEPRECATED" ></LabelInput1>
                <LabelInput1 text={simplexVersion} onChangeHandler={setSimplexVersion} className="mt-4" label="Simplex Version *" placeholder="1" ></LabelInput1>
                <LabelInput1 text={simplexAPIUrl} onChangeHandler={setSimplexAPIUrl} className="mt-4" label="Simplex API Url *" placeholder="https://backend-wallet-api.simplexcc.com/" ></LabelInput1>
                <LabelInput1 text={simplexAPIKey} onChangeHandler={setSimplexAPIKey} className="mt-4" label="Simplex API key *" placeholder="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwYXJ0bmVyIjoiMTAweGNvaW4iLCJpcCI6WyIxMzQuMTIyLjExLjIwMiJdLCJzYW5kYm94IjpmYWxzZX0.ti_dYgXOIg_7nXYhzW65sv2xydpcItnvxCTc3QwfaDA" ></LabelInput1>
                <LabelInput1 text={simplexPartner} onChangeHandler={setSimplexPartner} className="mt-4" label="Simplex Partner *" placeholder="100xcoin" ></LabelInput1>
                <LabelInput1 text={simplexPaymentUrl} onChangeHandler={setSimplexPaymentUrl} className="mt-4" label="Simplex Payment Url *" placeholder="https://checkout.simplexcc.com/payments/new" ></LabelInput1>
                <LabelInput1 text={simplexPaymentFlowType} onChangeHandler={setSimplexPaymentFlowType} className="mt-4" label="Simplex Payment Flow Type *" placeholder="wallet" ></LabelInput1>
                <LabelInput1 text={simplexReturnSuccessUrl} onChangeHandler={setSimplexReturnSuccessUrl} className="mt-4" label="Simplex Payment Success Return Url *" placeholder="https://www.100xcoin.io/" ></LabelInput1>
                <LabelInput1 text={simplexReturnFailUrl} onChangeHandler={setSimplexReturnFailUrl} className="mt-4" label="Simplex Payment Fail Return Url *" placeholder="https://www.100xcoin.io/support" ></LabelInput1>
                <LabelInput1 text={simplexPaymentStatusUrl} onChangeHandler={setSimplexPaymentStatusUrl} className="mt-4" label="Simplex Payment Status Url *" placeholder="https://payment-status.simplex.com/#/payment/" ></LabelInput1>
                <LabelInput1 text={publicIPGetLink} onChangeHandler={setPublicIPGetLink} className="mt-4" label="User's Public IP get url *" placeholder="https://api.ipify.org/?format=json" ></LabelInput1>
                <LabelInput1 text={oneSignalAppId} onChangeHandler={setOneSignalAppId} className="mt-4" label="One Signal App Id *" placeholder="cb6e11a9-bb53-4324-b0bc-2caf2ef1e53f" ></LabelInput1>
                <LabelInput1 text={oneSignalSenderId} onChangeHandler={setOneSignalSenderId} className="mt-4" label="One Signal Sender Id *" placeholder="900419935998" ></LabelInput1>
                <LabelInput1 text={oneSignalAuthToken} onChangeHandler={setOneSignalAuthToken} className="mt-4" label="One Signal Auth Token *" placeholder="Basic M2YyYzM1ZTktMDUzNi00ZjQ2LTllMjEtMGUxZmVkOGU1NGVj" ></LabelInput1>
                <LabelInput1 text={oneSignalHost} onChangeHandler={setOneSignalHost} className="mt-4" label="One Signal Host *" placeholder="onesignal.com" ></LabelInput1>
                <LabelInput1 text={oneSignalPort} onChangeHandler={setOneSignalPort} className="mt-4" label="One Signal Port *" placeholder="443" ></LabelInput1>
                <LabelInput1 text={min100xSellQty} onChangeHandler={setMin100xSellQty} className="mt-4" label="Minimum 100x Sell Quantity *" placeholder="10" ></LabelInput1>
            </div>
            <div className='w-full flex justify-center mt-12'>
                <Button1 className='w-32' text='Save' confirming onClick={saveHandler} />
            </div>
        </div>
    )
}

export default SiteSettings
