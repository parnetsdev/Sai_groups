import React, { useEffect } from "react";
import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Button, Container, Form, InputGroup, Modal } from "react-bootstrap";
import { Row } from "react-bootstrap";
import axios from "axios";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import "./Styles/LProfile.css";

const LProfile = () => {
  const [PasswordShow, setPasswordShow] = useState(false);
  const [confirmpasswordshow, setconfirmpasswordshow] = useState(false);

  const [show5, setShow5] = useState();
  const [show6, setShow6] = useState();

  const [isVisible, setIsVisible] = useState(false);

  const handleClose5 = () => setShow5(false);
  const handleShow5 = () => setShow5(true);

  const handleClose6 = () => setShow6(false);
  const handleShow6 = () => setShow6(true);

  return (
    <div>
      <div className="myaccount-component">
        {/* {User?.map((item) => {
            return ( */}
      
          <div className="profile-container text-center">
            <img
              src="./img/gallery-img-5.webp"
              alt="Admin"
              className="mt-5"
              width="70%"
              height="200px"
            />

            <h5 className="user-name">Sheetal Aily</h5>
          </div>

          <div className="profile-container-2">
            <div className="profile-content-display">
              <div className="profile-user-deatils">
                <label className="profile-user-title">Full Name</label>
                <p className="profile-user-subtitle">Sheetal Aily</p>
              </div>
              <div className="profile-user-deatils">
                <label className="profile-user-title">Phone Number</label>
                <p className="profile-user-subtitle">9098765432</p>
              </div>
              <div className="profile-user-deatils">
                <label className="profile-user-title">Email ID</label>
                <p className="profile-user-subtitle">sheetal@gmail.com</p>
              </div>
            </div>

            <div className="profile-content-display">
              <div className="profile-user-deatils">
                <label className="profile-user-title">Address</label>
                <p className="profile-user-subtitle">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis tenetur Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Corporis tenetur
                </p>
              </div>
            </div>

            {/* <div className="profile-content-display">
                <div className="profile-user-deatils">
                  <label className="profile-user-title">Country</label>
                  <p className="profile-user-subtitle">{User?.Contury}</p>
                </div>
                <div className="profile-user-deatils">
                  <label className="profile-user-title">State</label>
                  <p className="profile-user-subtitle">{User?.State}</p>
                </div>
                <div className="profile-user-deatils">
                  <label className="profile-user-title">City</label>
                  <p className="profile-user-subtitle">{User?.City}</p>
                </div>
                <div className="profile-user-deatils">
                  <label className="profile-user-title">Pincode</label>
                  <p className="profile-user-subtitle">{User?.Pincode}</p>
                </div>
              </div> */}

            <div>
              <div className="edit-change-button">
                <Button
                  className="header-search"
                  onClick={() => {
                    // editRegUser();
                    handleShow5();
                  }}
                >
                  Edit Profile
                </Button>
                {/* <Button
                    className="header-search"
                    style={{ width: "auto" }}
                    onClick={() => {
                      handleShow6();
                    }}
                  >
                    Change Password
                  </Button> */}
              </div>
            </div>
          </div>
        
        {/* );
           })} */}
      </div>

      <Modal show={show5} onHide={handleClose5}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h4 style={{ textAlign: "center" }}>Edit Your Profile</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <div className="col-lg-12 mb-3">
              <label>Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Full Name"
                //   value={Name}
                //   onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="col-lg-12 mb-3">
            <label>Phone No</label>

              <input
                type="text"
                className="form-control"
                placeholder="Phone No"
                //   value={Phone}
                //   onChange={(e) => {
                //     setPhone(e.target.value);
                //   }}
              />
            </div>
            <div className="col-lg-12 mb-3">
              <label htmlFor="">Email</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Email "
                  // value={email}
                  // onChange={(e) => {setEmail(e.target.value)}}
                />
              </div>
          
              <div className="col-lg-12 mb-3">
                <label htmlFor="">Address</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="address"
                  // onChange={(e) => {setImages(e.target.files[0])}}
                />
              </div>
              <div className="col-lg-6 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="password"
                  // onChange={(e) => {setImages(e.target.files[0])}}
                />
              </div>
              <div className="col-lg-6 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="confirm password"
                  // onChange={(e) => {setImages(e.target.files[0])}}
                />
              </div>
            
           
          </Row>

          <div className="mb-4">
            <Button
              className="header-search"
              style={{ width: "100%" }}
              // onClick={()=>{editRegUser()}}
            >
              Update
            </Button>
            {/* {isVisible && (
                <div className="popup-content">Profile Update Successfully</div>
              )} */}
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default LProfile;
