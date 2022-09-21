/* eslint-disable */
import { Container } from 'react-bootstrap';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Container>
      <Switch>
        <Route exact path="/" render={() => <h1>HELLO WORLD</h1>} />
        <Route render={() => <h3>Page Not Found.</h3>} />
      </Switch>
    </Container>
  );
}

export default App;
