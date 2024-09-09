import Shoes from "./Shoes";
import Coat from "./Coat";
import Accessory from "./Accessory";
import Trousers from "./Trousers";
import { useState } from "react";

export default function Product({onClick}) {
  // Cart data
  
  
  // Tab product
  const [tabShoes, setTabShoes] = useState(true);
  const [tabCoat, setTabCoat] = useState(false);
  const [tabAccessory, setTabAccessory] = useState(false);
  const [tabTrousers, setTabTrousers] = useState(false);

  // UI
  return (
    <>
      <div className="conainter-fluid layer pb-5" id="Product">
       
          <div className="title gocenter py-5">
            <h1 className="text-uppercase fw-bold highlight">Sản phẩm bổi bật</h1>
          </div>
          <div className="container pb-3">
            <div className="d-flex justify-content-center">
              <ul className="w-75 justify-content-center list-group list-group-horizontal gocenter fs-2 list-product">
                <li
                  className={
                    tabShoes
                      ? "list-group-item w-100 choose"
                      : "list-group-item w-100"
                  }
                  onClick={() => {
                    setTabShoes(true) &
                      setTabCoat(false) &
                      setTabTrousers(false) &
                      setTabAccessory(false);
                  }}
                >
                  Giày
                </li>
                <li
                  className={
                    tabCoat
                      ? "list-group-item w-100 choose"
                      : "list-group-item w-100"
                  }
                  onClick={() => {
                    setTabShoes(false) &
                      setTabCoat(true) &
                      setTabTrousers(false) &
                      setTabAccessory(false);
                  }}
                >
                  Áo
                </li>
                <li
                  className={
                    tabTrousers
                      ? "list-group-item w-100 choose"
                      : "list-group-item w-100"
                  }
                  onClick={() => {
                    setTabShoes(false) &
                      setTabCoat(false) &
                      setTabTrousers(true) &
                      setTabAccessory(false);
                  }}
                >
                  Quần
                </li>
                <li
                  className={
                    tabAccessory
                      ? "list-group-item w-100 choose"
                      : "list-group-item w-100"
                  }
                  onClick={() => {
                    setTabShoes(false) &
                      setTabCoat(false) &
                      setTabTrousers(false) &
                      setTabAccessory(true);
                  }}
                >
                  Phụ kiện
                </li>
              </ul>
            </div>
            <div className="container">
              {tabShoes && <Shoes onClick={onClick}></Shoes>}
              {tabCoat && <Coat onClick={onClick}></Coat>}
              {tabTrousers && <Trousers onClick={onClick}></Trousers>}
              {tabAccessory && <Accessory onClick={onClick}></Accessory>}
            </div>
          </div>
      </div>
    </>
  );
}
