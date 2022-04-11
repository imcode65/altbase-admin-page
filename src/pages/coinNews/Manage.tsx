import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "components/organism/DataTable";
import { IField } from 'components/atoms/Table';
import { prefix } from "constants/menuInfo";
import SwitchButton from 'components/atoms/SwitchButton';
import { SearchPanelCoinNews } from 'components/moleculars/SearchPanel';

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
            text: "Coin",
            code: "coin"
        }, {
            text: "Status",
            code: "status"
        }, {
            text: "Action",
            code: "action"
        }, 
    ]);
    const [tableDatas, setTableDatas] = useState<any[]>([
        {
            sr_no: 1,
            title: "Thank You Email",
            coin: "feedback_received",
            status: <SwitchButton onChangeHandler={async (x: boolean) => {
                return x;
            }} confirming />,
            action: {
                edit: false,
                view: true,
                viewHandler: (id: number) => {
                    navigate(`${ prefix }/coin-news/view/${ id }`);
                },
            }
        }
    ]);
    const [searchName, setSearchName] = useState<string>("");
    const [searchStatus, setSearchStatus] = useState<string>("");
    const clear = () => {
        setSearchName("");
        setSearchStatus("");
    };
    return (
        <div>
            <SearchPanelCoinNews
                searchName={searchName}
                setSearchName={setSearchName}
                searchStatus={searchStatus}
                setSearchStatus={setSearchStatus}
                clear={clear}
            />
            <DataTable fields={tableFields} datas={tableDatas} additionalBtns={[{
                text: "Add",
                clickHandler: () => navigate(`${ prefix }/coin-news/add`)
            }, ]} />
        </div>
    )
}

export default Manage;