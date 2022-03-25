import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "components/organism/DataTable";
import { IField } from 'components/atoms/Table';
import { prefix } from "constants/menuInfo";

const TxBuyBnbIndex = () => {
    const navigate = useNavigate();
    const [tableFields, setTableFields] = useState<IField[]>([
        {
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
        }, 
    ]);
    const [tableDatas, setTableDatas] = useState<any[]>([
        {
            sr_no: 1,
            email: "Thank You Email",
            payment_id: "feedback_received",
            status_1: <span>In-Progress</span>,
            action: {
                view: true,
                viewHandler: (id: number) => {
                    navigate(`${ prefix }/transaction-history/buy-bnb/details/${ id }`);
                }
            }
        }
    ]);
    return (<DataTable fields={tableFields} datas={tableDatas} />)
}

export default TxBuyBnbIndex;