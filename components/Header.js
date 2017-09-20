import React from 'react'
import styled from 'styled-components'

import { Link } from 'routes'

import CartHOC from 'components/CartHOC'

const Header = styled.div`
  height: 64px;
  border-bottom: 1px solid black;
  background: #fff;
  display: flex;
  align-items: center;
  padding: 0 16px;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  font-weight: 700;
`

const totalQuantity = (cart) => (
  cart.length
    ? cart.reduce((acc, next) => acc + next.quantity, 0)
    : 0
)

export default CartHOC((props) => (
  <Header>
    <Link route='index' passHref>
      <a>BBrands POC</a>
    </Link>

    <Link route='carrinho' passHref>
      <a>Carrinho ({totalQuantity(props.cart)})</a>
    </Link>
  </Header>
))
