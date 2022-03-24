import LabelInput1 from 'components/atoms/LabelInput1';
import LogoUploader from 'components/atoms/LogoUploader';
import SwitchButton from 'components/atoms/SwitchButton';
import Button1 from 'components/atoms/Button1';

const SiteSettings = () => {
    return (
        <div className='p-4'>
            <div className="grid grid-cols-2 gap-4">
                <LabelInput1 className="mt-4" label="Application Name *" placeholder="100xAltbase" ></LabelInput1>
                <LabelInput1 className="mt-4" label="Coin Name *" placeholder="100xCoin" ></LabelInput1>
                <LabelInput1 className="mt-4" label="Coin Sumbol *" placeholder="100X" ></LabelInput1>
                <LabelInput1 className="mt-4" label="Invite Limit *" placeholder="100" ></LabelInput1>
                <div>
                    <p>Logo</p>
                    <LogoUploader />
                </div>
                <div>
                    <p>Registration Invitation ByPass</p>
                    <SwitchButton />
                </div>
            </div>
            <div className='w-full flex justify-center'>
                <Button1 className='w-32' text='Save' />
            </div>
        </div>
    )
}

export default SiteSettings
