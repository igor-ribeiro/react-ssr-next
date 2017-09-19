import React from 'react';
import styled from 'styled-components';

import { getProduct } from 'api/products'

import Layout from 'layouts/Main'

import Header from 'components/Header';

const ProductWrapper = styled.div`
  max-width: 720px;
  border: 1px solid #000;
  margin: 12px auto;
`;

const Product = styled.div`
  display: flex;
  box-shadow: 4px 4px 0 #000;
`;

const ProductImage = styled.div`
  flex: 1;
  background-position: center center;
  background-size: 100% auto;
  background-repeat: no-repeat;

  background-image: ${props => props.url ? `url(${props.url})` : ''};
  background-color: ${props => props.url ? '#fff' : '#bbb'};
`;

const ProductInfo = styled.div`
  flex: 1;
  border-left: 1px solid #000;
`;

const ProductName = styled.h3`
  margin: 0;
  font-size: 1.6em;
  padding: 12px;
  border-bottom: 1px solid #000;
  text-align: center;
`;

const ProductPrice = styled.div`
  background: #000;
  color: #fff;
  padding: 12px;
  text-align: center;
  font-weight: 700;
  font-size: 1.6em;
`;

const ProductDescription = styled.div`
  padding: 16px;
`;

class ProdutoPage extends React.Component {
  static async getInitialProps({ query }) {
    if (!query.id) {
      return {};
    }

    const product = await getProduct(query.id);

    return { product };
  }

  render() {
    const { product } = this.props;

    return (
      <Layout title={`${product.name} - BBrands Products POC`}>
        <Header />
        <ProductWrapper>
          {this.renderProduct()}
        </ProductWrapper>
      </Layout>
    );
  }

  renderProduct() {
    const { product } = this.props;

    return (
      <Product>
        <ProductImage url={product.image} />
        <ProductInfo>
          <ProductName>{product.name}</ProductName>
          <ProductPrice>R$ {Number(product.price).toFixed(2).replace('.', ',')}</ProductPrice>
          <ProductDescription dangerouslySetInnerHTML={{ __html: product.description}} />
        </ProductInfo>
      </Product>
    );
  }
}

export default ProdutoPage;
