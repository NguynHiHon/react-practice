

import { FcPlus } from "react-icons/fc";
import ModalCreatUser from "./ModalCreateUser";
import './ManageUser.scss'
import { useState } from "react";
const ManagerUser = (props) => {
const [showCreatUser, setShowCreatUser]=useState(false)
    return (
        <div className="manage-user-container">
            <div className="title">
                Quản lí tài khoản
            </div>
            <div className="user-content">
                <div className="btn-add-new btn-primary">
                    <button
                     className="btn btn-primary"
                     onClick={()=>setShowCreatUser(true)}
                     >
                      <FcPlus/>  Thêm người dùng
                    </button>
                </div>
                <div className="table-user-container">
                    Danh sách tài khoản
                </div>
                <ModalCreatUser
                 setShow={setShowCreatUser} 
                 show={showCreatUser} />
            </div>

        </div>
    )
}
export default ManagerUser;