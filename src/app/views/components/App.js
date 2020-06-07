import React, { Fragment, useState, useEffect } from 'react'
import { Navbar } from '../../components'
import { BrowserRouter  as Router, Route } from 'react-router-dom'
import { CartPage } from './Cart'
import { Home } from './Home'
import { list } from '../../gamesData'
import '../../styles/App.css'



const App = props => {
  const { items, onAddToCart, onUpdateCart } = props
  const [category, setCategory] = useState(0)
  const [isFiltering, setFiltering] = useState(false)
  const [filtered, setFiltered] = useState(false)
  const [count, setCount] = useState(1)
  const loadCategory = i => {setCategory(i)}
  const filterResults = input => {
    let fullList = list.flat()
    let results = fullList.filter(item => {
      const name = item.title.toLowerCase()
      const term = input.toLowerCase()
      return name.indexOf(term) > -1
    })
    setFiltered(results)
  }
  useEffect(() => {
    setFiltering(isFiltering)
  })

  const add = (item, quantity) => {
      onAddToCart(item, quantity )
  }

  const update = () => {
      onUpdateCart()
  }
  return (
    <Fragment>
    <Router>
      <Navbar filter={filterResults} setFiltering={setFiltering} count={count}/>

      <Route  exact path="/" component={() => <Home 
                                                  category={category} 
                                                  loadCategory={loadCategory} 
                                                  addToCart={add}
                                                  onUpdateCart={update} 
                                                  list={list}
                                                  filtered={filtered}
                                                  isFiltering={isFiltering}/>
                                                  } />
      <Route path="/cart" component={CartPage} />
      </Router>
    </Fragment>
  );
};
export default App;
