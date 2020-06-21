import React, { Fragment, useState, useEffect, useContext } from 'react';
import { Link } from "react-router-dom";
import "../../styles/App.css";

export const Checkout = () => {


    return (
      <Fragment>
        <div className="col-sm-6 offset-3">
          <h2>Checkout</h2>
          <br />
          <form>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                  property=""
                  defaultValue="" 
                  />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                  property=""
                  defaultValue=""
                 />
              </div>
            </div>
            <br />
            <div className="form-group">
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Email address"
                property=""
                name="email"
                defaultValue=""
                />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                placeholder="Address"
                property=""
                name="address"
                defaultValue=""
                />
            </div>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Postal Code"
                  name="zipCode"
                  property=""
                  defaultValue=""
                  />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="City"
                  city="city"
                  property=""
                  defaultValue=""
                  />
              </div>
            </div>
            <br />
         
            <Link to="/delivery" className="white btn btn-light btn-lg btn-block bg-crimson checkout">
                Confirm
            </Link>
          </form>
        </div>
      </Fragment>
    );
}