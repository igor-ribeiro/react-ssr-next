import React from 'react'
import styled from 'styled-components'

const ProductSummaryName = styled.a`
  padding: 0 12px;
  background: #fff;
  border-top: 1px solid #000;
  height: 48px;
  display: flex;
  align-items: center;
  font-weight: 700;
  color: inherit;
  text-decoration: none;

  &:hover {
    background: #000;
    color: #fff;
  }
`

export default ProductSummaryName
