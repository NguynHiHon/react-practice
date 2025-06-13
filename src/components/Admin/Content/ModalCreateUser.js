import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaFileUpload } from "react-icons/fa";
import { toast } from 'react-toastify';

const ModalCreatUser = (props) => {
  const { show, setShow } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [image, setImage] = useState("");
  const [preview, setPreview] = useState("");
  const [role, setRole] = useState("USER");
  const handleClose = () => {
    setShow(false);
    setEmail("");
    setImage("");
    setPassword("");
    setPreview("");
    setRole("");
    setUsername("");
  }
  const handleOnchangeImg = (e) => {
    if (e && e.target && e.target.files[0]) {
      setPreview(URL.createObjectURL(e.target.files[0]))
      setImage(e.target.files[0])
      return;
    }
    setPreview("")
  }


  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const changeVietNamese = (value) => {
    if (value.includes('The email')) {
      return 'Email của bạn  đã tồn tại trong hệ thống  '
    }
  return 'Bạn đã thêm mới tài khoản thành công'


  }

  const handleSubmitCreateUser = async () => {
    const isvalidateEmail = validateEmail(email);
    if (!isvalidateEmail) {
      toast.error("Email không hợp lệ")
      return

    }
    if (!password) {

      toast.error("Mật khẩu không hợp lệ")
      return
    }
    const data = new FormData();// sử dụng formdata vì cần gửi file nên phải gửi bằng form data 
    data.append("email", email)
    data.append("password", password)
    data.append("username", username)
    data.append("role", role)
    data.append("userImage", image)

    let res = await axios.post("http://localhost:8081/api/v1/participant", data)
    console.log(res.data, ">>>>>>>>>>>>>>>>>>>>")
    console.log(data, '>>>>>data đây')
    if (res.data && res.data.EC === 0) {
      toast.success(changeVietNamese(res.data.EM));
      handleClose();
    }
    if (res.data && res.data.EC !== 0) {
      toast.error(changeVietNamese(res.data.EM));

    }


  }




  return (
    <>


      <Modal size='xl'
        className='modal-add-user'
        show={show}
        backdrop='static'
        onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Tạo tài khoản</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="form-control" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Password</label>
              <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className="form-control" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Username</label>
              <input onChange={(e) => setUsername(e.target.value)} value={username} type="text" className="form-control" />
            </div>
            <div className="col-md-4">
              <label className="form-label">Role</label>
              <select className="form-select"
                value={role}
                onChange={(e) => { setRole(e.target.value) }}>
                <option selected value={"USER"}>USER</option>
                <option>ADMIN</option>
              </select>
            </div>

            <div className='col-md-12 label-form-upload'  >
              <label className='form-label label-upload' htmlFor='labelUpload'>
                <FaFileUpload />Upload file image</label>
              <input
                type='file'
                hidden id='labelUpload'
                onChange={(e) => handleOnchangeImg(e)}
              />
            </div>
            <div className='col-md-12 img-preview'>
              {preview ? <img src={preview} />

                :
                <span>Preview Image</span>
              }



            </div>

          </form>



        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmitCreateUser}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalCreatUser;