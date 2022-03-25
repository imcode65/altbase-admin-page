import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "components/organism/DataTable";
import { IField } from 'components/atoms/Table';
import { prefix } from "constants/menuInfo";
import { SearchPanelEmailTemplate } from 'components/moleculars/SearchPanel';

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
        }, 
    ]);
    const [tableDatas, setTableDatas] = useState<any[]>([
        {
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
                    navigate(`${ prefix }/email-template/view/${ id }`);
                }
            }
        }
    ]);
    const [searchName, setSearchName] = useState<string>("");
    const [searchSlug, setSearchSlug] = useState<string>("");
    const [searchSubject, setSearchSubject] = useState<string>("");
    const [searchFrom, setSearchFrom] = useState<string>("");
    const [searchFromEmail, setSearchFromEmail] = useState<string>("");
    const clear = () => {
        setSearchName("");
        setSearchSlug("");
        setSearchSubject("");
        setSearchFrom("");
        setSearchFromEmail("");
    };
    return (
        <div>
            <SearchPanelEmailTemplate
                searchName={searchName}
                setSearchName={setSearchName}
                searchSlug={searchSlug}
                setSearchSlug={setSearchSlug}
                searchSubject={searchSubject}
                setSearchSubject={setSearchSubject}
                searchFrom={searchFrom}
                setSearchFrom={setSearchFrom}
                searchFromEmail={searchFromEmail}
                setSearchFromEmail={setSearchFromEmail}
                clear={clear}
            ></SearchPanelEmailTemplate>
            <DataTable fields={tableFields} datas={tableDatas} />
        </div>
    )
}

export default Manage;