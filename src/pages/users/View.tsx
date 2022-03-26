import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LabelComponent from 'components/atoms/LabelComponent';
import Button2 from 'components/atoms/Button2';
import BasicInformation from 'pages/users/BasicInformation';
import Wallet from 'pages/users/Wallet';
import InviteFriends from 'pages/users/InviteFriends';
import { prefix } from "constants/menuInfo";

const View = () => {
    const navigate = useNavigate();
    const [tabId, setTabId] = useState<number>(1);

    const onTab = (id: number) => {
        setTabId(id);
    }

    return (
        <div className="p-4 bg-white mt-8">
            <div className="flex flex-row overflow-auto flex-nowrap text-sm font-semibold border-solid border-b-2 h-10">
                <div className={`flex w-36 justify-center ${tabId === 1 ? "border-solid border-b-4 border-indigo-600": ""}`} onClick={() => onTab(1)}> Basic Information </div>
                <div className={`flex w-36 justify-center ${tabId === 2 ? "border-solid border-b-4 border-indigo-600": ""}`} onClick={() => onTab(2)}> Wallet </div>
                <div className={`flex w-36 justify-center ${tabId === 3 ? "border-solid border-b-4 border-indigo-600": ""}`} onClick={() => onTab(3)}> Invite Friend </div>
            </div>
            <div>
                {
                    tabId === 1 ? <BasicInformation></BasicInformation> : ( tabId === 2 ? <Wallet></Wallet> : ( tabId === 3 ? <InviteFriends></InviteFriends> : ""))
                }
            </div>
        </div>
    )
}

export default View;