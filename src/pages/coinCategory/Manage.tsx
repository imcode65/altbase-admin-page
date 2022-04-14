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
            code: "id"
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
    const [tableDatas, setTableDatas] = useState<any[]>([]);
    const [searchTitle, setSearchTitle] = useState<string>("");
    const [searchStatus, setSearchStatus] = useState<string>("Select Status");
    const [page, setPage] = useState<number>(1);
    const [perPage, setPerPage] = useState<number>(5);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [totalSize, setTotalSize] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    const clear = () => {
        setSearchTitle("");
        setSearchStatus("Select Status");
    };

    useEffect(() => {
        (async() => {
            setLoading(true);
            let { status, content, message } = await altbaseService.getCoinCategory({
                page,
                perPage,
                searchData: {
                    title: searchTitle,
                    is_active: searchStatus === "Select Status" ? "" : ( searchStatus === "Active" ? "1" : "0"),
                }
            });
            if( status === "success") {
                setPage(content.pagination.page);
                setPerPage(content.pagination.perPage);
                setTotalPages(content.pagination.totalPages);
                setTotalSize(content.pagination.totalSize);
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
            setLoading(false);
        })();
    }, [searchTitle, searchStatus, perPage, page]);

    return (
        <div>
            <SearchPanelCoinCategory
                searchTitle={searchTitle}
                setSearchTitle={setSearchTitle}
                searchStatus={searchStatus}
                setSearchStatus={setSearchStatus}
                clear={clear}
            />
            <DataTable 
                fields={tableFields} 
                datas={tableDatas} 
                additionalBtns={[{
                    text: "Add",
                    clickHandler: () => navigate(`${ prefix }/coin-category/add`)
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