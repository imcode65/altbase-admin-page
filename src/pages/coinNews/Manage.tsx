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
            text: "Coin",
            code: "coin"
        }, {
            text: "Status",
            code: "status"
        }, {
            text: "Action",
            code: "action"
        }, ],
        datas: [{
            sr_no: 1,
            title: "Thank You Email",
            coin: "feedback_received",
            status: {
                changeHandler: async (val: boolean) => {
                    return val
                },
            },
            action: {
                edit: false,
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