import React, { Fragment, useState, useEffect } from 'react'
import { Navbar } from '../components'
import { BrowserRouter  as Router, Route, Link } from 'react-router-dom'
import { CartPage } from './Cart'
import { Home } from './Home'
import { list } from '../gamesData'
import '../styles/App.css'



const App = () => {
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
  return (
    <Fragment>
    <Router>
      <Navbar filter={filterResults} setFiltering={setFiltering} count={count}/>

      <Route  exact path="/" component={() => <Home 
                                                  category={category} 
                                                  loadCategory={loadCategory} 
                                                  addToCart={setCount} 
                                                  list={list}
                                                  count={count}
                                                  filtered={filtered}
                                                  isFiltering={isFiltering}/>
                                                  } />
      <Route path="/cart" component={CartPage} />
      </Router>
    </Fragment>
  );
};
export default App;
