import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import LabelComponent from 'components/atoms/LabelComponent';
import Button2 from 'components/atoms/Button2';
import toast from 'react-hot-toast';
import altbaseService from 'services/altbaseService';

const Details = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [paymentID, setPaymentID] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [createdAt, setCreatedAt] = useState<string>("");
    const [uuid, setUuid] = useState<string>("");
    const [status, setStatus] = useState<boolean>(true);
    const [walletAddress, setWalletAddress] = useState<string>("");

    const onBack = () => {
        navigate(-1);
    }

    useEffect(() => {
        (async () => {
            const {status, message, content} = await altbaseService.getTxHistoryById(parseInt(id || ""));
            if (status === "success") {
                setPaymentID(content.payment_id);
                setEmail(content.user_details.email);
                setCreatedAt(content.created_at);
                setUuid(content.user_details.uuid);
                setStatus(content.status === 0 ? true : false);
                setWalletAddress(content.wallet_details.wallet_address);
            } else {
                toast.error(message);
            }
        })()
    }, []);

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
                <Button2 className='w-32' text='Back' onClick={onBack}/>
            </div>
        </div>
    )
}

export default Details;