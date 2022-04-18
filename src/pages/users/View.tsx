import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BasicInformation from 'pages/users/BasicInformation';
import Wallet from 'pages/users/Wallet';
import InviteFriends from 'pages/users/InviteFriends';
import altbaseService, { IUser } from "services/altbaseService";
import toast from 'react-hot-toast';

const View = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [tabId, setTabId] = useState<number>(1);

    // BasicInformation
    const [email, setEmail] = useState<string>("");
    const [emailStatus, setEmailStatus] = useState<string>("");
    const [secret, setSecret] = useState<string>("");
    const [lastSeen, setLastSeen] = useState<string>("");
    const [invitationCode, setInvitationCode] = useState<string>("");
    const [status, setStatus] = useState<boolean>(false);
    const [invitedBy, setInvitedBy] = useState<string>("");
    const [uuid, setUuid] = useState<string>("");
    const [role, setRole] = useState<string>("");
    const [authentication, setAuthentication] = useState<boolean>(false);
    const [lastLogin, setLastLogin] = useState<string>("");
    const [walletAddress, setWalletAddress] = useState<string>("");
    const onTab = (id: number) => {
        setTabId(id);
    }

    useEffect(() => {
        (async () => {
            let { status, content, message }: { content: IUser; status: string; message: string } = await altbaseService.getUser(parseInt(id || "0"))
            if (status === "success") {
                setEmail(content.email || "");
                setEmailStatus(content.email_verified_at || "");
                setSecret(content.two_factor_secret || "");
                setLastSeen(content.last_seen_at || "");
                setInvitationCode(content.invitation_code || "");
                setStatus(Boolean(content.is_active));
                setInvitedBy(content.invitedBy?.email || "");
                setUuid(content.uuid || "");
                setRole((content.roles || []).map((role: { name?: string; description?: string}) => role.name).join(","));
                setLastLogin(content.last_login_at || "");
                setWalletAddress(content.wallet?.wallet_address || "");
            } else {
                toast.error(message);
            }
        })()
    }, []);

    return (
        <div className="p-4 bg-white mt-8">
            <div className="flex flex-row overflow-auto flex-nowrap text-sm font-semibold border-solid border-b-2 h-10">
                <div className={`flex px-4 md:w-36 justify-center ${tabId === 1 ? "border-solid border-b-4 border-indigo-600": ""}`} onClick={() => onTab(1)}> Basic Information </div>
                <div className={`flex px-4 md:w-36 justify-center ${tabId === 2 ? "border-solid border-b-4 border-indigo-600": ""}`} onClick={() => onTab(2)}> Wallet </div>
                <div className={`flex px-4 md:w-36 justify-center ${tabId === 3 ? "border-solid border-b-4 border-indigo-600": ""}`} onClick={() => onTab(3)}> Invite Friend </div>
            </div>
            <div>
                {
                    tabId === 1 ? (
                    <BasicInformation
                        email={email}
                        emailStatus={emailStatus}
                        secret={secret}
                        lastSeen={lastSeen}
                        invitationCode={invitationCode}
                        status={status}
                        invitedBy={invitedBy}
                        uuid={uuid}
                        role={role}
                        authentication={authentication}
                        lastLogin={lastLogin}
                    ></BasicInformation>
                    ) : ( tabId === 2 ? (
                        <Wallet
                            walletAddress={walletAddress}
                        ></Wallet>
                    ) : ( tabId === 3 ? (
                        <InviteFriends
                            
                        ></InviteFriends>
                    ) : ""))
                }
            </div>
        </div>
    )
}

export default View;