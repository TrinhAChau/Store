export default function ItemCart({ image, name, price, deleteCart ,id,props,count}) {
  const handleClick = () => {
    const list = props.filter(item=>item.id != id )
    deleteCart(list);
  }
  return (
    <>
      <li className="list-group-item py-3 my-3">
        <div className="row">
          <div className="col-3">
            <img src={image} alt="" className="img-fluid" />
          </div>
          <div className="col-9 position-relative">
            <h1 className="fs-5">{name}</h1>
            <p className="fs-6">Lorem ipsum dolor sit amet consectetur.</p>
            <p className="position-absolute end-0 top-0 fs-5"> {price * count}$</p>
            <div className="quantity">
              <label htmlFor="Số lượng">Số lượng</label>
              <select
                className="form-select form-select-sm md px-2"
                aria-label="Default select example"
                defaultValue={count.toString()}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">8</option>
                <option value="10">10</option>
              </select>
            </div>
            <button className="btn btn-light fs-5 p-2 mt-2" onClick={handleClick}>
              <i className="bi bi-trash3"></i>
            </button>
          </div>
        </div>
      </li>
    </>
  );
}
