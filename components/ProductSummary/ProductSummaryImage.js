import React from 'react'
import styled from 'styled-components'

const ProductSummaryImage = styled.div`
  min-height: 150px;
  background-position: center center;
  background-size: auto 100%;
  background-repeat: no-repeat;

  background-image: ${props => props.url ? `url(${props.url})` : ''};
  background-color: ${props => props.url ? '#fff' : '#bbb'};
`

export default ProductSummaryImage
