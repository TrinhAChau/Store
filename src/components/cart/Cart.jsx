import { useEffect, useState } from "react";
import ItemCart from "./ItemCart";
function summary(list, setAmount) {
  let sum = 0;
  list.map((item) => (sum = sum + item.price));
  setAmount(sum);
}
export default function Cart({ props, deleteCart }) {
  const discount = 0.2;
  const [amount, setAmount] = useState(0);
  let discountMoney = Math.round(discount * amount * 100) / 100;
  useEffect(() => {
    summary(props, setAmount);
  }, [props]);
  const countItem = (arr, id) => {
    let count = 0;
    for (const item in arr) {
      if (arr[item] == id) count = count + 1;

      }
    return count;
  };
  const listId = props.map((item) => item.id);

  //   (
  //       <ItemCart key={ item.id } { ...item } deleteCart={ deleteCart } props={ props } />
  //   )
  return (
    <>
      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-9 border-end ">
              <ul className="list-group list-group-flush">
                {props.map((item,index) => {
                  if (listId.indexOf(item.id) == index) {
                      const count = countItem(listId, item.id);
                        return <ItemCart
                        key={item.id}
                        {...item}
                        count={count}
                        deleteCart={deleteCart}
                        props={props}
                      />;
                    
                    }
                    return null;
                })}
              </ul>
            </div>
            <div className="col-3 my-3">
              <div className="summary">
                <h3 className="my-3">Thông tin đơn hàng</h3>
                <div className="d-flex ">
                  <p>Tạm tính</p>
                  <p className="ms-auto fw-bold">{amount.toFixed(2)}$</p>
                </div>
                <div className="d-flex k">
                  <p>Giảm giá</p>
                  <p className="ms-auto fw-bold">{discount * 100}%</p>
                </div>
                <div className="d-flex border-bottom border-dark">
                  <p>Tiền được giảm</p>
                  <p className="ms-auto fw-bold">{discountMoney}$</p>
                </div>
                <div className="d-flex mt-2">
                  <p>Tổng</p>
                  <p className="ms-auto mt fw-bold">
                    {amount - discountMoney}$
                  </p>
                </div>
              </div>
              <button className="btn btn-dark w-100 py-2 fs-6 mt-3">
                Thanh toán
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
