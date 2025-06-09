import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FaFileUpload } from "react-icons/fa";

const ModalCreatUser = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const [image, setImage] = useState("")
  const [preview, setPreview] = useState("")

  const [role, setRole] = useState("USER")
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleOnchangeImg = (e) => {
    if (e && e.target && e.target.files[0]) {
      setPreview(URL.createObjectURL(e.target.files[0]))
    }
    setPreview("")
    




  }



  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

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
              <select className="form-select" onChange={(e) => { setRole(e.target.value) }}>
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
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default ModalCreatUser;