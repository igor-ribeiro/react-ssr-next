import React from 'react'
import styled from 'styled-components'

import { getCart } from 'helpers/products'

import { Link } from 'routes'

import CartHOC from 'components/CartHOC'

import Layout from 'layouts/Main'

import Header from 'components/Header'
import Price from 'components/Price'

const CardWrapper = styled.div`
  max-width: 720px;
  border: 1px solid #000;
  margin: 12px auto;
  box-shadow: 4px 4px 0 #000;
`

const CardInfo = styled.div`
  padding: 12px;
  text-align: center;
  font-weight: 700;
  font-size: 1.4em;
`

const CartItem = styled.div`
  border-top: 1px solid black;
  padding: 12px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:first-child {
    border-top: none;
  }
`

const CartItemImage = styled.img`
  max-height: 100%;
`

class IndexPage extends React.Component {
  render () {
    const { cart } = this.props

    return (
      <Layout title='Carrinho - BBrands'>
        <Header />

        <CardWrapper>
          {this.renderCart()}
        </CardWrapper>
      </Layout>
    )
  }

  renderCart () {
    const { cart } = this.props

    if (!cart) {
      return <CardInfo>Carregando...</CardInfo>
    }

    if (!cart.length) {
      return <CardInfo>Carrinho vazio :(</CardInfo>
    }

    return cart.map(item => (
      <CartItem key={item.id}>
        <CartItemImage src={item.image} />
        <Link route='produto' params={{ id: item.id }} passHref>
          <a>{item.name}</a>
        </Link>
        <span>Quantidade: {item.quantity}</span>
        <Price value={item.totalPrice} />
      </CartItem>
    ))
  }
}

export default CartHOC(IndexPage)
