import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import '..//src/App.css';

import Footer from './components/Footer';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Zach Howell',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' }
      ],
      home: {
        title: "ya know",
        subTitle: "ya know 2",
        text: "wellcome to my portfolio"
      },

      about: {
        title: 'about me'
      },

      contact: {
        title: 'lets talk'
      }


    }
  }

  render() {
    return (
     
      <Router>
        <Container className="p-0" fluid={true}>
          
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>Zach Howell</Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navebar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/about">About</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
              </Nav>

            </Navbar.Collapse>
          </Navbar>
            <Footer />
        </Container>
      </Router>
     
    );
  }
}

export default App;