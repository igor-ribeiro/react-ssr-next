import React from 'react'

import { getCart } from 'helpers/products'

export default (Component) => class CartHOC extends React.Component {
  state = {
    cart: []
  }

  render () {
    return <Component cart={this.state.cart} />
  }

  componentDidMount () {
    window.addEventListener('message', this.handleMessage, false)

    this.setCart()
  }

  componentWillUnmount () {
    window.removeEventListener('message', this.handleMessage)
  }

  setCart () {
    this.setState({
      cart: getCart() || []
    })
  }

  handleMessage = (event) => {
    if (event.data.type !== 'add-cart') {
      return
    }

    this.setCart()
  }
}
