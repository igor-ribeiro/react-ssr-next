import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import { getProducts } from 'helpers/products'

import Layout from 'layouts/Main'

import Header from 'components/Header'
import ProductDetail from 'components/ProductDetail'

class ProdutoPage extends React.Component {
  static async getInitialProps ({ query }) {
    if (!query.id) {
      return {}
    }

    const product = await getProducts(query.id)

    return { product }
  }

  render () {
    const { product } = this.props

    return (
      <Layout title={`${product.name} - BBrands Products POC`}>
        <Header />
        <ProductDetail product={product} />
      </Layout>
    )
  }
}

export default ProdutoPage
