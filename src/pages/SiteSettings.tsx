import axios from 'axios';
import { useState, useEffect } from 'react';
import LabelInput1 from 'components/atoms/LabelInput1';
import LogoUploader from 'components/atoms/LogoUploader';
import SwitchButton from 'components/atoms/SwitchButton';
import Button1 from 'components/atoms/Button1';
import toast from 'react-hot-toast';
import altbaseService from "services/altbaseService";

const SiteSettings = () => {
    const [appName, setAppName] = useState<string>("");
    const [coinName, setCoinName] = useState<string>("");
    const [coinSymbol, setCoinSymbol] = useState<string>("");
    const [inviteLimit, setInviteLimit] = useState<string>("");
    const [logoUrl, setLogoUrl] = useState<string>("");
    const [endPoint, setEndPoint] = useState<string>("");
    const [apiKey, setApiKey] = useState<string>("");
    const [byPass, setByPass] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            let { status, content, message } = await altbaseService.getSiteSetting();
            if( status === "success") {
                setAppName(content.application_name);
                setCoinName(content.coin_name);
                setCoinSymbol(content.coin_symbol);
                setInviteLimit(content.invite_limit);
                setByPass(Boolean(content.registration_invitation_bypass));
                setLogoUrl(content.logo);
                setEndPoint(content.coinsmarketcap_endpoint);
                setApiKey(content.coinsmarketcap_api_key);
            }
            else {
                console.log("failed");
            }
        })();
    }, []); 

    const saveHandler = () => {
        ( async () => {
            let data = {
                application_name: appName,
                coin_name: coinName,
                coin_symbol: coinSymbol,
                invite_limit: parseInt(inviteLimit),
                registration_invitation_bypass: byPass ? 1 : 0,
                coinsmarketcap_endpoint: endPoint,
                coinsmarketcap_api_key: apiKey,
            }
            let { status, content, message } = await altbaseService.updateSiteSetting(data);
            if( status === "success" ) {
                toast.success('Successfully toasted!')
            }
        })();
    }
    
    return (
        <div className='p-4'>
            <div className="grid md:grid-cols-2 gap-4">
                <LabelInput1 text={appName} onChangeHandler={setAppName} className="mt-4" label="Application Name *" placeholder="100xAltbase" ></LabelInput1>
                <LabelInput1 text={coinName} onChangeHandler={setCoinName} className="mt-4" label="Coin Name *" placeholder="100xCoin" ></LabelInput1>
                <LabelInput1 text={coinSymbol} onChangeHandler={setCoinSymbol} className="mt-4" label="Coin Sumbol *" placeholder="100X" ></LabelInput1>
                <LabelInput1 text={inviteLimit} onChangeHandler={setInviteLimit} className="mt-4" label="Invite Limit *" placeholder="100" ></LabelInput1>
                <div>
                    <p>Logo</p>
                    <LogoUploader url={logoUrl}/>
                </div>
                <div>
                    <p>Registration Invitation ByPass</p>
                    <SwitchButton onChangeHandler={(x) => {
                        setByPass(x);
                        return x
                    }} value={byPass} />
                </div>
            </div>
            <div className='w-full flex justify-center'>
                <Button1 className='w-32' text='Save' confirming onClick={saveHandler} />
            </div>
        </div>
    )
}

export default SiteSettings
