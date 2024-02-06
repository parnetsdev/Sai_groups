import React, { useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";

const LBookedDetails = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <div className="container mt-3" style={{ backgroundColor: "white" }}>
        <div className="row ">
          <div className="col-md-12 text-center">
            <h3 style={{ color: "#3DD065" }}> Booked Yathra Details</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mt-3">
            <Table responsive bordered style={{ width: "max-content" }}>
              <thead>
                <tr>
                  <th>S.No</th>
                  <th>Partner ID</th>
                  <th>Bussiness Name</th>
                  <th>Email</th>
                  <th>Contact Person</th>
                  <th>Contact Number</th>
                  <th>Start Date</th>
                  <th>No of Booking</th>
                  <th>Total Amount</th>
                  <th>Recived Amount</th>
                  <th>Payment Id</th>
                  <th>Payment Date</th>
                  <th>Passangers Details</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>1.</td>
                  <td>sdsfdf</td>
                  <td>sdfsdf</td>
                  <td>sdfsd</td>
                  <td>sheetal</td>
                  <td>42343</td>
                  <td>12-07-2001</td>
                  <td>ddfsdf</td>

                  <td>₹34234</td>
                  <td>₹2343</td>
                  <td>234sdfsdfsd</td>
                  <td>12-07-2001</td>
                  <td>
                    <AiFillEye
                      style={{ fontSize: "20px", color: "blue" }}
                      onClick={handleShow}
                    />
                  </td>
                  <td>Pending</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>

        <h4 style={{ textAlign: "center" }}>Passenger Details</h4>
        <Modal.Body>
          <Table
            responsive
            bordered
            style={{ width: "-webkit-fill-available" }}
          >
            <thead>
              <tr>
                <th>S.No</th>
                <th>
                  <div style={{ width: "150px" }}>Conatct Person</div>
                </th>
                <th>
                  <div>Customer Details</div>
                </th>
                <th>
                  <div style={{ width: "150px" }}>Email Id</div>
                </th>
                <th>
                  <div>Amount</div>
                </th>
                <th>
                  <div style={{ width: "120px" }}>Status</div>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>sdasdasd</td>
                <td>
                  <div>
                    <Table responsive bordered>
                      <thead>
                        <tr>
                          <th>BookingId</th>
                          <th style={{ width: "120px" }}>Name</th>
                          <th>
                            <div style={{ width: "120px" }}>Seat No</div>
                          </th>
                          <th>Age</th>
                          <th>Gender</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>12312</td>
                          <td>asdasd</td>
                          <td>27</td>
                          <td>200</td>
                          <td>sdfsdf</td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </td>

                <td>sdfsdf</td>
                <td>2323</td>
                <td>Pending</td>
              </tr>
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{ backgroundColor: "#52f310", color: "#ffff" }}
            onClick={handleClose}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default LBookedDetails;
