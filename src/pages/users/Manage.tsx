import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "components/organism/DataTable";
import { IField } from 'components/atoms/Table';
import { prefix } from "constants/menuInfo";
import SwitchButton from 'components/atoms/SwitchButton';
import { SearchPanelUsers } from 'components/moleculars/SearchPanel';
import { confirm } from "react-confirm-box";
import ConfirmAlert from "components/moleculars/ConfirmAlert";
import ReactModal from 'react-modal';
import LabelInput1 from 'components/atoms/LabelInput1';
import Button3 from 'components/atoms/Button3';
import IconClose from 'components/icons/IconClose';
import toast from 'react-hot-toast';
import altbaseService, { IUser } from "services/altbaseService";

const Manage = () => {
    const navigate = useNavigate();
    const [tableFields, setTableFields] = useState<IField[]>(
        [{
            text: "Sr.no",
            code: "id"
        }, {
            text: "Email",
            code: "email"
        }, {
            text: "Invitation Code",
            code: "invitation_code"
        }, {
            text: "Email Verified",
            code: "email_verified"
        }, {
            text: "2FA Status",
            code: "_2fa_status"
        }, {
            text: "Status",
            code: "status"
        }, {
            text: "Invited By",
            code: "invited_by"
        }, {
            text: "Action",
            code: "action"
        }, 
    ])
    const [tableDatas, setTableDatas] = useState<any[]>([
        {
            id: 1,
            email: "Mrstanley1993@gmail.com",
            invitation_code: "3g6mocv2",
            invited_by: "ADMIN",
            email_verified: <SwitchButton onChangeHandler={async (x: boolean) => {
                return x;
            }} confirming />,
            _2fa_status: <span className="bg-color-09 rounded text-white text-sm font-bold px-1">Inactive</span>,
            status: <SwitchButton onChangeHandler={async (x: boolean) => {
                return x;
            }} confirming />,
            action: {
                edit: true,
                editHandler: (id: number) => {
                    setModalOpened(val => !val)
                },
                view: true,
                viewHandler: (id: number) => {
                    navigate(`${ prefix }/users/view/${ id }`);
                }
            }
        }
    ]);

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [email_verified_at, setEmail_verified_at] = useState<string>("");
    const [is_two_factor_enabled, setIs_two_factor_enabled] = useState<string>("");
    const [is_active, setIs_active] = useState<string>("");
    const clear = () => {
        setName("");
        setEmail("");
        setEmail_verified_at("");
        setIs_two_factor_enabled("");
        setIs_active("");
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
            let { status, content, message } = await altbaseService.getUsersList({
                page,
                perPage,
                searchData: {
                    name: name,
                    email: email,
                    email_verified_at: email_verified_at === "YES" ? "" : new Date().toISOString(),
                    is_two_factor_enabled: is_two_factor_enabled === "Enabled" ? 1 : 0,
                    is_active: is_active === "Active" ? 1 : 0,
                }
            });
            if( status === "success") {
                const { pagination, records } = content;
                setPage(pagination.page);
                setPerPage(pagination.perPage);
                setTotalPages(pagination.totalPages);
                setTotalSize(pagination.totalSize);
                setTableDatas(() => records.map((record: IUser) => ({
                    ...record,
                    email_verified: <SwitchButton value={record.email_verified_at ? true : false} onChangeHandler={async (x: boolean) => {
                        return x;
                    }} confirming />,
                    _2fa_status: <span className={`${ record.is_two_factor_enabled ? "bg-green-400 text-blue-700" : "bg-color-09 text-white"} rounded text-sm font-bold px-1`}>{record.is_two_factor_enabled ? "Active" : "Inactive"}</span>,
                    status: <SwitchButton value={record.is_active ? true : false} onChangeHandler={async (x: boolean) => {
                        return x;
                    }} confirming />,
                    action: {
                        edit: true,
                        editHandler: (id: number) => {
                            setInvite_limit(records.filter((record: any) => record.id === id)[0].invite_limit);
                            setEditingId(id);
                            setModalOpened(val => !val);
                        },
                        view: true,
                        viewHandler: (id: number) => {
                            navigate(`${ prefix }/users/view/${ id }`);
                        }
                    }
                })).sort((a: IUser, b: IUser) => ((a?.id || 0) - (b?.id || 0))))
            } else {
                toast.error(message);
            }
            setLoading(false);
        })();
    }, [perPage, page, name, email, email_verified_at, is_two_factor_enabled, is_active]);

    const [modalOpened, setModalOpened] = useState<boolean>(false);
    const [invite_limit, setInvite_limit] = useState<string>("0");
    const [editingId, setEditingId] = useState<number>(-1);

    const saveHandler = async () => {
        let { status, content, message } = await altbaseService.updateUser(editingId, {
            name: name,
            email: email,
            invite_limit: parseInt(invite_limit),
        });
        if( status === "success") {
            toast.success(message);
        } else {
            toast.error(message);
        }
    }

    const generateUUID = async () => {
        let { status, content, message } = await altbaseService.generateUUID();
        if( status === "success") {
            toast.success(message);
        } else {
            toast.error(message);
        }
    }
    return (
        <div>
            <SearchPanelUsers
                searchName={name}
                setSearchName={setName}
                searchEmail={email}
                setSearchEmail={setEmail}
                searchEmailVerification={email_verified_at}
                setSearchEmailVerification={setEmail_verified_at}
                search2Factor={is_two_factor_enabled}
                setSearch2Factor={setIs_two_factor_enabled}
                searchStatus={is_active}
                setSearchStatus={setIs_active}
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
                    text: "Add",
                    clickHandler: () => navigate(`${ prefix }/users/add`)
                }, {
                    text: "Generate UUID",
                    clickHandler: () => {
                        (async () => {
                            const result = await confirm("Are you sure?", {
                                // @ts-ignore
                                render: (message, onConfirm, onCancel) => <ConfirmAlert onConfirm={onConfirm} onCancel={onCancel} />
                            });
                            if (result) {
                                generateUUID();
                            }
                        })()
                    }
                }]}
            />
            <ReactModal
                isOpen={modalOpened}
                onRequestClose={() => setModalOpened(false)}
                style={{
                    content: {
                      top: '50%',
                      left: '50%',
                      right: 'auto',
                      bottom: 'auto',
                      marginRight: '-50%',
                      transform: 'translate(-50%, -50%)',
                      borderRadius: "0.5rem",
                      display: "flex",
                      flexDirection: "column",
                      padding: 0,
                    },
                    overlay: {
                        background: "#00000033"
                    }
                }}
                contentLabel="Example Modal"
            >
                <p className="px-4 w-full pt-4 pb-8 border-b border-color-13 flex justify-between">
                    <span>Update Invite Limit</span>
                    <IconClose />
                </p>
                <div className="px-4 py-3 border-b border-color-13">
                    <p>Note:</p>
                    <ul>
                        <li>Current invitation limit for this user is 10.</li>
                        <li>This user has already used 0 invitations.</li>
                        <li>You can not update invitation limit less than 0.</li>
                    </ul>
                    <LabelInput1 text={invite_limit} onChangeHandler={setInvite_limit} className="mt-4" label="Invite Limit *" placeholder="Enter invite limit" ></LabelInput1>
                </div>
                <div className="p-4 flex justify-end">
                    <Button3 text="Save" confirming onClick={saveHandler} ></Button3>
                </div>
            </ReactModal>
        </div>
    )
}

export default Manage;