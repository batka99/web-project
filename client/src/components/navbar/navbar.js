import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';
import icon from '../images/logo.png'
import {Link } from "react-router-dom";


function MainNavbar() {
  return (
    <>

        <Navbar  expand={"md"} className="mb-3" style={{backgroundColor:"#8458B3", borderRadius:"10px"}}>
          <Container>
    
          <Navbar.Brand className='mx-4' href="#home" >
            <Link to="/">
              <img
                src={icon}
                width="50"
                height="50"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Link>
          </Navbar.Brand >
          <Navbar.Brand className='text-white' href="#home" >
            <h5>Вольт систем</h5>
          </Navbar.Brand >
     
            <Navbar.Toggle style={{backgroundColor:"white"}} className="text-white" aria-controls={`offcanvasNavbar-md-md`} />
            <Navbar.Offcanvas
          
              id={`offcanvasNavbar-md-md`}
              aria-labelledby={`offcanvasNavbarLabel-md-md`}
              placement="end"
            >
              <Offcanvas.Header closeButton style={{backgroundColor:"#8458B3"}}>
                <Offcanvas.Title id={`offcanvasNavbarLabel-md-md`} className="text-white">
                  Туслах
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body  style={{backgroundColor:"#8458B3", color:"white"}}>
                <Nav className="justify-content-end flex-grow-1 pe-3 ">
                  <Nav.Link ><Link to="/" style={{textDecoration: "none", color:"white"}}>Нүүр</Link></Nav.Link>
                  <Nav.Link href="#action2" className="text-white">Бидний тухай</Nav.Link>
                  <NavDropdown
                    className="text-white"
                    title="Бусад"
                    id={`offcanvasNavbarDropdown-md-md`}
                  >
                    <NavDropdown.Item href="#action3">Нэмэлт</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Мэргэжил
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Энд бичнэ үү
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/login" className="text-white">Нэвтрэх</Nav.Link>
                </Nav>
                {/* <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Хайх"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Хайх</Button>
                </Form> */}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    
    </>
  );
}

export default MainNavbar;



