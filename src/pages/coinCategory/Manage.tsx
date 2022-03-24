import { useState } from "react";
import DataTable from "components/organism/DataTable";
import { ITable } from 'components/atoms/Table';

const Manage = () => {
    const [tableData, setTableData] = useState<ITable>({
        fields: [{
            text: "Sr.no.",
            code: "sr_no"
        }, {
            text: "Name",
            code: "name"
        }, {
            text: "Slug",
            code: "slug"
        }, {
            text: "Subject",
            code: "subject"
        }, {
            text: "From",
            code: "from"
        }, {
            text: "From Mail",
            code: "from_mail"
        }, {
            text: "Action",
            code: "action"
        }, ],
        datas: [{
            sr_no: 1,
            name: "Thank You Email",
            slug: "feedback_received",
            subject: "Altbase Feedback Request",
            from: "<%=closing_text%>",
            from_mail: "info@altbase.com",
            action: ""
        }]
    });
    return (
        <DataTable tableData={tableData} />
    )
}

export default Manage;