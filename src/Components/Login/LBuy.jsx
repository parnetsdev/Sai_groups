import React, { useState } from "react";
import "./Styles/LBuy.css";
export default function LBuy() {
  const [selectedImg, setSelectedImg] = useState("/img/bussiness-img-5.webp");
  function changeImgNdAttr(id, imgSelected) {
    setSelectedImg(imgSelected);

    document.getElementById("parentImgDiv").children[0].style.border =
      "2px solid #ffffff";
    document.getElementById("parentImgDiv").children[1].style.border =
      "2px solid #ffffff";
    document.getElementById("parentImgDiv").children[2].style.border =
      "2px solid #ffffff";
    document.getElementById("parentImgDiv").children[3].style.border =
      "2px solid #ffffff";
    document.getElementById(id).style.border = "2px solid red";
  }
  return (
    <div className="d-flex p-5">
      <div id="parentImgDiv" className="p-3">
        <div
          id="img-1"
          onClick={() => changeImgNdAttr("img-1", "/img/bussiness-img-5.webp")}
        >
          <img
            src="/img/bussiness-img-5.webp"
            alt="no-image"
            className="product-images"
          />
        </div>
        <div
          id="img-2"
          onClick={() => changeImgNdAttr("img-2", "/img/bussiness-img-2.webp")}
        >
          <img
            src="/img/bussiness-img-2.webp"
            alt="no-image"
            className="product-images"
          />
        </div>
        <div
          id="img-3"
          onClick={() => changeImgNdAttr("img-3", "/img/bussiness-img-3.webp")}
        >
          <img
            src="/img/bussiness-img-3.webp"
            alt="no-image"
            className="product-images"
          />
        </div>
        <div
          id="img-4"
          onClick={() => changeImgNdAttr("img-4", "/img/bussiness-img-4.webp")}
        >
          <img
            src="/img/bussiness-img-4.webp"
            alt="no-image"
            className="product-images"
          />
        </div>
      </div>
      <div className="p-3">
        <img src={`${selectedImg}`} alt="mo-image" style={{ width: "432px" }} />
      </div>
      <div className="p-3">
        <h6 style={{ fontSize: "3rem" }}>20% Off Gifts from Sai Group</h6>
        <p style={{ fontSize: "25px" }}>
          <b style={{ marginRight: "30px" }}>₹3000/-</b>
          <button className="add-to-cart-btn">Add to cart</button>
        </p>
        <div style={{ marginTop: "25px" }}>
          <h5 style={{ color: "#F1BE05" }}>About Sai Yantra</h5>
          <p>
            The blessings of Sai Baba are contained in Sai Kavach. With its
            spiritual advantages, Sai Baba Kavach helps remove all forms of
            barriers from one's life and bestows Sai baba's blessings. You
            receive energizing power from Sai Kavach Pendant.
          </p>
          <h4>Details</h4>
          <ol>
            <li>Made of Gold</li>
            <li>Height: 6CM</li>
            <li>Width: 5CM</li>
          </ol>
          <h4>Services</h4>
          <p>Cash On Delivery Available</p>
          <h4>Seller</h4>
          <p>Sai Group</p>
        </div>
      </div>
    </div>
  );
}
