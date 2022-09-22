/* eslint-disable */
import { Col, Container } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Contact from './pages/Contact';
import styles from './App.module.css';
import Neighborhood from './pages/Neighborhood';

function App() {
  return (
    <Container className={styles.Container}>
      <Col sm={12}>
        <NavBar />
      </Col>
      <Switch>
        <Route exact path="/" render={() => <h1>HELLO WORLD</h1>} />
        <Route exact path="/accommodation" render={() => <h1>ACCOMMODATION</h1>} />
        <Route exact path="/neighborhood" render={() => <Neighborhood />} />
        <Route exact path="/gallery" render={() => <h1>GALLERY</h1>} />
        <Route exact path="/contact" render={() => <Contact />} />
        <Route render={() => <h3>Page Not Found.</h3>} />
      </Switch>
    </Container>
  );
}

export default App;
