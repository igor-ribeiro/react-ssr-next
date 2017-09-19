import React from 'react'
import styled from 'styled-components';

const Header = styled.div`
  height: 64px;
  border-bottom: 1px solid black;
  background: #fff;
  display: flex;
  align-items: center;
  font-weight: 700;
  padding: 0 16px;
  font-size: 1.4em;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 10;
`;

export default () => (
  <Header>Products POC</Header>
);
