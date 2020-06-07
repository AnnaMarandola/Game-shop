import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './app/lib/store'
import { addToCart } from './app/lib/actions'
import { AppContainer } from './app/views/containers/index'

console.log(store.getState())
const unsubscribe = store.subscribe(() => console.log(store.getState()))
// store.dispatch(addToCart({name: "Burger Quiz"}, 2))
// store.dispatch(addToCart({name: "Dixit"}, 3))
unsubscribe()

ReactDOM.render(
  <Provider store={store}>
    <AppContainer />
  </Provider>,
  document.getElementById('root')
)

