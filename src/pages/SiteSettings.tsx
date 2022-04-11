import LabelInput1 from 'components/atoms/LabelInput1';
import LogoUploader from 'components/atoms/LogoUploader';
import SwitchButton from 'components/atoms/SwitchButton';
import Button1 from 'components/atoms/Button1';
import { useState } from 'react';
import toast from 'react-hot-toast';

const SiteSettings = () => {
    const [appName, setAppName] = useState<string>("");
    const [coinName, setCoinName] = useState<string>("");
    const [coinSymbol, setCoinSymbol] = useState<string>("");
    const [inviteLimit, setInviteLimit] = useState<string>("");

    const saveHandler = () => {
        toast.success('Successfully toasted!')
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
                    <LogoUploader />
                </div>
                <div>
                    <p>Registration Invitation ByPass</p>
                    <SwitchButton onChangeHandler={(x) => x} />
                </div>
            </div>
            <div className='w-full flex justify-center'>
                <Button1 className='w-32' text='Save' confirming onClick={saveHandler} />
            </div>
        </div>
    )
}

export default SiteSettings
