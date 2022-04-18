import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "components/organism/DataTable";
import { IField } from 'components/atoms/Table';
import { prefix } from "constants/menuInfo";
import SwitchButton from 'components/atoms/SwitchButton';
import { SearchPanelCoins } from 'components/moleculars/SearchPanel';
import { ICoin } from "services/altbaseService";
import toast from 'react-hot-toast';
import altbaseService, { IUser } from "services/altbaseService";

const Manage = () => {
    const navigate = useNavigate();
    const [tableFields, setTableFields] = useState<IField[]>([
        {
            text: "Sr.no.",
            code: "id"
        }, {
            text: "Name",
            code: "name"
        }, {
            text: "Symbol",
            code: "symbol"
        }, {
            text: "Coin Category",
            code: "coin_category"
        }, {
            text: "Buy Creteria (100x)",
            code: "buy_creteria"
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
            id: 1,
            name: "Tether USD",
            symbol: "USDT",
            coin_category: "Featured Coin",
            buy_creteria: "0",
            status: <SwitchButton onChangeHandler={async (x: boolean) => {
                return x;
            }} confirming />,
            action: {
                edit: true,
                editHandler: (id: number) => {
                    navigate(`${ prefix }/coins/edit/${ id }`);
                },
                view: true,
                viewHandler: (id: number) => {
                    navigate(`${ prefix }/coins/view/${ id }`);
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
    const [page, setPage] = useState<number>(1);
    const [perPage, setPerPage] = useState<number>(5);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [totalCount, setTotalCount] = useState<number>(0);
    const [totalSize, setTotalSize] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    useEffect(() => {
        (async () => {
            setLoading(true);
            let { status, content, message } = await altbaseService.getCoinList({
                page,
                perPage,
                searchData: {
                    is_active: searchStatus === "Active" ? 1 : 0,
                    name: searchName
                }
            });
            if( status === "success") {
                const { pagination, records } = content;
                setPage(pagination.page);
                setPerPage(pagination.perPage);
                setTotalPages(pagination.totalPages);
                setTotalSize(pagination.totalSize);
                setTableDatas(() => records.map((record: ICoin) => ({
                    ...record,
                    status: <SwitchButton value={record.is_active === 1} onChangeHandler={async (x: boolean) => {
                        const {status, content, message} = await altbaseService.updateCoinStatus(record.id || 1, {
                            is_active: (x ? 1 : 0)
                        })
                        if (status) {
                            toast.success(message);
                            return x;
                        } else {
                            toast.error(message);
                        }
                    }} confirming />,
                    action: {
                        edit: true,
                        editHandler: (id: number) => {
                            navigate(`${ prefix }/coins/edit/${ id }`);
                        },
                        view: true,
                        viewHandler: (id: number) => {
                            navigate(`${ prefix }/coins/view/${ id }`);
                        },
                    }
                })).sort((a: ICoin, b: ICoin) => ((a?.id || 0) - (b?.id || 0))))
            } else {
                toast.error(message);
            }
            setLoading(false);
        })();
    }, [perPage, page, searchStatus, searchName]);
    return (
        <div>
            <SearchPanelCoins
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
                    clickHandler: () => navigate(`${ prefix }/coins/add`)
                }, ]}
                currentPage={page}
                totalPages={totalPages}
                totalCounts={totalSize}
                propLoading={loading}
                changeCurrentPageHandler={setPage}
                changeCountPerPageHandler={setPerPage}
            />
        </div>
    )
}

export default Manage;