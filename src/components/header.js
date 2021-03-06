import React, { Component } from "react"
import { Link } from "gatsby"
import BrandLogo from "../assets/svg/logo.svg"
import BrandTitle from "../assets/svg/title.svg"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Button,
} from "reactstrap"

class Header extends Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
      prevScollpos: "",
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  componentDidMount() {
    this.handleWindowScroll()
  }

  handleWindowScroll = () => {
    window.onscroll = () => {
      const currentScrollPos = window.pageYOffset
      this.state.prevScrollpos > currentScrollPos
        ? (document.getElementById("navbar").style.top = "0")
        : (document.getElementById("navbar").style.top = "-76px")

      this.setState({ prevScrollpos: currentScrollPos })
    }
  }
  render() {
    return (
      <header>
        <Navbar id="navbar" className="bg-body" fixed="top" light expand="md">
          <Container>
            <NavbarBrand className="d-flex align-items-center" href="/">
              <BrandLogo className="fill-default" height="50" />
              <BrandTitle className="ml-3 fill-secondary" height="30" />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav
                className="ml-auto mr-3 font-family-roboto-b text-uppercase"
                navbar
              >
                <NavItem>
                  <Link to="/#" className="nav-link">
                    Home
                  </Link>
                </NavItem>
                <NavItem>
                  <NavLink href="/#features">Features</NavLink>
                </NavItem>
                <NavItem>
                  <Link to="/blog/#" className="nav-link">
                    Blog
                  </Link>
                </NavItem>
                <NavItem>
                  <NavLink href="/faqs">faqs</NavLink>
                </NavItem>
              </Nav>
              <Button className="btn-round-l btn-default text-uppercase font-family-roboto-r">
                Become a Partner
              </Button>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    )
  }
}
export default Header
