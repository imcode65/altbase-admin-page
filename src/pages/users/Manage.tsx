import { useState } from "react";
import DataTable from "components/organism/DataTable";
import { ITable } from 'components/atoms/Table';

const Manage = () => {
    const [tableData, setTableData] = useState<ITable>({
        fields: [{
            text: "Sr.no",
            code: "sr_no"
        }, {
            text: "Email",
            code: "email"
        }, {
            text: "Invitation Code",
            code: "invitation_code"
        }, {
            text: "Email Verified",
            code: "email_verified"
        }, {
            text: "2FA Status",
            code: "_2fa_status"
        }, {
            text: "Status",
            code: "Invited By"
        }, {
            text: "Action",
            code: "sr_no"
        }, ],
        datas: []
    });
    return (
        <DataTable tableData={tableData} />
    )
}

export default Manage;