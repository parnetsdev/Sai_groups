import React, { useEffect, useState } from "react";
import { Button, Modal, Row, Table } from "react-bootstrap";
import LFooter from "./LFooter";
import { AiFillEye } from "react-icons/ai";
import axios from "axios";
import moment from "moment";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const LOrderHistroy = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [OrdersPerPage] = useState(10);

  const [details, setDetails] = useState({});
  const [allorder, setAllorder] = useState([]);
  const getAllorder = async () => {
    let res = await axios.get(
      "http://saisathish.info/api/Admin/getOrderDetails"
    );
    if (res.status === 200) {
      setAllorder(res.data.OrderList);
    }
  };

  useEffect(() => {
    getAllorder();
  }, []);

  useEffect(() => {
    console.log("hfhfhfhffhf: ", details);
  }, [details]);

  // to print the pdf ----->
  const createPDF = async () => {
    // setRotate(360);

    // dynamic image is also adding in the PDF
    const pdf = new jsPDF("portrait", "pt", "a4");
    const data = await html2canvas(document.querySelector("#pdf"), {
      useCORS: true,
    });
    console.log("hhhh", data);
    const img = data.toDataURL("image/png");
    console.log("ddkd1", img);
    const imgProperties = pdf.getImageProperties(img);
    console.log("ddkd2", imgProperties);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    console.log("ddkd3", pdfWidth);
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;
    console.log("ddkd4", pdfHeight);
    pdf.addImage(img, "PNG", 0, 0, pdfWidth, pdfHeight);

    // const input = document.getElementById("pdf");
    // const options = { scrollY: -window.scrollY, useCORS: true };
    // const canvas = await html2canvas(input, options);
    // const imgData = canvas.toDataURL("image/png");
    // const pdf = new jsPDF("p", "pt", [canvas.width, canvas.height]);
    // pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);

    pdf.save("RakshaKavachaInvoice.pdf");
  };

  const indexOfLastOrder = currentPage * OrdersPerPage;
  const indexOfFirstOrder = indexOfLastOrder - OrdersPerPage;
  const currentOrders = allorder.slice(indexOfFirstOrder, indexOfLastOrder);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
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
                {/* {allorder.map((user, index) => ( */}
                {currentOrders?.map((item, i) => {
                  const formattedDate = moment(
                    item?.customerorderdatetime
                  ).format("DD/MM/YYYY");
                  return (
                    <tr>
                      <td>{i + 1}</td>
                      <td>{item?._id}</td>

                      <td>{item?.FName}</td>
                      <td>{item?.email}</td>
                      <td>{item?.Phno}</td>
                      <td>{formattedDate}</td>
                      {/* <td>{item?.deliverydate}</td> */}
                      <td>
                        {" "}
                        {item?.allproduct?.map(
                          (item) => item?.productId?.productName
                        )}
                      </td>
                      <td>
                        {" "}
                        {item?.House},{item?.Area},{item?.Landmark},{item?.City}
                        ,{item?.State}
                      </td>
                      {/* <td>Customer Details</td> */}
                      <td>₹{item?.Totalamount}</td>
                      <td>{item?.PaymentId}</td>
                      <td> {moment(item?.createdAt).format("ll")}</td>
                      <td>
                        {" "}
                        <AiFillEye
                          style={{ fontSize: "20px", color: "blue" }}
                          onClick={() => {
                            handleShow();
                            setDetails(item);
                          }}
                        />
                      </td>
                      <td>
                        {" "}
                        {item?.DeliveredStatus == false ? (
                          <span style={{ color: "green" }}>Pending</span>
                        ) : (
                          <span style={{ color: "red" }}>Deliverd</span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            <div className="pagination d-flex justify-content-end mt-3 mb-3">
              {[...Array(Math.ceil(allorder.length / OrdersPerPage))].map(
                (_, index) => (
                  <Button
                    style={{ marginRight: "5px" }}
                    key={index}
                    onClick={() => paginate(index + 1)}
                  >
                    {index + 1}
                  </Button>
                )
              )}
            </div>
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
          <div className="p-5" id="pdf">
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
                    No 01, 1st Floor Govindappa Complex,
                    <br />
                    Near AtoZ Mart,Shiva Mandir Road, <br />
                    Yelahanka New Town, <br /> Bangalore, Karnataka 560064
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
                      {details?.FName},{details?.Phno},<br />
                      {details?.email},{details?.House},<br />
                      {details?.Area},{details?.Landmark},<br />
                      {details?.City},{details?.State}
                      <br></br>
                      {details?.Phno}
                    </p>
                  </div>
                </div>
                <div className="invoice-header">
                  <div>
                    <h4>Booked Details</h4>
                  </div>
                  <hr></hr>
                  <div>
                    <b>User ID:</b>
                    {details?._id}
                    <br></br>
                    <b>Order Date:</b>{" "}
                    {moment(details?.customerorderdatetime).format(
                      "DD/MM/YYYY"
                    )}
                    <br></br>
                    {/* <b>Product Name:</b>
                    {details?.allproduct?.map(
                      (item) => item?.productId?.productName
                    )}
                    <br></br> */}
                    <b>Pay ID:</b>
                    {details?.PaymentId}
                    <br></br>
                  </div>
                </div>
              </div>
            </Row>
            <br></br>
            <Table responsive>
              <thead style={{ textAlign: "center" }}>
                <th>S.no.</th>
                <th>Product Name</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </thead>
              <tbody>
                {details?.allproduct?.map((item, i) => {
                  return (
                    <tr>
                      <td>{++i}</td>
                      <td>{item?.productId?.productName}</td>
                      <td>{item?.productId?.price}</td>
                      <td>{item?.quantity}</td>
                      <td>{item?.productId?.price * item?.quantity}</td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
            <hr style={{ marginTop: "2rem" }}></hr>

            <Row>
              <div
                className="col-lg-12 mb-3 mt-3"
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
                  <p style={{ textAlign: "right" }}>₹{details?.Totalamount}</p>
                </div>
              </div>
            </Row>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button
            style={{ backgroundColor: "#52f310", color: "#ffff" }}
            onClick={handleClose}
          >
            Close
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              handleClose();
              createPDF();
            }}
          >
            Download Invoice
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default LOrderHistroy;
