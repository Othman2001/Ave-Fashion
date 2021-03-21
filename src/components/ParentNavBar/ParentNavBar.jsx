import {Nav, FormControl, Form, Navbar,  NavLink} from 'react-bootstrap'
import "./nav-bar.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";

const ParentNavBar = (props) => {
  return (
  <div>
      <Navbar expand="lg">
          <Link to="/">

          <Navbar.Brand className=" navbar-logo ml-5  "    href="#home"  >
              AVEENUE FASHION

          </Navbar.Brand>
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              {/*start nav component*/}
              <Nav className="ml-auto pl-5 ">
              <NavLink>
                  <Link to='/men'>
                      men
                  </Link>
              </NavLink>
                  <NavLink>
                      <Link to='/lookbook'>
                         look book
                      </Link>
                  </NavLink>
                  <NavLink>
                      <Link to='/cart'>
                          Cart
                      </Link>
                  </NavLink>


              </Nav>
              {/*end nav component*/}
              {/*start search bar*/}
              <Form inline className=" nav-search  ml-auto  " >
                  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              </Form>
          {/*    end search bar*/}
          </Navbar.Collapse>
      </Navbar>

  </div>
   )
}
export default ParentNavBar
