


import ModalCreatUser from "./ModalCreateUser";
import './ManageUser.scss'
const ManagerUser = (props) => {

    return (
        <div className="manage-user-container">
            <div className="title">
                Quản lí tài khoản
            </div>
            <div className="user-content">
                <div>
                    <button>
                        Thêm người dùng
                    </button>
                </div>
                <div>
                    Danh sách tài khoản
                </div>
                <ModalCreatUser />
            </div>

        </div>
    )
}
export default ManagerUser;