import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { Navbar,Nav,Container, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import {logout} from '../actions/userActions'
function Header() {

  const userLogin=useSelector(state => state.userLogin)
  const {userInfo}= userLogin
  const dispatch = useDispatch()
  const logoutHandle = () =>{
    dispatch(logout())
  }

  return (
    <header>
        <Navbar bg="dark " variant='dark' expand="lg" collapseOnSelect>
  <Container>

    <LinkContainer to='/'>
        <Navbar.Brand>BrightnessBeauty</Navbar.Brand>
    </LinkContainer>

    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">

      <LinkContainer to='/cart'>
            <Nav.Link ><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
        </LinkContainer>  

        {userInfo ? (
          <NavDropdown title={userInfo.name} id = 'username'>
            <LinkContainer to='/profile'>

              <NavDropdown.Item>
                Profile
              </NavDropdown.Item>


            </LinkContainer>

            <NavDropdown.Item onClick={logoutHandle}>
                Logout
              </NavDropdown.Item>

          </NavDropdown>
        ) : (
          <LinkContainer to='/login'>
            <Nav.Link ><i className='fas fa-user'></i>Login</Nav.Link> 
        </LinkContainer> 
        

        )}

        
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  
    </header>
  )
}

export default Header