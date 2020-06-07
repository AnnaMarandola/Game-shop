import React, { Fragment } from 'react'
import { List } from '../components'

const SideMenu = ({ loadCategory, category }) => {
    const links = ["Jeux de cartes", "En famille ou entre amis", "Kids", "Escape Box"]
  
    return (
      <div className="col-sm-2 sidebar">
        <ul>
        {links.map((link, index) => {
          return(<li className={category === index  && 'active'} key={index} onClick={() => loadCategory(index)}>{link}</li>)
        })}
        </ul>
      </div>
    );
  };


export const Home = props => {
    const { isFiltering, filtered, list, category, addToCart, loadCategory, count} = props
    return ( <div className="container">
    <div className="row">
      <SideMenu loadCategory={loadCategory} category={category}/>
      <div className="col-sm">
      <div className="row">
        <List data={ isFiltering ? filtered : list[category]} category={category} addToCart={addToCart} count={count}/>
      </div>
      </div>
    </div>
  </div>
  )
}