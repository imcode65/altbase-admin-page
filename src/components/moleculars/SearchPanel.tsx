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
    setSearchName?: (x: string) => void;
    searchSlug?: string;
    setSearchSlug?: (x: string) => void;
    searchStatus?: string;
    setSearchStatus?: (x: string) => void;
    clear?: () => void;
}
export const SearchPanelCms: FC<ISearchPanelCms> = ({
    searchName="",
    setSearchName=()=>{},
    searchSlug="",
    setSearchSlug=()=>{},
    searchStatus="",
    setSearchStatus=()=>{},
    clear=()=>{},
}) => {
    return (
        <div className="mb-4 p-4 grid grid-cols-4 gap-4 bg-white">
            <Input1 value={searchName} onChangeHandler={setSearchName} placeholder="Search by name" />
            <Input1 value={searchSlug} onChangeHandler={setSearchSlug} placeholder="Search by slug" />
            <Select2 value={searchStatus} onChangeHandler={setSearchStatus} list={["Select Status", "Active", "Inactive"]} />
            <Button1 onClick={clear} text="Clear" />
        </div>
    )
}

interface ISearchPanelUsers {
    searchName?: string;
    setSearchName?: (x: string) => void;
    searchEmail?: string;
    setSearchEmail?: (x: string) => void;
    searchEmailVerification?: string;
    setSearchEmailVerification?: (x: string) => void;
    search2Factor?: string;
    setSearch2Factor?: (x: string) => void;
    searchStatus?: string;
    setSearchStatus?: (x: string) => void;
    clear?: () => void;
}
export const SearchPanelUsers: FC<ISearchPanelUsers> = ({
    searchName="",
    setSearchName=()=>{},
    searchEmail="",
    setSearchEmail=()=>{},
    searchEmailVerification="",
    setSearchEmailVerification=()=>{},
    search2Factor="",
    setSearch2Factor=()=>{},
    searchStatus="",
    setSearchStatus=()=>{},
    clear=()=>{},
}) => {
    return (
        <div className="mb-4 p-4 grid grid-cols-4 gap-4 bg-white">
            <Input1 value={searchName} onChangeHandler={setSearchName} placeholder="Search by name" />
            <Input1 value={searchEmail} onChangeHandler={setSearchEmail} placeholder="Search by email" />
            <Select2 value={searchEmailVerification} onChangeHandler={setSearchEmailVerification} list={["Select email verification status", "Yes", "No"]} />
            <Select2 value={search2Factor} onChangeHandler={setSearch2Factor} list={["Select 2 factor status", "Enabled", "Disabled"]} />
            <Select2 value={searchStatus} onChangeHandler={setSearchStatus} list={["Select status", "Active", "Inactive"]} />
            <Button1 onClick={clear} text="Clear" />
        </div>
    )
}

interface ISearchPanelCoinCategory {
    searchTitle?: string;
    setSearchTitle?: (x: string) => void;
    searchStatus?: string;
    setSearchStatus?: (x: string) => void;
    clear?: () => void;
}
export const SearchPanelCoinCategory: FC<ISearchPanelCoinCategory> = ({
    searchTitle="",
    setSearchTitle=()=>{},
    searchStatus="",
    setSearchStatus=()=>{},
    clear=()=>{},
}) => {
    return (
        <div className="mb-4 p-4 grid grid-cols-3 gap-4 bg-white">
            <Input1 value={searchTitle} onChangeHandler={setSearchTitle} placeholder="Search by title" />
            <Select2 value={searchStatus} onChangeHandler={setSearchStatus} list={["Select status", "Active", "Inactive"]} />
            <Button1 onClick={clear} text="Clear" />
        </div>
    )
}

interface ISearchPanelCoins {
    searchName?: string;
    setSearchName?: (x: string) => void;
    searchStatus?: string;
    setSearchStatus?: (x: string) => void;
    clear?: () => void;
}
export const SearchPanelCoins: FC<ISearchPanelCoins> = ({
    searchName="",
    setSearchName=()=>{},
    searchStatus="",
    setSearchStatus=()=>{},
    clear=()=>{},
}) => {
    return (
        <div className="mb-4 p-4 grid grid-cols-3 gap-4 bg-white">
            <Input1 value={searchName} onChangeHandler={setSearchName} placeholder="Search by name" />
            <Select2 value={searchStatus} onChangeHandler={setSearchStatus} list={["Select status", "Active", "Inactive"]} />
            <Button1 onClick={clear} text="Clear" />
        </div>
    )
}

export const SearchPanelCoinNews = SearchPanelCoins;

interface ISearchPanelCoins {
    searchEmail?: string;
    setSearchEmail?: (x: string) => void;
    searchPaymentId?: string;
    setSearchPaymentId?: (x: string) => void;
    searchStatus?: string;
    setSearchStatus?: (x: string) => void;
    clear?: () => void;
}
export const SearchPanelTxBuyBnb: FC<ISearchPanelCoins> = ({
    searchEmail="",
    setSearchEmail=()=>{},
    searchPaymentId="",
    setSearchPaymentId=()=>{},
    searchStatus="",
    setSearchStatus=()=>{},
    clear=()=>{},
}) => {
    return (
        <div className="mb-4 p-4 grid grid-cols-4 gap-4 bg-white">
            <Input1 value={searchEmail} onChangeHandler={setSearchEmail} placeholder="Search by email" />
            <Input1 value={searchPaymentId} onChangeHandler={setSearchPaymentId} placeholder="Search by payment id" />
            <Select2 value={searchStatus} onChangeHandler={setSearchStatus} list={["Select Status", "In-Progress", "Success", "Failed"]} />
            <Button1 onClick={clear} text="Clear" />
        </div>
    )
}
