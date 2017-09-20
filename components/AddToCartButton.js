import React from 'react'
import styled from 'styled-components'

import CartIcon from './CartIcon'

const AddToCartButton = styled.button`
  position: absolute;
  bottom: 62px;
  right: -10px;
  background: #fff;
  border: 1px solid #000;
  box-shadow: 2px 2px 0 #000;
  padding: 6px 12px;
  cursor: pointer;

  &:hover {
    background: #000;

    svg, path, circle {
      fill: #fff;
    }
  }
`

export default (props) => (
  <AddToCartButton onClick={() => props.onClick()}>
    <CartIcon size='24px' />
  </AddToCartButton>
)
