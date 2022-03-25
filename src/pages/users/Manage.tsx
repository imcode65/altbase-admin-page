import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DataTable from "components/organism/DataTable";
import { ITable } from 'components/atoms/Table';
import { prefix } from "constants/menuInfo";

const Manage = () => {
    const navigate = useNavigate();
    const [tableData, setTableData] = useState<ITable>({
        fields: [{
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
        }, ],
        datas: [{
            sr_no: 1,
            email: "Mrstanley1993@gmail.com",
            invitation_code: "3g6mocv2",
            email_verified: {
                changeHandler: async (val: boolean) => {
                    return val
                }
            },
            _2fa_status: <span>Inactive</span>,
            status: {
                changeHandler: async (val: boolean) => {
                    return val
                },
            },
            invited_by: "ADMIN",
            action: {
                edit: true,
                editHandler: (id: number) => {
                    navigate(`${ prefix }/users/edit/${ id }`);
                },
                view: true,
                viewHandler: (id: number) => {
                    navigate(`${ prefix }/users/edit/${ id }`);
                }
            }
        }]
    });
    return (
        <DataTable tableData={tableData} />
    )
}

export default Manage;