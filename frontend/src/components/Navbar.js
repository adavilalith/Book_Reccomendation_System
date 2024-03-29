import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link }from 'react-router-dom'
function MainNavbar() {
  return (
    <Navbar expand="lg" className="bg-light">
      <Container fluid>
        <Navbar.Brand href="#"><strong>SmartReadsML</strong></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">
              <Link to='/' style={{textDecoration:'none',color:'black'}}>Home</Link>
            </Nav.Link>
            <Nav.Link href="#action2">
              <Link to='/Top50' style={{textDecoration:'none',color:'black'}}>Top50</Link>
            </Nav.Link>
            <Nav.Link href="https://github.com/adavilalith/Book_Reccomendation_System" target='_blank'>Source Code</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/lalith-adavi-284378274" target='_blank'>Let's Connect!</Nav.Link>
        </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;