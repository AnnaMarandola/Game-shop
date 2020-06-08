import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux'
import "../../styles/App.css";
import { updateCart, addToCart } from '../../lib/actions';

const Row = (props) => {
 const { quantity, details } = props.item
 const item = details
 const [qty, setQty ] = useState(quantity)
 const dispatch = useDispatch()
 const update = (item, quantity) => {
   dispatch(updateCart(item, quantity))
 }
    return (
      <tr>
        <td>
          <img
            width="70"
            height="70"
            src={process.env.PUBLIC_URL + `/assets/${item.category}/${item.image}`}
            alt={details.title}
          />
        </td>
        <td>{item.ref}</td>
        <td>{item.price}€</td>
        <td>
          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => { 
                if (qty > 1) { 
                  setQty(qty - 1)
                  update(item, qty)
                  }
              }}
              >
              -
            </button>
            <span className="btn btn-light">{qty}</span>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => {
              setQty (qty +1)
              update(item, qty)
              }}
              >
              +
            </button>
          </div>
        </td>
        <td>{(quantity * details.price).toFixed(2)}€</td>
        <td>
          <button
            type="button"
            className="btn btn-danger remove">
            X
          </button>
        </td>
      </tr>
    );
}

const Table = () => {
  const items = useSelector(state => state.items)
  useEffect(() => {
    console.log(`Vous avez ${items.length} in your cart`)
  })
    return (
      <table>
        <tr>
          <th width="200">Produit</th>
          <th width="80">Reference</th>
          <th width="150">Prix</th>
          <th width="150">Quantité</th>
          <th width="200">Total</th>
        </tr>
        { items.map(item => {
          return(<Row item={item}/>)
        })}
      </table>
    );
  }

export const CartPage = () => {
    return (
      <Fragment>
        <div className="container">
        <div className="row">
          <div className="col-sm cart">
              <Table />
          </div>
          <div className="col-sm-3 order-summary">
            <ul className="list-group">
              <li className="list-group-item">Votre commande</li>

              <li className="list-group-item">
                <ul className="list-group flex">
                  <li className="text-left">Sous-total</li>
                  <li className="text-right">€0.00</li>
                </ul>
                <ul className="list-group flex">
                  <li className="text-left">Frais de livraison</li>
                  <li className="text-right">€0.00</li>
                </ul>
                <ul className="list-group flex">
                  <li className="coupon crimson">
                    <small> >> Ajouter un coupon de réduction</small>
                  </li>
                </ul>
              </li>

              <li className="list-group-item ">
                <ul className="list-group flex">
                  <li className="text-left">Total</li>
                  <li className="text-right">€0.00 TTC</li>
                </ul>
              </li>
            </ul>
            <button
              type="button"
              className="btn btn-light btn-lg btn-block checkout bg-crimson"
              disabled="true"
            >
              <a href="checkout" className="white">
                Checkout
              </a>
            </button>
          </div>
        </div>
        </div>
      </Fragment>
    );
}