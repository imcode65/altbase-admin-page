import Input1 from "components/atoms/Input1";
import Button1 from "components/atoms/Button1";
import Select2 from "components/atoms/Select2";

export const SearchPanelEmailTemplate = () => {
    return (
        <div className="mb-4 p-4 grid grid-cols-6 gap-4 bg-white">
            <Input1 placeholder="Search by name" />
            <Input1 placeholder="Search by slug" />
            <Input1 placeholder="Search by subject" />
            <Input1 placeholder="Search by from" />
            <Input1 placeholder="Search by from email" />
            <Button1 text="Clear" />
        </div>
    )
}

export const SearchPanelCms = () => {
    return (
        <div className="mb-4 p-4 grid grid-cols-4 gap-4 bg-white">
            <Input1 placeholder="Search by name" />
            <Input1 placeholder="Search by slug" />
            <Select2 list={["Select Status", "Active", "Inactive"]} />
            <Button1 text="Clear" />
        </div>
    )
}

export const SearchPanelUsers = () => {
    return <div>SearchPanelUsers</div>
}

export const SearchPanelCoinCategory = () => {
    return <div>SearchPanelCoinCategory</div>
}

export const SearchPanelCoins = () => {
    return <div>SearchPanelCoins</div>
}

export const SearchPanelCoinNews = () => {
    return <div>SearchPanelCoinNews</div>
}

export const SearchPanelTxBuyBnb = () => {
    return <div>SearchPanelTxBuyBnb</div>
}
