import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "components/organism/DataTable";
import { IField } from 'components/atoms/Table';
import { prefix } from "constants/menuInfo";
import SwitchButton from 'components/atoms/SwitchButton';
import { SearchPanelCms } from 'components/moleculars/SearchPanel';
import altbaseService, { ICMS } from "services/altbaseService";

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
    const [tableDatas, setTableDatas] = useState<any[]>([]);
    const [searchName, setSearchName] = useState<string>("");
    const [searchSlug, setSearchSlug] = useState<string>("");
    const [searchStatus, setSearchStatus] = useState<string>("Select Status");
    const [page, setPage] = useState<number>(1);
    const [perPage, setPerPage] = useState<number>(5);
    const [loading, setLoading] = useState<boolean>(false);
    const clear = () => {
        setSearchName("");
        setSearchSlug("");
        setSearchStatus("Select Status");
    };

    useEffect(() => {
        (async() => {
            setLoading(true);
            let { status, content, message } = await altbaseService.getCMS({
                page,
                perPage,
                searchData: {
                    title: searchName,
                    slug: searchSlug,
                    is_active: searchStatus === "Select Status" ? "" : ( searchStatus === "Active" ? "1" : "0"),
                }
            });
            if( status === "success") {
                setTableDatas(() => content.records.map((record: ICMS) => ({
                    ...record,
                    status: <SwitchButton onChangeHandler={async (x: boolean) => {
                        return x;
                    }} value={Boolean(record.is_active)}/>,
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
                })).sort((a: ICMS, b: ICMS) => ((a?.id || 0) - (b?.id || 0))))
            }
            setLoading(false);
        })();
    }, [perPage, page, searchName, searchSlug, searchName, searchStatus])

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