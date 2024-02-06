import React, { useState } from "react";
import { FaPlaneDeparture } from "react-icons/fa";
import { TbBus } from "react-icons/tb";
import "./Styles/LBookYathra.css";
import { Button, Modal, Table } from "react-bootstrap";
const LBookYathra = () => {
  const [bus, setbus] = useState(true);
  const [Aeroplane, setAeroplane] = useState(false);

  const [show, setShow] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <img
              src="./img/bussiness-img-1.webp"
              alt=""
              style={{ width: "100%", height: "400px" }}
            />
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-md-12 text-center">
            <div
              style={{
                display: "flex",
                gap: "15rem",
                justifyContent: "center",
              }}
            >
              <div
                className="buttons-bus-air"
                onClick={() => {
                  setbus(true);
                  setAeroplane(false);
                }}
                style={{
                  border: "1px solid #69CC4D",
                  borderRadius: "5px",
                  padding: "10px",
                  width: "8%",
                }}
              >
                <img
                  src="./img/school-bus.png"
                  alt=""
                  style={{ width: "50%", height: "50%" }}
                />
                <p> Bus Package</p>
              </div>
              <div
                className="buttons-bus-air"
                onClick={() => {
                  setbus(false);
                  setAeroplane(true);
                }}
                style={{
                  border: "1px solid #69CC4D",
                  borderRadius: "5px",
                  padding: "10px",
                  width: "8%",
                }}
              >
                <img
                  src="./img/airplane.png"
                  alt=""
                  style={{ width: "50%", height: "50%" }}
                />
                <p> Aeroplane</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {bus ? (
        <>
          <div className="container">
            <div
              className="row mt-2"
              style={{
                backgroundColor: "#DDDDDD",
                padding: "10px",
                borderRadius: "15px",
              }}
            >
              <div className="col-md-12 text-center">
                <h2>
                  <b style={{ color: "#69CC4D" }}>BUS PACKAGE</b>
                </h2>
                <h4>
                  <b>5 Nights and 5 Days Shiridi Yathra</b> (₹7800/person)
                </h4>
                <h5>
                  <b>Date of Journey</b> (Every week Wednesday){" "}
                </h5>
              </div>
              <div className="col-md-12 text-center">
                <label htmlFor="">Select Date</label>
                <br />
                <select name="" id="" className="vi_00">
                  <option value="">--Select Date--</option>
                  <option value="">12-7-2001</option>
                  <option value="">13-7-2001</option>
                  <option value="">14-7-2001</option>
                  <option value="">15-7-2001</option>
                  <option value="">16-7-2001</option>
                  <option value="">17-7-2001</option>
                  <option value="">18-7-2001</option>
                  <option value="">19-7-2001</option>
                  <option value="">20-7-2001</option>
                </select>
              </div>
            </div>
            <div
              className="row"
              style={{
                backgroundColor: "#DDDDDD",
                padding: "10px",
                borderRadius: "15px",
              }}
            >
              <div className="col-md-5">
                <div className="contact-form-section">
                  <div className="form-container">
                    <div className="faq">
                      <h2>TOUR ITINEARARY</h2>
                      <ul className="accordian" style={{ padding: "0px" }}>
                        <li>
                          <input type="radio" name="accordian" id="first" />
                          <label htmlFor="first">Day 1</label>
                          <div className="content">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua
                            </p>
                          </div>
                        </li>

                        <li>
                          <input type="radio" name="accordian" id="second" />
                          <label htmlFor="second">Day 2</label>
                          <div className="content">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua
                            </p>
                          </div>
                        </li>

                        <li>
                          <input type="radio" name="accordian" id="third" />
                          <label htmlFor="third">Day 3</label>
                          <div className="content">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua
                            </p>
                          </div>
                        </li>

                        <li>
                          <input type="radio" name="accordian" id="fourth" />
                          <label htmlFor="fourth">Day 4</label>
                          <div className="content">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua
                            </p>
                          </div>
                        </li>

                        <li>
                          <input type="radio" name="accordian" id="fifth" />
                          <label htmlFor="fifth">Day 5</label>
                          <div className="content">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua
                            </p>
                          </div>
                        </li>

                        <li>
                          <input type="radio" name="accordian" id="sixth" />
                          <label htmlFor="sixth">Day 6</label>
                          <div className="content">
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="contact-form-section">
                  <div className="faq">
                    <h2>Menu Chart</h2>
                    <div>
                      <Table bordered>
                        <thead bordered>
                          <th>Day</th>
                          <th>Morning</th>
                          <th>Afternoon</th>
                          <th>Evening</th>
                          <th>Night</th>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Day 1</td>
                            <td>Uppitt,kesaribath & coffee,tea</td>
                            <td>Rice Sambar,buttermilk,palya with pickle</td>
                            <td>Chilli Bajji ,Coffee & Tea</td>
                            <td>Anna Rasam Curd Palya & Pickle</td>
                          </tr>{" "}
                          <tr>
                            <td>Day 1</td>
                            <td>Uppitt,kesaribath & coffee,tea</td>
                            <td>Rice Sambar,buttermilk,palya with pickle</td>
                            <td>Chilli Bajji ,Coffee & Tea</td>
                            <td>Anna Rasam Curd Palya & Pickle</td>
                          </tr>{" "}
                          <tr>
                            <td>Day 1</td>
                            <td>Uppitt,kesaribath & coffee,tea</td>
                            <td>Rice Sambar,buttermilk,palya with pickle</td>
                            <td>Chilli Bajji ,Coffee & Tea</td>
                            <td>Anna Rasam Curd Palya & Pickle</td>
                          </tr>{" "}
                          <tr>
                            <td>Day 1</td>
                            <td>Uppitt,kesaribath & coffee,tea</td>
                            <td>Rice Sambar,buttermilk,palya with pickle</td>
                            <td>Chilli Bajji ,Coffee & Tea</td>
                            <td>Anna Rasam Curd Palya & Pickle</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 p-4 d-flex justify-content-evenly">
                {/* <div className=""> */}
                <div>
                  <h4>
                    <b>Lodging Details</b>
                  </h4>
                  <h6>Day 1 Night @ Tuljapur (3 star hotel)</h6>
                  <h6>Day 2 Night @ Tuljapur (3 star hotel)</h6>
                  <h6>Day 3 Night @ Tuljapur (3 star hotel)</h6>
                  <h6>Day 4 Night @ Tuljapur (3 star hotel)</h6>
                </div>
                <div style={{ paddingTop: "4rem" }}>
                  <button className="btn btn-success" onClick={handleShow}>
                    View Seats
                  </button>
                </div>
                {/* </div> */}
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          {Aeroplane ? (
            <>
              <div className="container">
                <div
                  className="row mt-2"
                  style={{
                    backgroundColor: "#DDDDDD",
                    padding: "10px",
                    borderRadius: "15px",
                  }}
                >
                  <div className="col-md-12 text-center">
                    <h2>
                      <b style={{ color: "#69CC4D" }}>AEROPLANE PACKAGE</b>
                    </h2>
                    <h4>
                      <b>5 Nights and 5 Days Shiridi Yathra</b> (₹7800/person)
                    </h4>
                    <h5>
                      <b>Date of Journey</b> (Every week Wednesday){" "}
                    </h5>
                  </div>
                  <div className="col-md-12 text-center">
                    <label htmlFor="">Select Date</label>
                    <br />
                    <select name="" id="" className="vi_00">
                      <option value="">--Select Date--</option>
                      <option value="">12-7-2001</option>
                      <option value="">13-7-2001</option>
                      <option value="">14-7-2001</option>
                      <option value="">15-7-2001</option>
                      <option value="">16-7-2001</option>
                      <option value="">17-7-2001</option>
                      <option value="">18-7-2001</option>
                      <option value="">19-7-2001</option>
                      <option value="">20-7-2001</option>
                    </select>
                  </div>
                </div>
                <div
                  className="row"
                  style={{
                    backgroundColor: "#DDDDDD",
                    padding: "10px",
                    borderRadius: "15px",
                  }}
                >
                  <div className="col-md-5">
                    <div className="contact-form-section">
                      <div className="form-container">
                        <div className="faq">
                          <h2>TOUR ITINEARARY</h2>
                          <ul className="accordian" style={{ padding: "0px" }}>
                            <li>
                              <input type="radio" name="accordian" id="first" />
                              <label htmlFor="first">Day 1</label>
                              <div className="content">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua
                                </p>
                              </div>
                            </li>

                            <li>
                              <input
                                type="radio"
                                name="accordian"
                                id="second"
                              />
                              <label htmlFor="second">Day 2</label>
                              <div className="content">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua
                                </p>
                              </div>
                            </li>

                            <li>
                              <input type="radio" name="accordian" id="third" />
                              <label htmlFor="third">Day 3</label>
                              <div className="content">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua
                                </p>
                              </div>
                            </li>

                            <li>
                              <input
                                type="radio"
                                name="accordian"
                                id="fourth"
                              />
                              <label htmlFor="fourth">Day 4</label>
                              <div className="content">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua
                                </p>
                              </div>
                            </li>

                            <li>
                              <input type="radio" name="accordian" id="fifth" />
                              <label htmlFor="fifth">Day 5</label>
                              <div className="content">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua
                                </p>
                              </div>
                            </li>

                            <li>
                              <input type="radio" name="accordian" id="sixth" />
                              <label htmlFor="sixth">Day 6</label>
                              <div className="content">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipiscing elit, sed do eiusmod tempor
                                  incididunt ut labore et dolore magna aliqua
                                </p>
                              </div>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="contact-form-section">
                      <div className="faq">
                        <h2>Menu Chart</h2>
                        <div>
                          <Table bordered>
                            <thead bordered>
                              <th>Day</th>
                              <th>Morning</th>
                              <th>Afternoon</th>
                              <th>Evening</th>
                              <th>Night</th>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Day 1</td>
                                <td>Uppitt,kesaribath & coffee,tea</td>
                                <td>
                                  Rice Sambar,buttermilk,palya with pickle
                                </td>
                                <td>Chilli Bajji ,Coffee & Tea</td>
                                <td>Anna Rasam Curd Palya & Pickle</td>
                              </tr>{" "}
                              <tr>
                                <td>Day 1</td>
                                <td>Uppitt,kesaribath & coffee,tea</td>
                                <td>
                                  Rice Sambar,buttermilk,palya with pickle
                                </td>
                                <td>Chilli Bajji ,Coffee & Tea</td>
                                <td>Anna Rasam Curd Palya & Pickle</td>
                              </tr>{" "}
                              <tr>
                                <td>Day 1</td>
                                <td>Uppitt,kesaribath & coffee,tea</td>
                                <td>
                                  Rice Sambar,buttermilk,palya with pickle
                                </td>
                                <td>Chilli Bajji ,Coffee & Tea</td>
                                <td>Anna Rasam Curd Palya & Pickle</td>
                              </tr>{" "}
                              <tr>
                                <td>Day 1</td>
                                <td>Uppitt,kesaribath & coffee,tea</td>
                                <td>
                                  Rice Sambar,buttermilk,palya with pickle
                                </td>
                                <td>Chilli Bajji ,Coffee & Tea</td>
                                <td>Anna Rasam Curd Palya & Pickle</td>
                              </tr>
                            </tbody>
                          </Table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 p-4 d-flex justify-content-evenly">
                    {/* <div className=""> */}
                    <div>
                      <h4>
                        <b>Lodging Details</b>
                      </h4>
                      <h6>Day 1 Night @ Tuljapur (3 star hotel)</h6>
                      <h6>Day 2 Night @ Tuljapur (3 star hotel)</h6>
                      <h6>Day 3 Night @ Tuljapur (3 star hotel)</h6>
                      <h6>Day 4 Night @ Tuljapur (3 star hotel)</h6>
                    </div>
                    <div style={{ paddingTop: "4rem" }}>
                      <button className="btn btn-success" onClick={handleShow}>
                        View Seats
                      </button>
                    </div>
                    {/* </div> */}
                  </div>
                </div>
              </div>
            </>
          ) : (
            <></>
          )}
        </>
      )}

      <Modal size="md" show={show} onHide={handleClose}>
        <Modal.Header closeButton style={{backgroundColor:"#69CC4D",color:"white"}}>
          <Modal.Title>
            <h4>Select Your Choice of Seat</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-1"  style={{backgroundColor:"#FF6767",borderRadius:"50%"}}>
                                <div>
                                    <p className="ms-3"><b>Selected</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-1"  style={{backgroundColor:"#139c49",borderRadius:"50%"}}>
                                <div>
                                    <p className="ms-3"><b>Available</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="row">
                            <div className="col-md-1"  style={{backgroundColor:"#4F4F4F",borderRadius:"50%"}}>
                                <div>
                                    <p className="ms-3"><b>Booked</b></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mt-3 p-4">
                <div className="row">
                    <div className="col-md-12 d-flex justify-content-end">
                        <div className="d-flex gap-3" >
                            <p className="seats">3</p>
                            <p className="seats">4</p>
                        </div>
                    </div>
                    <div className="col-md-12 mt-2">
                        <div style={{display:"flex",justifyContent:"space-between"}}>
                        <div className="d-flex gap-3" >
                            <p className="seats">1</p>
                            <p className="seats">2</p>
                        </div>
                        <div className="d-flex gap-3" >
                            <p className="seats">7</p>
                            <p className="seats">8</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-12 mt-2">
                        <div style={{display:"flex",justifyContent:"space-between"}}>
                        <div className="d-flex gap-3" >
                            <p className="seats">5</p>
                            <p className="seats">6</p>
                        </div>
                        <div className="d-flex gap-3" >
                            <p className="seats">11</p>
                            <p className="seats">12</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-12 mt-2">
                        <div style={{display:"flex",justifyContent:"space-between"}}>
                        <div className="d-flex gap-3" >
                            <p className="seats">9</p>
                            <p className="seats">10</p>
                        </div>
                        <div className="d-flex gap-3" >
                            <p className="seats">13</p>
                            <p className="seats">14</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-12 mt-2">
                        <div style={{display:"flex",justifyContent:"space-between"}}>
                        <div className="d-flex gap-3" >
                            <p className="seats">15</p>
                            <p className="seats">16</p>
                        </div>
                        <div className="d-flex gap-3" >
                            <p className="seats">17</p>
                            <p className="seats">18</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-12 mt-2">
                        <div style={{display:"flex",justifyContent:"space-between"}}>
                        <div className="d-flex gap-3" >
                            <p className="seats">19</p>
                            <p className="seats">20</p>
                        </div>
                        <div className="d-flex gap-3" >
                            <p className="seats">21</p>
                            <p className="seats">22</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-12 mt-2">
                        <div style={{display:"flex",justifyContent:"space-between"}}>
                        <div className="d-flex gap-3" >
                            <p className="seats">23</p>
                            <p className="seats">24</p>
                        </div>
                        <div className="d-flex gap-3" >
                            <p className="seats">25</p>
                            <p className="seats">26</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-12 mt-2">
                        <div style={{display:"flex",justifyContent:"space-evenly"}}>
                        <div className="d-flex gap-3" >
                            <p className="seats">27</p>
                            <p className="seats">28</p>
                            <p className="seats">29</p>
                            <p className="seats">30</p>
                            <p className="seats">31</p>
                        </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        </Modal.Body>

        <Modal.Footer>
          <Button
            style={{ backgroundColor: "#52f310", color: "#ffff" }}
            onClick={handleClose}
          >
            Close
          </Button>
          <Button variant="success" onClick={handleClose}>
            Book Now
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default LBookYathra;
