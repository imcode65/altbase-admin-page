import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "components/organism/DataTable";
import { IField } from 'components/atoms/Table';
import { prefix } from "constants/menuInfo";
import SwitchButton from 'components/atoms/SwitchButton';
import { SearchPanelCms } from 'components/moleculars/SearchPanel';

const Manage = () => {
    const navigate = useNavigate();
    const [tableFields, setTableFields] = useState<IField[]>([
        {
            text: "Sr.no.",
            code: "sr_no"
        }, {
            text: "Title",
            code: "title"
        }, {
            text: "Slug",
            code: "slug"
        }, {
            text: "Status",
            code: "status"
        }, {
            text: "Action",
            code: "action"
        }, 
    ])
    const [tableDatas, setTableDatas] = useState<any[]>([
        {
            sr_no: 1,
            title: "Privacy Policy",
            slug: "privacy_policy",
            status: <SwitchButton onChangeHandler={async (x: boolean) => {
                return x;
            }} confirming />,
            action: {
                edit: true,
                editHandler: (id: number) => {
                    navigate(`${ prefix }/cms/edit/${ id }`);
                },
                view: true,
                viewHandler: (id: number) => {
                    navigate(`${ prefix }/cms/view/${ id }`);
                }
            }
        }
    ]);
    const [searchName, setSearchName] = useState<string>("");
    const [searchSlug, setSearchSlug] = useState<string>("");
    const [searchStatus, setSearchStatus] = useState<string>("Select Status");
    const clear = () => {
        setSearchName("");
        setSearchSlug("");
        setSearchStatus("Select Status");
    };
    return (
        <div>
            <SearchPanelCms
                searchName={searchName}
                setSearchName={setSearchName}
                searchSlug={searchSlug}
                setSearchSlug={setSearchSlug}
                searchStatus={searchStatus}
                setSearchStatus={setSearchStatus}
                clear={clear}
            />
            <DataTable fields={tableFields} datas={tableDatas} additionalBtns={[{
                text: "Add",
                clickHandler: () => navigate(`${ prefix }/cms/add`)
            }]} />
        </div>
    )
}

export default Manage;