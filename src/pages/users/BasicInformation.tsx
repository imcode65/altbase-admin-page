import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LabelComponent from 'components/atoms/LabelComponent';
import Button2 from 'components/atoms/Button2';
import { prefix } from "constants/menuInfo";
import XLogo from 'assets/imgs/XLogo.png';

const BasicInformation = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState<string>("KalBet0605@gmaill.com");
    const [emailStatus, setEmailStatus] = useState<string>("on 2022-03-25T20:35:53.000Z");
    const [secret, setSecret] = useState<string>("NA");
    const [lastSeen, setLastSeen] = useState<string>("NA");
    const [invitationCode, setInvitationCode] = useState<string>("e4q6hyly");
    const [status, setStatus] = useState<boolean>(true);
    const [invitedBy, setInvitedBy] = useState<string>("ADMIN");
    const [uuid, setUuid] = useState<string>("2faf4a40-ac79-11ec-94a0-b7886614fadb");
    const [role, setRole] = useState<string>("user");
    const [authentication, setAuthentication] = useState<boolean>(false);
    const [lastLogin, setLastLogin] = useState<string>("NA");

    const onBack = () => {
        navigate(`${ prefix }/users/manage`);
    }

    return (
        <div className="p-4 bg-white grid grid-cols-1 md:grid-cols-3">
            <div className="flex items-center flex-col">
                <img className='h-36 m-2 rounded-md overflow-hidden' src={XLogo} alt="XLogo" />
                <span className="font-bold text-xl">
                    User
                </span>
            </div>
            <div className="col-span-2 grid grid-cols-3">
                <div>
                    <LabelComponent title="Email" text={email}></LabelComponent>
                    <LabelComponent title="Email Verification Status" text={emailStatus} bage_class={`bg-green-500`} bage_text="Verified"></LabelComponent>
                    <LabelComponent title="Two Factor Secret" text={secret}></LabelComponent>
                    <LabelComponent title="Last seen at" text={lastSeen}></LabelComponent>
                </div>
                <div>
                    <LabelComponent title="Invitation Code" text={invitationCode}></LabelComponent>
                    <LabelComponent title="Status" bage_class={`${status ? 'bg-green-500': 'bg-red-500'}`} bage_text={`${status ? 'active': 'Inactive'}`}></LabelComponent>
                    <LabelComponent title="Invited By" text={invitedBy}></LabelComponent>
                    <LabelComponent title="UUID" text={uuid}></LabelComponent>
                </div>
                <div>
                    <LabelComponent title="Role" bage_text={role} bage_class={`bg-green-500`}></LabelComponent>
                    <LabelComponent title="Two Factor Authentication" bage_class={`${authentication ? 'bg-green-500': 'bg-red-500'}` } bage_text={`${status ? 'active': 'Inactive'}`}></LabelComponent>
                    <LabelComponent title="Last login at" text={lastLogin}></LabelComponent>
                </div>
            </div>
            <div className='w-full flex justify-center mt-8 col-span-3'>
                <Button2 className='w-32' text='Back' onClick={() => onBack()}/>
            </div>
        </div>
    )
}

export default BasicInformation;