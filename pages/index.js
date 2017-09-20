import React from 'react'
import styled from 'styled-components'

import { getProducts } from 'helpers/products'

import Layout from 'layouts/Main'

import Header from 'components/Header'
import ProductSummary, { ProductSummaryList } from 'components/ProductSummary'

class IndexPage extends React.Component {
  static async getInitialProps () {
    const products = await getProducts()

    return { products }
  }

  render () {
    const { products } = this.props

    return (
      <Layout>
        <Header />

        <ProductSummaryList>
          {
            products && products.map(product => (
              <ProductSummary key={product.id} product={product} />
            ))
          }
        </ProductSummaryList>
      </Layout>
    )
  }
}

export default IndexPage
