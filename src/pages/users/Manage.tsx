import { useState } from "react";
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

const Manage = () => {
    const navigate = useNavigate();
    const [tableFields, setTableFields] = useState<IField[]>(
        [{
            text: "Sr.no",
            code: "sr_no"
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
    const [tableData, setTableData] = useState<any[]>([
        {
            sr_no: 1,
            email: "Mrstanley1993@gmail.com",
            invitation_code: "3g6mocv2",
            email_verified: <SwitchButton onChangeHandler={async (x: boolean) => {
                return x;
            }} confirming />,
            _2fa_status: <span className="bg-color-09 rounded text-white text-sm font-bold px-1">Inactive</span>,
            status: <SwitchButton onChangeHandler={async (x: boolean) => {
                return x;
            }} confirming />,
            invited_by: "ADMIN",
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

    const [searchName, setSearchName] = useState<string>("");
    const [searchEmail, setSearchEmail] = useState<string>("");
    const [searchEmailVerification, setSearchEmailVerification] = useState<string>("");
    const [search2Factor, setSearch2Factor] = useState<string>("");
    const [searchStatus, setSearchStatus] = useState<string>("");
    const clear = () => {
        setSearchName("");
        setSearchEmail("");
        setSearchEmailVerification("");
        setSearch2Factor("");
        setSearchStatus("");
    };

    const [modalOpened, setModalOpened] = useState<boolean>(false);

    const saveHandler = () => {
        toast.success('Successfully toasted!')
    }

    return (
        <div>
            <SearchPanelUsers
                searchName={searchName}
                setSearchName={setSearchName}
                searchEmail={searchEmail}
                setSearchEmail={setSearchEmail}
                searchEmailVerification={searchEmailVerification}
                setSearchEmailVerification={setSearchEmailVerification}
                search2Factor={search2Factor}
                setSearch2Factor={setSearch2Factor}
                searchStatus={searchStatus}
                setSearchStatus={setSearchStatus}
                clear={clear}
            />
            <DataTable fields={tableFields} datas={tableData} additionalBtns={[{
                text: "Add",
                clickHandler: () => navigate(`${ prefix }/cms/add`)
            }, {
                text: "Generate UUID",
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
            }]} />
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
                    <LabelInput1 className="mt-4" label="Invite Limit *" placeholder="Enter invite limit" ></LabelInput1>
                </div>
                <div className="p-4 flex justify-end">
                    <Button3 text="Save" confirming onClick={saveHandler} ></Button3>
                </div>
            </ReactModal>
        </div>
    )
}

export default Manage;