import React from 'react'
import styled from 'styled-components'

import { Link } from 'routes'
import Price from 'components/Price'

import ProductDetailHeader from './ProductDetailHeader'
import ProductDetailName from './ProductDetailName'
import ProductDetailContent from './ProductDetailContent'
import ProductDetailImage from './ProductDetailImage'
import ProductDetailInfo from './ProductDetailInfo'
import ProductDetailPrice from './ProductDetailPrice'
import ProductDetailDescription from './ProductDetailDescription'

const ProductDetail = styled.div`
  display: flex;
  flex-flow: column nowrap;
  box-shadow: 4px 4px 0 #000;
`

const ProductDetailWrapper = styled.div`
  max-width: 720px;
  width: 100%;
  border: 1px solid #000;
  margin: 12px auto;
`

export default (props) => (
  <ProductDetailWrapper>
    <ProductDetail>
      <ProductDetailHeader>
        <ProductDetailName>{props.product.name}</ProductDetailName>
      </ProductDetailHeader>

      <ProductDetailContent>
        <ProductDetailImage url={props.product.image} />

        <ProductDetailInfo>
          <ProductDetailPrice>
            <Price value={props.product.price} />
          </ProductDetailPrice>

          <ProductDetailDescription dangerouslySetInnerHTML={{ __html: props.product.description}} />
        </ProductDetailInfo>
      </ProductDetailContent>
    </ProductDetail>
  </ProductDetailWrapper>
)
