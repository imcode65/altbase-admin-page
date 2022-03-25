import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "components/organism/DataTable";
import { ITable } from 'components/atoms/Table';
import { prefix } from "constants/menuInfo";

const TxBuyBnbIndex = () => {
    const navigate = useNavigate();
    const [tableData, setTableData] = useState<ITable>({
        fields: [{
            text: "Sr.no.",
            code: "sr_no"
        }, {
            text: "Email",
            code: "email"
        }, {
            text: "Payment Id",
            code: "payment_id"
        }, {
            text: "Status",
            code: "status_1"
        }, {
            text: "Action",
            code: "action"
        }, ],
        datas: [{
            sr_no: 1,
            email: "Thank You Email",
            payment_id: "feedback_received",
            status_1: <span>In-Progress</span>,
            action: {
                view: true,
                viewHandler: (id: number) => {
                    navigate(`${ prefix }/transaction-history/buy-bnb/edit/${ id }`);
                }
            }
        }]
    });
    return (<DataTable tableData={tableData} />)
}

export default TxBuyBnbIndex;