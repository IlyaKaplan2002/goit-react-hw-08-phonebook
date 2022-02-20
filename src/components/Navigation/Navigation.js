import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Nav, Navbar, NavItem } from 'react-bootstrap';
import mainRoutes from 'constants/routes/mainRoutes';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from 'redux/auth';

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const email = useSelector(authSelectors.getEmail);
  const name = useSelector(authSelectors.getName);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(authOperations.logOut());
  };

  return (
    <Navbar bg="primary" variant="dark">
      <Container fluid>
        <Navbar style={{ width: '100%' }}>
          <Navbar.Brand as={Link} to="contacts">
            Phonebook
          </Navbar.Brand>
          <Navbar.Collapse
            style={{ justifyContent: 'space-between', width: '100%' }}
          >
            <Nav className="mr-auto">
              {Object.values(mainRoutes).map(
                ({ path, name, privat, restricted }) => {
                  if (
                    (!isLoggedIn && privat) ||
                    (isLoggedIn && !privat && restricted)
                  ) {
                    return null;
                  }
                  return (
                    <NavItem key={path} eventkey={1} href={path}>
                      <Nav.Link as={Link} to={path}>
                        {name}
                      </Nav.Link>
                    </NavItem>
                  );
                }
              )}
            </Nav>
            {isLoggedIn && (
              <Nav>
                <Navbar.Text style={{ marginRight: '20px' }}>
                  {name}
                </Navbar.Text>
                <Navbar.Text>{email}</Navbar.Text>
                <Button onClick={logOut}>Log out</Button>
              </Nav>
            )}
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </Navbar>
  );
};

export default Navigation;
