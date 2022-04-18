import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "components/organism/DataTable";
import { IField } from 'components/atoms/Table';
import { prefix } from "constants/menuInfo";
import SwitchButton from 'components/atoms/SwitchButton';
import { SearchPanelCoinNews } from 'components/moleculars/SearchPanel';
import altbaseService, { ICoinNews } from "services/altbaseService";

const coin_category = ["DFS MAFIA", "Altbase"]

const Manage = () => {
    const navigate = useNavigate();
    const [tableFields, setTableFields] = useState<IField[]>([
        {
            text: "Sr.no.",
            code: "id"
        }, {
            text: "Title",
            code: "title"
        }, {
            text: "Coin",
            code: "coin_id"
        }, {
            text: "Status",
            code: "status"
        }, {
            text: "Action",
            code: "action"
        }, 
    ]);
    const [tableDatas, setTableDatas] = useState<any[]>([
        // {
        //     sr_no: 1,
        //     title: "Thank You Email",
        //     coin: "feedback_received",
        //     status: <SwitchButton onChangeHandler={async (x: boolean) => {
        //         return x;
        //     }} confirming />,
        //     action: {
        //         edit: false,
        //         view: true,
        //         viewHandler: (id: number) => {
        //             navigate(`${ prefix }/coin-news/view/${ id }`);
        //         },
        //     }
        // }
    ]);
    const [searchName, setSearchName] = useState<string>("");
    const [searchStatus, setSearchStatus] = useState<string>("Select Status");
    const [page, setPage] = useState<number>(1);
    const [perPage, setPerPage] = useState<number>(5);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [totalSize, setTotalSize] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        (async() => {
            setLoading(true);
            let { status, content, message } = await altbaseService.getCoinNews({
                page,
                perPage,
                searchData: {
                    title: searchName,
                    coin_id: "",
                    is_active: searchStatus === "Select Status" ? "" : ( searchStatus === "Active" ? "1" : "0"),
                }
            });
            if( status === "success") {
                setPage(content.pagination.page);
                setPerPage(content.pagination.perPage);
                setTotalPages(content.pagination.totalPages);
                setTotalSize(content.pagination.totalSize);
                setTableDatas(() => content.records.map((record: ICoinNews) => ({
                    ...record,
                    coin_id: parseInt(record.coin_id) > 2 ? record.coin_id : coin_category[parseInt(record.coin_id)],
                    status: <SwitchButton onChangeHandler={async (x: boolean) => {
                        return x;
                    }} value={Boolean(record.is_active)}/>,
                    action: {
                        edit: true,
                        editHandler: (id: number) => {
                            navigate(`${ prefix }/coin-news/edit/${ id }`);
                        },
                        view: true,
                        viewHandler: (id: number) => {
                            navigate(`${ prefix }/coin-news/view/${ id }`);
                        },
                    }
                })).sort((a: ICoinNews, b: ICoinNews) => ((a?.id || 0) - (b?.id || 0))))
            }
            
            setLoading(false);
        })();
    }, [searchName, searchStatus, perPage, page]);

    const clear = () => {
        setSearchName("");
        setSearchStatus("Select Status");
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
            <DataTable 
                fields={tableFields} 
                datas={tableDatas} 
                additionalBtns={[{
                text: "Add",
                clickHandler: () => navigate(`${ prefix }/coin-news/add`)
                }, ]} 
                changeCurrentPageHandler={setPage}
                changeCountPerPageHandler={setPerPage}
                currentPage={page}
                totalPages={totalPages}
                totalCounts={totalSize}
                propLoading={loading}
            />
        </div>
    )
}

export default Manage;