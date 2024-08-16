import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }
`
export const Container = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
`

export const Main = styled.main`
  padding: 10px 40px;
  height: 100vh;
  overflow-y: scroll;
`

export default GlobalStyle
