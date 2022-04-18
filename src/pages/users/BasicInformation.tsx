import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LabelComponent from 'components/atoms/LabelComponent';
import Button2 from 'components/atoms/Button2';
import XLogo from 'assets/imgs/XLogo.png';

export interface IBasicInformation {
    email: string;
    emailStatus: string;
    secret: string;
    lastSeen: string;
    invitationCode: string;
    status: boolean;
    invitedBy: string;
    uuid: string;
    role: string;
    authentication: boolean;
    lastLogin: string;
}
const BasicInformation = (props: IBasicInformation) => {
    const navigate = useNavigate();
    useEffect(() => {
        setEmail(props.email);
        setEmailStatus(props.emailStatus);
        setSecret(props.secret);
        setLastSeen(props.lastSeen);
        setInvitationCode(props.invitationCode);
        setStatus(props.status);
        setInvitedBy(props.invitedBy);
        setUuid(props.uuid);
        setRole(props.role);
        setLastLogin(props.lastLogin);
    }, [props]);
    const [email, setEmail] = useState<string>(props.email);
    const [emailStatus, setEmailStatus] = useState<string>(props.emailStatus);
    const [secret, setSecret] = useState<string>(props.secret);
    const [lastSeen, setLastSeen] = useState<string>(props.lastSeen);
    const [invitationCode, setInvitationCode] = useState<string>(props.invitationCode);
    const [status, setStatus] = useState<boolean>(props.status);
    const [invitedBy, setInvitedBy] = useState<string>(props.invitedBy);
    const [uuid, setUuid] = useState<string>(props.uuid);
    const [role, setRole] = useState<string>(props.role);
    const [authentication, setAuthentication] = useState<boolean>(props.authentication);
    const [lastLogin, setLastLogin] = useState<string>(props.lastLogin);

    const onBack = () => {
        navigate(-1);
    }

    return (
        <div className="p-4 bg-white flex flex-col">
            <div className="grid md:grid-cols-5">
                <div className="md:col-span-2 flex items-center flex-col">
                    <img className='h-36 m-2 rounded-md overflow-hidden' src={XLogo} alt="XLogo" />
                    <span className="font-bold text-xl">
                        User
                    </span>
                </div>
                <div>
                    <LabelComponent title="Email" text={email}></LabelComponent>
                    <LabelComponent title="Email Verification Status" text={emailStatus ? "on " : "" + emailStatus} bage_class={`bg-green-500`} bage_text={emailStatus ? "Verified" : ""}></LabelComponent>
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
            <div className='w-full flex justify-center mt-8'>
                <Button2 className='w-32' text='Back' onClick={onBack}/>
            </div>
        </div>
    )
}

export default BasicInformation;