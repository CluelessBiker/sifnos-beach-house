/* eslint-disable */
import { Col, Container, Row } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Contact from './pages/Contact';
import styles from './App.module.css';
import Neighborhood from './pages/Neighborhood';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <Container className={styles.Container}>
      <Col sm={12}>
        <NavBar />
      </Col>
      <Switch>
        <Route exact path="/" render={() => <LandingPage />} />
        <Route exact path="/accommodation" render={() => <h1>ACCOMMODATION</h1>} />
        <Route exact path="/neighborhood" render={() => <Neighborhood />} />
        <Route exact path="/gallery" render={() => <h1>GALLERY</h1>} />
        <Route exact path="/contact" render={() => <Contact />} />
        <Route render={() => <h3>Page Not Found.</h3>} />
      </Switch>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
}

export default App;
