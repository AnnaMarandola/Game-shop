import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux'
import "../../styles/App.css";
import { updateCart, removeFromCart } from '../../lib/actions';
import { Link } from "react-router-dom";

const Row = (props) => {
 const { id, quantity, details } = props.item
 const item = details
 const [qty, setQty ] = useState(quantity)
 const dispatch = useDispatch()
 const update = (action) => {
  if (action === 'increment') {
    setQty( qty + 1)
  }
  if (action === 'decrement') {
    setQty( qty - 1)
  }
  dispatch(updateCart(id, qty))
 }
 const remove = id => {
   dispatch(removeFromCart(id))
 }
 useEffect(() => {
   dispatch(updateCart(id, qty))
 }, [qty])

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
                  update('decrement')
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
              update('increment')
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
            className="btn btn-danger remove"
            onClick={() => remove(id)}>
            X
          </button>
        </td>
      </tr>

    );
}

const Table = ({ items }) => {
    return (
      <table>
        <tr>
          <th width="200">Produit</th>
          <th width="80">Ref</th>
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
  const items = useSelector(state => state.items)
  const [subTotal, setSubTotal] = useState(0.00)
  const [total, setTotal] = useState(0.00)
  const shipping = 6.90

  useEffect(() => {
    let totals = items.map(item => {
      return (item.quantity * item.details.price)
    })

    setSubTotal(totals.reduce((item1, item2) => item1 + item2, 0))
    setTotal(subTotal + shipping)
  }, [items, subTotal, total])
  return (
      <Fragment>
        <div className="container">
        <h1 className="cart-title">Ma commande</h1>
        <div className="row">
          <div className="col-sm cart">
              <Table items={items}/>
          </div>
          <div className="col-sm-3 order-summary">
            <ul className="list-group">
              <li className="list-group-item">Votre commande</li>

              <li className="list-group-item">
                <ul className="list-group flex">
                  <li className="text-left">Sous-total</li>
                  <li className="text-right">{subTotal.toFixed(2)}€</li>
                </ul>
                <ul className="list-group flex">
                  <li className="text-left">Frais de livraison</li>
                  <li className="text-right">{shipping.toFixed(2)}€</li>
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
                  <li className="text-right">{subTotal == 0.00 ? "0.00" : total.toFixed(2)}€ TTC</li>
                </ul>
              </li>
            </ul>
              <Link to="checkout" className={`white btn btn-light btn-lg btn-block checkout ${!items.length && 'disabled'} bg-crimson`}>
                Valider
              </Link>
          </div>
        </div>
        </div>
      </Fragment>
    );
}