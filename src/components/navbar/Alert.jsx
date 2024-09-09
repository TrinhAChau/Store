export default function Alert({ cart }) {
  return (
    <>
      <div
        className="toast align-items-center"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="d-flex">
          <div className="toast-body">
            <div className="success-add">
              <span className="bi bi-check-circle-fill text-success"></span>
              Thêm sản phẩm vào giỏ hàng
            </div>
            <div className="row">
              <div className="col-3">
                <img src={cart.image} alt="" className="img-fluid" />
              </div>
              <div className="col-9">
                <h4>{cart.name}</h4>
                <p>Lorem ipsum dolor sit amet.</p>
                <p className="fw-bold">{cart.price}</p>
              </div>
              <div className="col-6 py-2 my-3">
                <button className="btn btn-light rounded-4 border border-2">
                  Xem giỏ hàng
                </button>
              </div>
              <div className="col-6 py-2 my-3">
                <button className="btn btn-light rounded-4">Thanh toán</button>
              </div>
            </div>
          </div>
          <button
            type="button"
            className="btn-close me-2 m-auto"
            data-bs-dismiss="toast"
            aria-label="Close"
          ></button>
        </div>
      </div>
    </>
  );
}
