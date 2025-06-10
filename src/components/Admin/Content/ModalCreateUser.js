import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaFileUpload } from "react-icons/fa";

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

  const handleSubmitCreateUser = async() => {
    //validate


    // let data = {
    //   email: email,
    //   password: password,
    //   username: username,
    //   role: role,
    //   userImage: image

    // }

    const data= new FormData();
    data.append("email",email)
    data.append("password",password)
    data.append("username",username)
    data.append("role",role)
    data.append( "userImage",image)

   let res =await axios.post("http://localhost:8081/api/v1/participant",data)
   console.log(res,">>>>>>>>>>>>>>>>>>>>")
       console.log(data, '>>>>>data đây')

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