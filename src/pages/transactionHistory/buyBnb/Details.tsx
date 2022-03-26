import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LabelComponent from 'components/atoms/LabelComponent';
import Button2 from 'components/atoms/Button2';
import { prefix } from "constants/menuInfo";
import XLogo from 'assets/imgs/XLogo.png';

const Details = () => {
    const navigate = useNavigate();
    const [paymentID, setPaymentID] = useState<string>("8976d52d-5ccc-4633-9a46-f6b919b23543");
    const [email, setEmail] = useState<string>("KalBet0605@gmaill.com");
    const [createdAt, setCreatedAt] = useState<string>("2022-03-24 12:26:55");
    const [uuid, setUuid] = useState<string>("e2bde230-da61-11eb-9da3-0bf437a03a49");
    const [status, setStatus] = useState<boolean>(true);
    const [walletAddress, setWalletAddress] = useState<string>("0x7ec7A13381973Aa0E3B3ADE652F2e1eD98A31882");

    const onBack = () => {
        navigate(`${ prefix }/users/manage`);
    }

    return (
        <div className="p-4 bg-white flex flex-col">
            <div className="grid md:grid-cols-3">
                <div>
                    <LabelComponent title="Payment ID" text={paymentID}></LabelComponent>
                    <LabelComponent title="User's Email" text={email}></LabelComponent>
                </div>
                <div>
                    <LabelComponent title="Created At" text={createdAt}></LabelComponent>
                    <LabelComponent title="User's UUID" text={uuid}></LabelComponent>
                </div>
                <div>
                    <LabelComponent title="Status" bage_class={`${status ? 'bg-yellow-500': 'bg-red-500'}` } bage_text={`${status ? 'In-Progress': 'Inactive'}`}></LabelComponent>
                    <LabelComponent title="User's Wallet Address" text={walletAddress}></LabelComponent>
                </div>
            </div>
            <div className='w-full flex justify-center mt-8'>
                <Button2 className='w-32' text='Back' onClick={() => onBack()}/>
            </div>
        </div>
    )
}

export default Details;