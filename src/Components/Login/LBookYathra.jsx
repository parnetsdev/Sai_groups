import React from "react";
import { FaPlaneDeparture } from "react-icons/fa";
import { TbBus } from "react-icons/tb";

const LBookYathra = () => {
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
        <div className="row">
          <div className="col-md-12 ">
            <div
              style={{ display: "flex", gap: "50px", justifyContent: "center" }}
            >
              <div
                style={{
                  border: "1px solid black",
                  borderRadius: "5px",
                  padding: "10px",
                }}
              >
                <TbBus />
                <p> Bus Package</p>
              </div>
              <div
                style={{
                  border: "1px solid black",
                  borderRadius: "5px",
                  padding: "10px",
                }}
              >
                <FaPlaneDeparture  />
                <p> Aeroplane</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LBookYathra;
