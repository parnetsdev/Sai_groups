import React from "react";
import { Table } from "react-bootstrap";

export default function LCart() {
  return (
    <div className="main-container">
      <div>
        <div className="d-flex justify-content-start p-5">
          <div style={{ marginRight: "20px" }}>
            <img src="/img/bussiness-img-5.webp" alt="no-image" width="128px" />
          </div>
          <div>
            <div>
              <h4>Old Plated shri sai raksha</h4>
            </div>
            <div>3 × 200₹ = 600₹</div>
            <div>
              <button
                style={{
                  border: "0px",
                  backgroundColor: "#ffffff",
                  marginRight: "15px",
                }}
              >
                -
              </button>
              4
              <button
                style={{
                  border: "0px",
                  backgroundColor: "#ffffff",
                  marginLeft: "15px",
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
