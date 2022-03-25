import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "components/organism/DataTable";
import { ITable } from 'components/atoms/Table';
import { prefix } from "constants/menuInfo";

const Manage = () => {
    const navigate = useNavigate();
    const [tableData, setTableData] = useState<ITable>({
        fields: [{
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
        }, ],
        datas: [{
            sr_no: 1,
            name: "Tether USD",
            symbol: "USDT",
            coin_category: "Featured Coin",
            buy_creteria: "0",
            status: {
                changeHandler: async (val: boolean) => {
                    return val
                },
            },
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
        }]
    });
    return (
        <DataTable tableData={tableData} />
    )
}

export default Manage;