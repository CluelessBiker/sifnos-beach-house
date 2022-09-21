/* eslint-disable */
import { Container } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Contact from './pages/Contact';

function App() {
  return (
    <Container>
      <NavBar />
      <Switch>
        <Route exact path="/" render={() => <h1>HELLO WORLD</h1>} />
        <Route exact path="/experience" render={() => <h1>EXPERIENCE</h1>} />
        <Route exact path="/location" render={() => <h1>LOCATION</h1>} />
        <Route exact path="/gallery" render={() => <h1>GALLERY</h1>} />
        <Route exact path="/contact" render={() => <Contact />} />
        <Route render={() => <h3>Page Not Found.</h3>} />
      </Switch>
    </Container>
  );
}

export default App;
