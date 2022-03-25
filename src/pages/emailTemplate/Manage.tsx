import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "components/organism/DataTable";
import { ITable } from 'components/atoms/Table';
import { prefix } from "constants/menuInfo";
import { SearchPanelEmailTemplate } from 'components/moleculars/SearchPanel';

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
            action: {
                edit: true,
                editHandler: (id: number) => {
                    navigate(`${ prefix }/email-template/edit/${ id }`);
                },
                view: true,
                viewHandler: (id: number) => {
                    navigate(`${ prefix }/email-template/edit/${ id }`);
                }
            }
        }]
    });
    return (
        <div>
            <SearchPanelEmailTemplate></SearchPanelEmailTemplate>
            <DataTable tableData={tableData} />
        </div>
    )
}

export default Manage;