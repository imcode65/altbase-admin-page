import { FC } from "react";
import Input1 from "components/atoms/Input1";
import Button1 from "components/atoms/Button1";
import Select2 from "components/atoms/Select2";

interface ISearchPanelEmailTemplate {
    searchName?: string;
    setSearchName?: (x: string) => void;
    searchSlug?: string;
    setSearchSlug?: (x: string) => void;
    searchSubject?: string;
    setSearchSubject?: (x: string) => void;
    searchFrom?: string;
    setSearchFrom?: (x: string) => void;
    searchFromEmail?: string;
    setSearchFromEmail?: (x: string) => void;
    clear?: () => void;
}
export const SearchPanelEmailTemplate: FC<ISearchPanelEmailTemplate> = ({
    searchName="", setSearchName=()=>{},
    searchSlug="", setSearchSlug=()=>{},
    searchSubject="", setSearchSubject=()=>{},
    searchFrom="", setSearchFrom=()=>{},
    searchFromEmail="", setSearchFromEmail=()=>{},
    clear=()=>{},
}) => {
    return (
        <div className="mb-4 p-4 grid grid-cols-6 gap-4 bg-white">
            <Input1 value={searchName} onChangeHandler={setSearchName} placeholder="Search by name" />
            <Input1 value={searchSlug} onChangeHandler={setSearchSlug} placeholder="Search by slug" />
            <Input1 value={searchSubject} onChangeHandler={setSearchSubject} placeholder="Search by subject" />
            <Input1 value={searchFrom} onChangeHandler={setSearchFrom} placeholder="Search by from" />
            <Input1 value={searchFromEmail} onChangeHandler={setSearchFromEmail} placeholder="Search by from email" />
            <Button1 onClick={clear} text="Clear" />
        </div>
    )
}

interface ISearchPanelCms {
    searchName?: string;
    searchSlug?: string;
    searchStatus?: string;
    clear?: () => void;
}
export const SearchPanelCms: FC<ISearchPanelCms> = ({
    searchName="",
    searchSlug="",
    searchStatus="",
    clear=()=>{},
}) => {
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
    return (
        <div className="mb-4 p-4 grid grid-cols-4 gap-4 bg-white">
            <Input1 placeholder="Search by name" />
            <Input1 placeholder="Search by email" />
            <Select2 list={["Select email verification status", "Yes", "No"]} />
            <Select2 list={["Select 2 factor status", "Enabled", "Disabled"]} />
            <Select2 list={["Select status", "Active", "Inactive"]} />
            <Button1 text="Clear" />
        </div>
    )
}

export const SearchPanelCoinCategory = () => {
    return (
        <div className="mb-4 p-4 grid grid-cols-3 gap-4 bg-white">
            <Input1 placeholder="Search by title" />
            <Select2 list={["Select status", "Active", "Inactive"]} />
            <Button1 text="Clear" />
        </div>
    )
}

export const SearchPanelCoins = () => {
    return (
        <div className="mb-4 p-4 grid grid-cols-3 gap-4 bg-white">
            <Input1 placeholder="Search by name" />
            <Select2 list={["Select status", "Active", "Inactive"]} />
            <Button1 text="Clear" />
        </div>
    )
}

export const SearchPanelCoinNews = SearchPanelCoins;

export const SearchPanelTxBuyBnb = () => {
    return (
        <div className="mb-4 p-4 grid grid-cols-4 gap-4 bg-white">
            <Input1 placeholder="Search by email" />
            <Input1 placeholder="Search by payment id" />
            <Select2 list={["Select Status", "In-Progress", "Success", "Failed"]} />
            <Button1 text="Clear" />
        </div>
    )
}
