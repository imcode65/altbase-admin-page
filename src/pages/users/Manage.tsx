import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "components/organism/DataTable";
import { IField } from 'components/atoms/Table';
import { prefix } from "constants/menuInfo";
import SwitchButton from 'components/atoms/SwitchButton';
import { SearchPanelUsers } from 'components/moleculars/SearchPanel';

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
                    navigate(`${ prefix }/users/edit/${ id }`);
                },
                view: true,
                viewHandler: (id: number) => {
                    navigate(`${ prefix }/users/view/${ id }`);
                }
            }
        }
    ]);
    return (
        <div>
            <SearchPanelUsers />
            <DataTable fields={tableFields} datas={tableData} />
        </div>
    )
}

export default Manage;