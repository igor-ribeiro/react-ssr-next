import React from 'react'
import styled from 'styled-components';
import { Link } from 'routes';

import { getProducts } from 'api/products'

import Layout from 'layouts/Main'

import Header from 'components/Header';

const ProductList = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`;

const Product = styled.div`
  flex: 0 1 25%;
  background: #fff;
  border: 1px solid #000;
  margin: 16px;
  position: relative;
  box-shadow: 4px 4px 0 #000;
`;

const ProductImage = styled.div`
  min-height: 150px;
  background-position: center center;
  background-size: auto 100%;
  background-repeat: no-repeat;

  background-image: ${props => props.url ? `url(${props.url})` : ''};
  background-color: ${props => props.url ? '#fff' : '#bbb'};
`;

const ProductName = styled.a`
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
`;

const ProductPrice = styled.span`
  background: #000;
  color: #fff;
  padding: 12px;
  position: absolute;
  bottom: 64px;
  left: -12px;
`;

class IndexPage extends React.Component {
  static async getInitialProps() {
    const products = await getProducts();

    return { products };
  }

  render() {
    const { products } = this.props;

    return (
      <Layout>
        <Header />
        <ProductList>
          {
            products && products.map(product => (
              <Product key={product.id}>
                <ProductImage url={product.image}/>
                <Link route="produto" passHref params={{ id: product.id }}>
                  <ProductName>{product.name}</ProductName>
                </Link>
                <ProductPrice>R$ {Number(product.price).toFixed(2).replace('.', ',')}</ProductPrice>
              </Product>
            ))
          }
        </ProductList>
      </Layout>
    );
  }
}

export default IndexPage;
