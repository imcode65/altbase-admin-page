import BoardCard from "components/atoms/BoardCard"

const Dashboard = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <BoardCard className="bg-color-02" infoNumber={0} infoText="Total Users" />
            <BoardCard className="bg-color-03" infoNumber={0} infoText="2FA Active Users" />
            <BoardCard className="bg-color-04" infoNumber={0} infoText="Default Invitation Limit" />
            <BoardCard className="bg-color-05" infoNumber={0} infoText="Email Verified Users" />
            <BoardCard className="bg-color-06" infoNumber={0} infoText="Total Coins" />
            <BoardCard className="bg-color-07" infoNumber={0} infoText="Successful BNB Buys" />
            <BoardCard className="bg-color-08" infoNumber={0} infoText="Pending BNB Buys" />
            <BoardCard className="bg-color-09" infoNumber={0} infoText="Failed BNB Buys" />
        </div>
    )
}

export default Dashboard
