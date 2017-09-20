import Head from 'next/head'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding-top: 64px;
`
export default ({ children, title = 'BBrands Products POC' }) => (
  <Wrapper>
    <Head>
      <title>{ title }</title>
    </Head>

    <main>
      { children }
    </main>
  </Wrapper>
)
