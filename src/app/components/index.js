import React, { useState } from "react"
import { Link } from 'react-router-dom'



export const Navbar = ({ filter, setFiltering, count }) => {
  return (
    <nav className="navbar orange navbar-expand-lg navbar-light bg-light fixed-top">

    <Link className="navbar-brand crimson gr" to="/"><i class="fas fa-shopping-cart"></i>Ma boutique de Jeux</Link>
     
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
      <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="ml-auto cart">
          <div>
            <form className="search form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => {
                  setFiltering(e.target.value.length > 0)
                  filter(e.target.value)
                  }}
                />
            </form>
          </div>
          <div className="menu-right">
            <Link to="/cart">
              <i class="fas fa-shopping-bag fa-2x grey"></i>
            </Link>
              <span class="badge badge-pill badge-success">{count}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export const Card = props => {
  const { item, addToCart, count } = props
  return (
    <div className="col-sm-4">
      <div className="card">
              <h4>{item.title}</h4>
        <img
          width="170"
          height="170"
          src={process.env.PUBLIC_URL + `/assets/${item.category}/${item.image}`}
          alt={item.name}        />
        <div className="card-body">
          <div className="row">
            <div className="col-sm-6">
              <p>{item.price}€ TTC</p>
            </div>
            <div className="col-sm-6">
              <button className="btn btn-warning btn-sm"data-toggle="modal" data-target={`#${item.ref}`} >view product</button>
            </div>
          </div>
        </div>
      </div>
      <Modal item={item} addToCart={addToCart} count={count}/>
    </div>
  );
};

export const List = props => {
  const { data, addToCart, category, updateCart } = props

  console.log('data', data)
  return (
    <div className="col-sm">
      <div className="row">
      {data.map( item => <Card key={item.ref} item={item} addToCart={addToCart} updateCart={updateCart} />)}
      </div>
    </div>
  )
}

export const Modal = ({ item, addToCart, count }) => {
  const [qty, setQty] = useState(1)
  return (
    <div
      class="modal fade "
      id={item.ref}
      data-backdrop="static"
      tabindex="-1"
      role="dialog"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-xl" role="document">
        <div class="modal-content">
          <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">{item.name}</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div className="row">
              <div className="col-sm-4">
                <img
                  width="170"
                  height="170"
                  src={
                    process.env.PUBLIC_URL +
                    `/assets/${item.category}/${item.image}`
                  }
                  alt="Citron"
                />
              </div>

              <div className="col-sm">
              <h3>{item.title}</h3>
                <p class="lead">
                  {item.description}
                </p>
                <p>A partir de {item.age}</p>
                <p>Nombre de joueurs:</p>
                  <h3 className="price">€{item.price}/{item.unit}</h3> <br />
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic example"
                >
                  <button
                    onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
                    type="button"
                    className="btn btn-secondary">
                    -
                  </button>
                    <span className="btn btn-light qty">{qty}</span>
                  <button
                    onClick={() => setQty(qty + 1)}
                    type="button"
                    className="btn btn-secondary">
                    +
                  </button>
                </div>
                <br />
              </div>
            </div>
          </div>

          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal">
              Close
            </button>
            <button
              type="button"
              class="btn btn-success"
              data-dismiss="modal"
              onClick={()=> addToCart(item, qty)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <span className="text-muted">Place sticky footer content here.</span>
      </div>
    </footer>
  );
};
