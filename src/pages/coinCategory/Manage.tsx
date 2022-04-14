import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "components/organism/DataTable";
import { IField } from 'components/atoms/Table';
import { prefix } from "constants/menuInfo";
import SwitchButton from 'components/atoms/SwitchButton';
import { SearchPanelCoinCategory } from 'components/moleculars/SearchPanel';
import altbaseService, { ICoinCategory } from "services/altbaseService";

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
        // {
        //     sr_no: 1,
        //     title: "Featured Coin",
        //     status: <SwitchButton onChangeHandler={async (x: boolean) => {
        //         return x;
        //     }} confirming />,
        //     action: {
        //         edit: true,
        //         editHandler: (id: number) => {
        //             navigate(`${ prefix }/coin-category/edit/${ id }`);
        //         },
        //         view: false,
        //     }
        // }
    ]);
    const [searchTitle, setSearchTitle] = useState<string>("");
    const [searchStatus, setSearchStatus] = useState<string>("");
    const [page, setPage] = useState<number>(1);
    const [perPage, setPerPage] = useState<number>(5);
    const clear = () => {
        setSearchTitle("");
        setSearchStatus("");
    };

    useEffect(() => {
        (async() => {
            let { status, content, message } = await altbaseService.getCoinCategory({
                page,
                perPage,
                searchData: {
                    title: searchTitle,
                    is_active: searchStatus === "Select Status" ? "" : ( searchStatus === "Active" ? "1" : "0"),
                }
            });
            if( status === "success") {
                console.log(content);
                setTableDatas(() => content.records.map((record: ICoinCategory) => ({
                    ...record,
                    status: <SwitchButton onChangeHandler={async (x: boolean) => {
                        return x;
                    }} value={Boolean(record.is_active)}/>,
                    action: {
                        edit: true,
                        editHandler: (id: number) => {
                            navigate(`${ prefix }/coin-category/edit/${ id }`);
                        }
                    }
                })).sort((a: ICoinCategory, b: ICoinCategory) => ((a?.id || 0) - (b?.id || 0))))
            }
        })();
    }, []);

    return (
        <div>
            <SearchPanelCoinCategory
                searchTitle={searchTitle}
                setSearchTitle={setSearchTitle}
                searchStatus={searchStatus}
                setSearchStatus={setSearchStatus}
                clear={clear}
            />
            <DataTable fields={tableFields} datas={tableDatas} additionalBtns={[{
                text: "Add",
                clickHandler: () => navigate(`${ prefix }/coin-category/add`)
            }, ]} />
        </div>
    )
}

export default Manage;