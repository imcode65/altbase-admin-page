import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "components/organism/DataTable";
import { IField } from 'components/atoms/Table';
import { prefix } from "constants/menuInfo";
import { SearchPanelTxBuyBnb } from 'components/moleculars/SearchPanel';
import { confirm } from "react-confirm-box";
import ConfirmAlert from "components/moleculars/ConfirmAlert";

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
    const [searchEmail, setSearchEmail] = useState<string>("");
    const [searchPaymentId, setSearchPaymentId] = useState<string>("");
    const [searchStatus, setSearchStatus] = useState<string>("");
    const clear = () => {
        setSearchEmail("");
        setSearchPaymentId("");
        setSearchStatus("");
    };
    return (
        <div>
            <SearchPanelTxBuyBnb
                searchEmail={searchEmail}
                setSearchEmail={setSearchEmail}
                searchPaymentId={searchPaymentId}
                setSearchPaymentId={setSearchPaymentId}
                searchStatus={searchStatus}
                setSearchStatus={setSearchStatus}
                clear={clear}
            />
            <DataTable fields={tableFields} datas={tableDatas} additionalBtns={[{
                text: "Reset Untracked Events",
                clickHandler: () => {
                    (async () => {
                        const result = await confirm("Are you sure?", {
                            // @ts-ignore
                            render: (message, onConfirm, onCancel) => <ConfirmAlert onConfirm={onConfirm} onCancel={onCancel} />
                        });
                        if (result) {
                            navigate(0)
                        }
                    })()
                }
            }]} />
        </div>
    )
}

export default TxBuyBnbIndex;