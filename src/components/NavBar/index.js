import React from 'react'
import { Nav,NavLink,Bars,NavMenu } from './NavBarElements'

// ,NavBtnLink,NavBtn

export function NavBar() {
  return (
    <>
    <Nav>
        <NavLink to="/">
            <h3>Logo</h3>
        </NavLink>
        <Bars />
        <NavMenu>
            <NavLink to="/" activeStyle>Home</NavLink>
            <NavLink to="todolist" activeStyle>To Do list</NavLink>
            <NavLink to="pokeapi" activeStyle>Poke Kè</NavLink>
        </NavMenu>
            {/* <NavBtn>
                <NavBtnLink to='/signin'>sign in</NavBtnLink>
            </NavBtn> */}
    </Nav>
    </>
  )
}

export default NavBar
