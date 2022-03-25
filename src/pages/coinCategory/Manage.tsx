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
            text: "Title",
            code: "title"
        }, {
            text: "Status",
            code: "status"
        }, {
            text: "Action",
            code: "action"
        }, ],
        datas: [{
            sr_no: 1,
            title: "Featured Coin",
            status: {
                changeHandler: async (val: boolean) => {
                    return val
                },
            },
            action: {
                edit: true,
                editHandler: (id: number) => {
                    navigate(`${ prefix }/coin-category/edit/${ id }`);
                },
                view: false,
            }
        }]
    });
    return (
        <DataTable tableData={tableData} />
    )
}

export default Manage;