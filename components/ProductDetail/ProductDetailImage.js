import React from 'react'
import styled from 'styled-components'

const ProductDetailImage = styled.div`
  flex: 1;
  background-position: center center;
  background-size: 100% auto;
  background-repeat: no-repeat;

  background-image: ${props => props.url ? `url(${props.url})` : ''};
  background-color: ${props => props.url ? '#fff' : '#bbb'};
`

export default ProductDetailImage
