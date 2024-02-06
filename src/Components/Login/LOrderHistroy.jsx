import React, { useState } from "react";
import { Button, Modal, Row, Table } from "react-bootstrap";
import LFooter from "./LFooter";
import { AiFillEye } from "react-icons/ai";

const LOrderHistroy = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className="container mt-3" style={{ backgroundColor: "white" }}>
        <div className="row ">
          <div className="col-md-12 text-center">
            <h3 style={{ color: "#3DD065" }}> Order Details</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mt-3">
            <Table responsive bordered style={{ width: "max-content" }}>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>User ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone No.</th>
                  <th>Order date</th>
                  {/* <th>Delivery date</th> */}
                  <th>ProductName</th>
                  <th>Address</th>
                  {/* <th>Customer Details</th> */}
                  <th>Total</th>
                  <th>PayId</th>
                  <th>Order Date </th>
                  <th>Invoice</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {/* {users.map((user, index) => ( */}
                <tr>
                  <td>1</td>
                  <td>12434</td>

                  {/* <td>
                  {item.allproduct.map((items) => items.productId.productName)}
                </td> */}
                  <td>sfgfsf</td>
                  <td>sggsg</td>
                  <td>24324</td>
                  <td>sdfdsf</td>
                  {/* <td>{item?.deliverydate}</td> */}
                  <td>sdfsdfsdf</td>
                  <td>sdfdfsd</td>
                  {/* <td>Customer Details</td> */}
                  <td>₹2342343</td>
                  <td>234234wwerwe23423</td>
                  <td>12-07-2001</td>
                  <td>
                    {" "}
                    <AiFillEye style={{ fontSize: "20px", color: "blue" }} onClick={handleShow}/>
                  </td>
                  <td>delivered</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
        {/* <div
            className="row"
            style={{ border: "1px solid #3DD065", padding: "10px" }}
          >
            <div className="col-md-10">
              <div className="row ">
                <div className="col-md-12 mt-3">
                  <div className="row">
                    <div className="col-md-4 text-end">
                      <label htmlFor="">Order ID</label>
                    </div>
                    <div className="col-md-1 ps-5">:</div>
                    <div className="col-md-6 d-flex justify-content-between">
                      <p> 657858a7d31f9b9ee0a85696</p>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 mt-3">
                  <div className="row">
                    <div className="col-md-4 text-end">
                      <label htmlFor="">Order Date</label>
                    </div>
                    <div className="col-md-1 ps-5">:</div>
                    <div className="col-md-6 d-flex justify-content-between">
                      <p> 12/12/2023</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mt-3">
                  <div className="row">
                    <div className="col-md-4 text-end">
                      <label htmlFor="">Product Name</label>
                    </div>
                    <div className="col-md-1 ps-5">:</div>
                    <div className="col-md-6 d-flex justify-content-between">
                      <p> Old Plated Shri Sai Raksha Kavach With Sai Yantra</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mt-3">
                  <div className="row">
                    <div className="col-md-4 text-end">
                      <label htmlFor=""> Deliverable Address</label>
                    </div>
                    <div className="col-md-1 ps-5">:</div>
                    <div className="col-md-6 d-flex justify-content-between">
                      <p>
                        {" "}
                        Independent ,Independent ,Kengeri ,Bangalore ,Karnataka
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 mt-3">
                  <div className="row">
                    <div className="col-md-4 text-end">
                      <label htmlFor="">Order Status</label>
                    </div>
                    <div className="col-md-1 ps-5">:</div>
                    <div className="col-md-6 d-flex justify-content-between">
                      <p>Delivered</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2" style={{ paddingTop: "6rem" }}>
              <button
                className="btn btn-success"
                onClick={() => {
                  handleShow();
                }}
              >
                View Invoice
              </button>
            </div>
          </div> */}
      </div>

      <LFooter />

      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <h4 style={{ textAlign: "center" }}>Booked History</h4>
        <Modal.Body>
          <Row>
            <div
              className="col-lg-12 mb-3"
              style={{
                display: "flex",
                height: "10rem",
                justifyContent: "space-between",
              }}
            >
              <div className="invoice-header">
                <img
                  src="./assets/logo.webp"
                  alt=""
                  className="footer-logo"
                  style={{ width: "90%", height: "150px", display: "flex" }}
                />
              </div>
              <div className="invoice-header">
                <p style={{ textAlign: "right" }}>
                  {" "}
                  #104, 1, Singapura Main Rd, <br></br>
                  Vidyaranyapura, Bengaluru, <br></br>
                  Karnataka 560097<br></br>
                  SaiGroups@gmail.com <br></br>
                  SaiGroups.com{" "}
                </p>
              </div>
            </div>
          </Row>

          <Row>
            <div
              className="col-lg-12 mb-3"
              style={{
                display: "flex",
                height: "10rem",
                justifyContent: "space-between",
              }}
            >
              <div className="invoice-header">
                <div>
                  <h4>Bill To</h4>
                </div>
                <hr></hr>
                <div>
                  <p>
                    Independent ,Independent ,Kengeri ,<br />
                    bangalore, 560097
                    <br></br>
                    +91 8979789798
                  </p>
                </div>
              </div>
              <div className="invoice-header">
                <div>
                  <h4>Booked Details</h4>
                </div>
                <hr></hr>
                <div>
                  <b>Order ID:</b>
                  657858a7d31f9b9ee0a85696<br></br>
                  <b>Order Date:</b> 16/12/2023 <br></br>
                  <b>Product Name:</b> Old Plated Shri Sai Raksha Kavach With
                  Sai Yantra<br></br>
                  <b>Pay ID:</b> pay_NBRSNjzsYPu4Sx <br></br>
                </div>
              </div>
            </div>
          </Row>

          <Row>
            <hr></hr>
            <div
              className="col-lg-12 mb-3"
              style={{
                display: "flex",
                height: "1rem",
                justifyContent: "space-between",
              }}
            >
              <div className="invoice-header">
                <h4>Total</h4>
              </div>
              <div className="invoice-header">
                <p style={{ textAlign: "right" }}>₹ 15000</p>
              </div>
            </div>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{ backgroundColor: "#52f310", color: "#ffff" }}
            onClick={handleClose}
          >
            Close
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Download Invoice
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default LOrderHistroy;
