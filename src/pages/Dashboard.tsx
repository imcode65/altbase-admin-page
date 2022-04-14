import BoardCard from "components/atoms/BoardCard";
import { useState, useEffect } from 'react';
import altbaseService from "services/altbaseService";

const Dashboard = () => {
    const [totalUsersCount, setTotalUsersCount] = useState<number>(0);
    const [emailVerifiedUsersCount, setEmailVerifiedUsersCount] = useState<number>(0);
    const [twofaActiveUsersCount, setTwofaActiveUsersCount] = useState<number>(0);
    const [currentInviteLimit, setCurrentInviteLimit] = useState<number>(0);
    const [totalCoins, setTotalCoins] = useState<number>(0);
    const [successfulBnbBuys, setSuccessfulBnbBuys] = useState<number>(0);
    const [pendingBnbBuys, setPendingBnbBuys] = useState<number>(0);
    const [failedBnbBuys, setFailedBnbBuys] = useState<number>(0);

    useEffect(() => {
        (async () => {
            let { status, content, message } = await altbaseService.getDashboard();
            if( status === "success") {
                setTotalUsersCount(content.totalUsersCount);
                setEmailVerifiedUsersCount(content.emailVerifiedUsersCount);
                setTwofaActiveUsersCount(content.twofaActiveUsersCount);
                setCurrentInviteLimit(content.currentInviteLimit);
                setTotalCoins(content.totalCoins);
                setSuccessfulBnbBuys(content.successfulBnbBuys);
                setPendingBnbBuys(content.pendingBnbBuys);
                setFailedBnbBuys(content.failedBnbBuys);
            }
            else {
                console.log("failed");
            }
        })();
    })

    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <BoardCard className="bg-color-02" infoNumber={totalUsersCount} infoText="Total Users" />
            <BoardCard className="bg-color-03" infoNumber={emailVerifiedUsersCount} infoText="2FA Active Users" />
            <BoardCard className="bg-color-04" infoNumber={twofaActiveUsersCount} infoText="Default Invitation Limit" />
            <BoardCard className="bg-color-05" infoNumber={currentInviteLimit} infoText="Email Verified Users" />
            <BoardCard className="bg-color-06" infoNumber={totalCoins} infoText="Total Coins" />
            <BoardCard className="bg-color-07" infoNumber={successfulBnbBuys} infoText="Successful BNB Buys" />
            <BoardCard className="bg-color-08" infoNumber={pendingBnbBuys} infoText="Pending BNB Buys" />
            <BoardCard className="bg-color-09" infoNumber={failedBnbBuys} infoText="Failed BNB Buys" />
        </div>
    )
}

export default Dashboard
