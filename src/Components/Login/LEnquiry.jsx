import axios from "axios";
import React from "react";
import { useState } from "react";
import { Container, Form, Modal } from "react-bootstrap";

const LEnquiry = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const [Subject, setSubject] = useState("");
    const [Name, setName] = useState("");
    const [Number, setNumber] = useState("");
    const [Email, setEmail] = useState("");
    const [Msg, setMsg] = useState("");
  
    const sendmail = async () => {
      try {
        if (!Subject) return alert("Please Select Business / Services");
        if (!Name) return alert("Please Enter Your Name");
        if (!Number) return alert("Please Enter Your Number");
        if (!Email) return alert("Please Enter Your Email");
        if (!Msg) return alert("Do Not leave Empty Comment Section");
  
        const config = {
          url: "/sendmailforenquiry",
          method: "post",
          baseURL: "http://saisathish.info/api/user",
          headers: { "content-type": "application/Json" },
          data: {
            subject: Subject,
            name: Name,
            mobile: Number,
            email: Email,
            comment: Msg,
          },
        };
        let res = await axios(config);
        if (res.status == 200) {
          alert("Mail Sent Successfully");
          window.location.assign("/");
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    const buttonWidth = 70;
  
    return (
      <div>
        <Container>
          <div
            onClick={handleShow}
            style={{
              marginLeft: buttonWidth,
              whiteSpace: "nowrap",
            }}
          >
            <div className="scroll_top_button active_0 kk ">
              <img
                src="../img/customer-service.png"
                alt=""
                style={{ width: "30px", height: "30px" }}
              />
  
              <p style={{ fontSize: "12px", color: "#000", fontWeight: "bold" }}>
                Enquiry Now
              </p>
            </div>
          </div>
        </Container>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title className="business-img-text mb-0" >
             <p style={{color:"#69CC4D"}}> Enquiry Now</p>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div>
           

            <div>
              <label>Name</label>
              <input
                style={{ border: "1px solid #69CC4D" }}
                type="text"
                className="form-control  mb-3"
                placeholder="Name"
                aria-label="Name"
                aria-describedby="basic-addon1"
                onChange={(e) => setName(e.target.value)}
              />
              <label>Phone No</label>
              <input
                style={{ border: "1px solid #69CC4D" }}
                type="number"
                className="form-control mb-3"
                placeholder="Number"
                aria-label="Number"
                aria-describedby="basic-addon1"
                onChange={(e) => setNumber(e.target.value)}
              />
            </div>

            <div>
              <label>Email ID</label>
              <input
                style={{ border: "1px solid #69CC4D" }}
                type="email"
                className="form-control mb-3"
                placeholder="Email ID"
                aria-label="Email ID"
                aria-describedby="basic-addon1"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Enquire </label>
              <textarea
                style={{ border: "1px solid #69CC4D" }}
                class="form-control"
                placeholder="Message"
                id="floatingTextarea"
                onChange={(e) => setMsg(e.target.value)}
              ></textarea>
            </div>
          </div>
        </Modal.Body>
          <Modal.Footer className="justify-content-center">
            <div>
              {" "}
              <button
                className="enquery-now "
                style={{ width: "300px" }}
                // onClick={sendmail}
              >
                Send Mail
              </button>
            </div>
          </Modal.Footer>
        </Modal>
      </div>
    );
  };
export default LEnquiry