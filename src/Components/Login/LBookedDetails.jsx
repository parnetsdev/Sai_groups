import axios from "axios";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { Button, Modal, Table } from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";

const LBookedDetails = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [bookings, setBooking] = useState([]);

  const [allbooked, setAllBooked] = useState([]);
  // console.log('allboked', allbooked);
  // const Allbookedseat = allbooked
  //   ?.filter(ele => ele?.Bookingdate === date1)
  //   ?.map(item => item?.SeatNo);

  const Allbooking = async (item) => {
    let res = await axios.get(
      "http://saisathish.info/api/Admin/getAllBooking/"
    );
    if (res.status === 200) {
      setAllBooked(res.data.success);
    }
  };



  useEffect(() => {
    Allbooking();
  }, []);

    // const getUserId = async (id) => {
    //   try {
    //     await axios
    //       .get("http://saisathish.info/api/Admin/getBookingBy/" + id)
    //       .then((res) => {
    //         if ((res.status = 200)) {
    //           setBooking(res.data.success);
    //         }
    //       });
    //   } catch (error) {
    //     console.log(error);
    //   }
    // }
  //   ;
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
                {allbooked?.map((item, i) => {
                  const data = `${item?.SeatNo}`;
                  return (
                    <tr key={i}>
                      <td>{i + 1}</td>
                      <td>{item?.userId?.partnerId}</td>
                      <td>{item?.userId?.businessname}</td>
                      <td>{item?.email}</td>
                      <td>{item?.name}</td>
                      <td>{item?.mobile}</td>
                      <td>{item?.Bookingdate}</td>
                      <td>{data}</td>

                      <td>₹{item?.amount}</td>
                      <td>₹{item?.amount}</td>
                      <td>{item?.PayId}</td>
                      <td>{moment(item?.createdAt).format("lll")}</td>
                      <td>
                      
                        <AiFillEye
                          style={{ fontSize: "20px", color: "blue" }}
                          onClick={() => {
                            // getUserId(item?._id);
                            handleShow(item?._id);
                            setBooking(item);
                          }}
                        />
                        
                      </td>
                      <td>Pending</td>
                    </tr>
                  );
                })}
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
                <td>{bookings?.name}</td>
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
                      {bookings?.customerdetails?.map((ele) => {
                          return (
                            <tr key={ele?._id}>
                              <td>{ele?._id}</td>
                              <td>{ele?.name}</td>
                              <td>{ele?.seatno}</td>
                              <td>{ele?.age}</td>
                              <td>{ele?.gender}</td>
                            </tr>
                       );
                      })}
                      </tbody>
                    </Table>
                  </div>
                </td>

                <td>{bookings?.email}</td>
                <td>{bookings?.Total}</td>
                <td>{bookings?.Status}</td>
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
