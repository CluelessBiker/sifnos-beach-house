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
import Gallery from './pages/Gallery';
import Contract from './components/Contract';

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
          <Route exact path="/gallery" render={() => <Gallery />} />
          <Route exact path="/contact" render={() => <Contact />} />
          <Route exact path="/contract" render={() => <Contract />} />
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
