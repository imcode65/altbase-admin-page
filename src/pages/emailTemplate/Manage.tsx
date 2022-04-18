import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "components/organism/DataTable";
import { IField } from 'components/atoms/Table';
import { prefix } from "constants/menuInfo";
import { SearchPanelEmailTemplate } from 'components/moleculars/SearchPanel';
import altbaseService, { IEmailTemplate } from "services/altbaseService";
import toast from "react-hot-toast";

const Manage = () => {
    const navigate = useNavigate();
    const [tableFields, setTableFields] = useState<IField[]>([
        {
            text: "Sr.no.",
            code: "id"
        }, {
            text: "Name",
            code: "template_name"
        }, {
            text: "Slug",
            code: "template_slug"
        }, {
            text: "Subject",
            code: "template_subject"
        }, {
            text: "From",
            code: "template_from"
        }, {
            text: "From Mail",
            code: "template_from_mail"
        }, {
            text: "Action",
            code: "action"
        }, 
    ]);
    const [tableDatas, setTableDatas] = useState<any[]>([
        // {
        //     id: 1,
        //     template_name: "Thank You Email",
        //     template_slug: "feedback_received",
        //     template_subject: "Altbase Feedback Request",
        //     template_from: "<%=closing_text%>",
        //     template_from_mail: "info@altbase.com",
        //     action: {
        //         edit: true,
        //         editHandler: (id: number) => {
        //             navigate(`${ prefix }/email-template/edit/${ id }`);
        //         },
        //         view: true,
        //         viewHandler: (id: number) => {
        //             navigate(`${ prefix }/email-template/view/${ id }`);
        //         }
        //     }
        // }
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
    const [page, setPage] = useState<number>(1);
    const [perPage, setPerPage] = useState<number>(5);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [totalCount, setTotalCount] = useState<number>(0);
    const [totalSize, setTotalSize] = useState<number>(0);
    const [loading, setLoading] = useState<boolean>(false);
    useEffect(() => {
        (async () => {
            setLoading(true);
            let { status, content, message } = await altbaseService.getEmailTemplateList({
                page,
                perPage,
                searchData: {
                    template_name: searchName,
                    template_slug: searchSlug,
                    template_from: searchFrom,
                    template_subject: searchSubject,
                    template_from_mail: searchFromEmail,
                }
            });
            if( status === "success") {
                const { pagination, records } = content;
                setPage(pagination.page);
                setPerPage(pagination.perPage);
                setTotalPages(pagination.totalPages);
                setTotalSize(pagination.totalSize);
                setTableDatas(() => records.map((record: IEmailTemplate) => ({
                    ...record,
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
                })).sort((a: IEmailTemplate, b: IEmailTemplate) => ((a?.id || 0) - (b?.id || 0))))
            } else {
                toast.error(message);
            }
            setLoading(false);
        })();
    }, [perPage, page, searchName, searchSlug, searchSubject, searchFrom, searchFromEmail]);
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
                    text: "Add",
                    clickHandler: () => navigate(`${ prefix }/email-template/add`)
                }, ]}
            />
        </div>
    )
}

export default Manage;