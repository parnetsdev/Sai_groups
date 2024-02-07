import React, { useEffect } from "react";
import { MdDeleteOutline } from "react-icons/md";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import axios from "axios";

export default function LCheckout() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const agentDetails = sessionStorage.getItem("user");
  const [addcart, setAddcart] = useState([]);
  const [allCartData, setAllCartData] = useState([]);
  const getaddcart = async (item) => {
    let user = JSON.parse(agentDetails);
    let res = await axios.get(
      "http://saisathish.info/api/Admin/getAddtoCart/" + user?._id
    );
    if (res.status === 200) {
      setAddcart(res.data.addtocart);
      setAllCartData(res.data.addtocart);
    }
  };

  console.log(allCartData, "allCartData");
  let subtotal = 0;
  let total = 0;
  let discount = 0;
  let tax = 0;
  if (addcart?.length !== 0) {
    for (let i = 0; i < addcart.length; i++) {
      subtotal =
        subtotal + addcart[i]?.productId?.P_price * addcart[i].quantity;

      total = total + addcart[i]?.price * addcart[i]?.quantity;
      discount = subtotal - total;
      tax =
        tax +
        Math.round(
          addcart[i]?.productId?.P_price *
            ((addcart[i]?.productId?.P_cgst + addcart[i]?.productId?.P_sgst) /
              100)
        );
    }
  }

  //get address
  const [getaddress, setgetaddress] = useState([]);
  const [showAddress, setshowAress] = useState({});
  const [checkradio, setcheckradio] = useState();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");

  const [house, setHouse] = useState("");
  const [area, setArea] = useState("");
  const [landmark, setLandmark] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var mobilevalid = /^[6-9][0-9]{9}$/;

  let getAddress = async () => {
    let user = JSON.parse(agentDetails);
    try {
      let res = await axios.get(
        "http://saisathish.info/api/Admin/getAddress/" + user?._id
      );
      if (res.status === 200) {
        console.log("chdkfkfsafdasf", res.data.Address);
        setgetaddress(res.data.Address);
        setshowAress(res.data.Address[0]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const Addaddress = async () => {
    let user = JSON.parse(agentDetails);

    if (!name) {
      alert("Enter your Name");
      return;
    }
    if (!number) {
      alert("Enter Contact Number");
      return;
    }
    if (number.length != 10) {
      alert("Enter Contact Number should be 10 digits");
      return;
    }
    if (!number.match(mobilevalid)) {
      alert("Enter Valid Contact Number");
      return;
    }
    if (!email) {
      alert("Please Enter Your Email Id ");
      return;
    }
    if (!email.match(validRegex)) {
      alert("Enter Valid Email-Id");
      return;
    }

    if (!house) {
      alert("Enter Your House");
      return;
    }
    if (!area) {
      alert("Enter Your Area");
      return;
    }
    if (!landmark) {
      alert("Enter Your Landmark");
      return;
    }
    if (!selectedState) {
      alert("Enter Your State");
    }
    if (!selectedCity) {
      alert("Enter Your City");
      return;
    } else {
      try {
        const config = {
          url: "/Admin/Addaddress",
          method: "post",
          baseURL: "http://saisathish.info/api",
          headers: { "content-type": "application/json" },
          data: {
            userId: user._id,
            name: name,
            mobile: number,
            email: email,

            houseno: house,
            village: area,

            city: selectedCity,
            state: selectedState,
          },
        };

        let res = await axios(config);

        if (res.status === 200) {
          console.log("successss", res.data.success);
          getAddress();
          handleClose();
          alert("Add Successfully.");

          // navigation.navigate('Home');
        }
      } catch (error) {
        console.log(error);
        if (error.response) {
          alert(error.response.data.error);
        }
      }
    }
  };

  useEffect(() => {
    if (!agentDetails) {
      return alert("Please login first");
    } else {
      getaddcart();
      getAddress();
    }
  }, [agentDetails]);

  console.log(getaddress, "checking");

  return (
    <div className="main-container">
      <div
        className="d-flex justify-content-center p-5"
        style={{ textAlign: "center" }}
      >
        <div
          className="container"
          style={{
            // border: "1px solid black",
            borderRadius: "10px",
            padding: "10px",
            width: "1050px",
            boxShadow:
              "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            textAlign: "center",
          }}
        >
          <div className="row">
            <div className="col-md-6">
              <h3 style={{ textAlign: "center" }}>Order Details</h3>
              <div style={{ padding: "10px" }}>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h6>1. Price</h6>
                  <h6>₹ {total}</h6>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h6>2. Product Discount</h6>
                  <h6>₹ 0</h6>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h6>3. Total Amount</h6>
                  <h6>₹ {total}</h6>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <h6>4. Payment Method</h6>
                  <h6>Online</h6>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h3 style={{ textAlign: "center" }}>Shipping Address</h3>
              <div style={{ padding: "10px" }}>
                {Object.keys(getaddress).length ? (
                  <div>
                    {getaddress.map((item) => {
                      return (
                        <div style={{ display: "flex" }}>
                          <div>
                            <input
                              type="radio"
                              id="huey"
                              name="drone"
                              value="huey"
                              style={{ display: "block", marginRight: "10px" }}
                              status={
                                checkradio?._id == item._id
                                  ? "checked"
                                  : "unchecked"
                              }
                              onClick={() => setcheckradio(item)}
                            />
                          </div>
                          <h6>
                            {" "}
                            {item?.name},{item?.mobile},{item?.email}, House No
                            = {item?.houseno},Area ={item?.village}, City ={" "}
                            {item?.city}
                            ,State = {item?.state}
                          </h6>
                          <div style={{ marginLeft: "20px" }}>
                            <MdDeleteOutline
                              style={{ color: "red", fontSize: "27px" }}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <></>
                )}
                <button
                  style={{
                    border: "0px solid #3DD065",
                    backgroundColor: "#3DD065",
                    width: "105px",
                    height: "40px",
                    borderRadius: "10px",
                  }}
                  onClick={() => handleShow()}
                >
                  Add Address
                </button>
              </div>
            </div>
          </div>
          <button
            style={{
              border: "0px solid #3DD065",
              backgroundColor: "#3DD065",
              width: "105px",
              height: "40px",
              borderRadius: "10px",
            }}
            // onClick={() => handleShow()}
          >
            Place Order
          </button>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Your Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control
                type="text"
                value={name}
                placeholder="Name"
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="Number"
                placeholder="Mobile Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="email"
                placeholder="Email: name@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="House Number "
                value={house}
                onChange={(e) => setHouse(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Area"
                value={area}
                onChange={(e) => setArea(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control
                type="text"
                placeholder="Landmark"
                value={landmark}
                onChange={(e) => setLandmark(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="city"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              {/* <Form.Label>Email address</Form.Label> */}
              <Form.Control
                type="text"
                placeholder="state"
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => Addaddress()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
