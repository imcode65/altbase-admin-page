import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "components/organism/DataTable";
import { IField } from 'components/atoms/Table';
import { prefix } from "constants/menuInfo";
import SwitchButton from 'components/atoms/SwitchButton';
import { SearchPanelCoinCategory } from 'components/moleculars/SearchPanel';

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
            title: "Featured Coin",
            status: <SwitchButton onChangeHandler={async (x: boolean) => {
                return x;
            }} confirming />,
            action: {
                edit: true,
                editHandler: (id: number) => {
                    navigate(`${ prefix }/coin-category/edit/${ id }`);
                },
                view: false,
            }
        }
    ]);
    const [searchTitle, setSearchTitle] = useState<string>("");
    const [searchStatus, setSearchStatus] = useState<string>("");
    const clear = () => {
        setSearchTitle("");
        setSearchStatus("");
    };
    return (
        <div>
            <SearchPanelCoinCategory
                searchTitle={searchTitle}
                setSearchTitle={setSearchTitle}
                searchStatus={searchStatus}
                setSearchStatus={setSearchStatus}
                clear={clear}
            />
            <DataTable fields={tableFields} datas={tableDatas} />
        </div>
    )
}

export default Manage;