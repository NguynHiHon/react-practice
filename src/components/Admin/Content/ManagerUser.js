


import ModalCreatUser from "./ModalCreateUser";
const ManagerUser = (props) => {

    return (
        <div classNameName="manage-user-container">
            <div classNameName="title">
                Quản lí tài khoản
            </div>
            <div classNameName="user-content">
                <div>
                    <button>
                        Thêm người dùng
                    </button>
                </div>
                <div>
                    Danh sách tài khoản 
                    <ModalCreatUser/>
                </div>
            </div>

        </div>
    )
}
export default ManagerUser;