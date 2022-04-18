import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "components/organism/DataTable";
import { IField } from 'components/atoms/Table';
import { prefix } from "constants/menuInfo";
import { SearchPanelTxBuyBnb } from 'components/moleculars/SearchPanel';
import { confirm } from "react-confirm-box";
import ConfirmAlert from "components/moleculars/ConfirmAlert";
import toast from "react-hot-toast";
import altbaseService, { ITx } from "services/altbaseService";

const TxBuyBnbIndex = () => {
    const navigate = useNavigate();
    const [tableFields, setTableFields] = useState<IField[]>([
        {
            text: "Sr.no.",
            code: "id"
        }, {
            text: "Email",
            code: "email"
        }, {
            text: "Payment Id",
            code: "payment_id"
        }, {
            text: "Status",
            code: "status_1"
        }, {
            text: "Action",
            code: "action"
        }, 
    ]);
    const [tableDatas, setTableDatas] = useState<any[]>([
        {
            sr_no: 1,
            email: "Thank You Email",
            payment_id: "feedback_received",
            status_1: <span>In-Progress</span>,
            action: {
                view: true,
                viewHandler: (id: number) => {
                    navigate(`${ prefix }/transaction-history/buy-bnb/details/${ id }`);
                }
            }
        }
    ]);
    const [searchEmail, setSearchEmail] = useState<string>("");
    const [searchPaymentId, setSearchPaymentId] = useState<string>("");
    const [searchStatus, setSearchStatus] = useState<string>("");
    const clear = () => {
        setSearchEmail("");
        setSearchPaymentId("");
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
            console.log(searchStatus)
            let { status, content, message } = await altbaseService.getTxHistory({
                page,
                perPage,
                searchData: {
                    email: searchEmail,
                    payment_id: searchPaymentId,
                    status: searchStatus === "Success" ? 1 : (searchStatus === "In-Progress" ? 0 : (searchStatus === "Failed" ? 2 : undefined))
                }
            });
            if( status === "success") {
                const { pagination, records } = content;
                setPage(pagination.page);
                setPerPage(pagination.perPage);
                setTotalPages(pagination.totalPages);
                setTotalSize(pagination.totalSize);
                setTableDatas(() => records.map((record: ITx) => ({
                    ...record,
                    email: record.user_details?.email,
                    status_1: record.status === 1 ? "Success" : (record.status === 0 ? "In-Progress" : "Failed"),
                    action: {
                        edit: true,
                        editHandler: (id: number) => {
                            navigate(`${ prefix }/transaction-history/buy-bnb/edit/${ id }`);
                        },
                        view: true,
                        viewHandler: (id: number) => {
                            navigate(`${ prefix }/transaction-history/buy-bnb/details/${ id }`);
                        }
                    }
                })).sort((a: ITx, b: ITx) => ((a?.id || 0) - (b?.id || 0))))
            } else {
                toast.error(message);
            }
            setLoading(false);
        })();
    }, [perPage, page, searchEmail, searchPaymentId, searchStatus]);
    return (
        <div>
            <SearchPanelTxBuyBnb
                searchEmail={searchEmail}
                setSearchEmail={setSearchEmail}
                searchPaymentId={searchPaymentId}
                setSearchPaymentId={setSearchPaymentId}
                searchStatus={searchStatus}
                setSearchStatus={setSearchStatus}
                clear={clear}
            />
            <DataTable
                fields={tableFields}
                datas={tableDatas}
                currentPage={page}
                totalPages={totalPages}
                totalCounts={totalSize}
                propLoading={loading}
                changeCurrentPageHandler={setPage}
                changeCountPerPageHandler={setPerPage}
                additionalBtns={[{
                    text: "Reset Untracked Events",
                    clickHandler: () => {
                        (async () => {
                            const result = await confirm("Are you sure?", {
                                // @ts-ignore
                                render: (message, onConfirm, onCancel) => <ConfirmAlert onConfirm={onConfirm} onCancel={onCancel} />
                            });
                            if (result) {
                                navigate(0)
                            }
                        })()
                    }
                }]}
            />
        </div>
    )
}

export default TxBuyBnbIndex;