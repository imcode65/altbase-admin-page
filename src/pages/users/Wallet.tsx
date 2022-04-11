import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LabelComponent from 'components/atoms/LabelComponent';
import Button2 from 'components/atoms/Button2';

const Wallet = () => {
    const navigate = useNavigate();
    const [walletAddress, setWalletAddress] = useState<string>("");

    const onBack = () => {
        navigate(-1);
    }

    return (
        <div className="p-4 bg-white">
            <LabelComponent title="WalletAddress" text={`${walletAddress ? walletAddress: 'NA'}`}></LabelComponent>
            <div className='w-full flex justify-center mt-8 col-span-3'>
                <Button2 className='w-32' text='Back' onClick={onBack}/>
            </div>
        </div>
    )
}

export default Wallet;