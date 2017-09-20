import React from 'react'
import styled from 'styled-components'

import { addToCart } from 'helpers/products'

import { Link } from 'routes'

import Price from 'components/Price'
import AddToCartButton from 'components/AddToCartButton'

import ProductSummaryImage from './ProductSummaryImage'
import ProductSummaryName from './ProductSummaryName'
import ProductSummaryPrice from './ProductSummaryPrice'

const ProductSummary = styled.div`
  max-width: 350px;
  width: 100%;
  background: #fff;
  border: 1px solid #000;
  margin: 16px;
  position: relative;
  box-shadow: 4px 4px 0 #000;
`

export default (props) => (
  <ProductSummary>
    <ProductSummaryImage url={props.product.image} />

    <Link route='produto' passHref params={{ id: props.product.id }}>
      <ProductSummaryName>{props.product.name}</ProductSummaryName>
    </Link>

    <ProductSummaryPrice>
      <Price value={props.product.price} />
    </ProductSummaryPrice>

    <AddToCartButton onClick={() => addToCart(props.product)} />
  </ProductSummary>
)

export const ProductSummaryList = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`
