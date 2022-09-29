/* eslint-disable */
import { Row } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Contact from './pages/Contact';
import styles from './App.module.css';
import Neighborhood from './pages/Neighborhood';
import Footer from './components/Footer';
import LandingPage from './pages/LandingPage';
import Accommodation from './pages/Accommodation';
import Lease from './pages/Lease';

function App() {
  return (
    <div className={styles.SiteContainer}>
      <div>
        <NavBar />
      </div>
      <div className={styles.MainSiteContent}>
        <Switch>
          <Route exact path="/" render={() => <LandingPage />} />
          <Route exact path="/accommodation" render={() => <Accommodation />} />
          <Route exact path="/neighborhood" render={() => <Neighborhood />} />
          <Route exact path="/gallery" render={() => <h1>GALLERY</h1>} />
          <Route exact path="/contact" render={() => <Contact />} />
          <Route exact path="/lease" render={() => <Lease />} />
          <Route render={() => <h3>Page Not Found.</h3>} />
        </Switch>
      </div>
      <Row>
        <Footer />
      </Row>
    </div>
  );
}

export default App;
