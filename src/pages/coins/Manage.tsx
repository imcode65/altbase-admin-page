import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "components/organism/DataTable";
import { IField } from 'components/atoms/Table';
import { prefix } from "constants/menuInfo";
import SwitchButton from 'components/atoms/SwitchButton';
import { SearchPanelCoins } from 'components/moleculars/SearchPanel';

const Manage = () => {
    const navigate = useNavigate();
    const [tableFields, setTableFields] = useState<IField[]>([
        {
            text: "Sr.no.",
            code: "sr_no"
        }, {
            text: "Name",
            code: "name"
        }, {
            text: "Symbol",
            code: "symbol"
        }, {
            text: "Coin Category",
            code: "coin_category"
        }, {
            text: "Buy Creteria (100x)",
            code: "buy_creteria"
        }, {
            text: "Status",
            code: "status"
        }, {
            text: "Action",
            code: "action"
        }, 
    ]);
    const [tableDatas, setTableDatas] = useState<any[]>([
        {
            sr_no: 1,
            name: "Tether USD",
            symbol: "USDT",
            coin_category: "Featured Coin",
            buy_creteria: "0",
            status: <SwitchButton onChangeHandler={async (x: boolean) => {
                return x;
            }} confirming />,
            action: {
                edit: true,
                editHandler: (id: number) => {
                    navigate(`${ prefix }/coins/edit/${ id }`);
                },
                view: true,
                viewHandler: (id: number) => {
                    navigate(`${ prefix }/coins/view/${ id }`);
                },
            }
        }
    ]);
    const [searchName, setSearchName] = useState<string>("");
    const [searchStatus, setSearchStatus] = useState<string>("");
    const clear = () => {
        setSearchName("");
        setSearchStatus("");
    };
    return (
        <div>
            <SearchPanelCoins
                searchName={searchName}
                setSearchName={setSearchName}
                searchStatus={searchStatus}
                setSearchStatus={setSearchStatus}
                clear={clear}
            />
            <DataTable fields={tableFields} datas={tableDatas} />
        </div>
    )
}

export default Manage;