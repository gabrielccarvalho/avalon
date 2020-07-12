import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { device } from '../baseStylesResponsive'

const Container = styled.nav`
  position: sticky;
  box-shadow: ${(props) => props.theme.shadow};
  background-color: ${(props) => props.theme.colors.purple};
  top: 0;
  z-index: 1000;
  display: flex;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  justify-content: space-between;
  width: 100%;

  .mobile {
    display: none;
  }

  @media ${device.laptopM} {
    .mobile {
      display: flex;
    }
    .desktop {
      display: none;
    }
  }
`

const Logo = styled.img.attrs({
  src: require('../assets/navbar/logo-avalon.png'),
})`
  padding: 0.8em 2em;
  height: 4em;
`

const Navbar = () => {
  return (
    <Container>
      <Link to="/">
        <Logo />
      </Link>
    </Container>
  )
}

export default Navbar
