import './App.css';
import { Component1 } from './components';
import { PersistentDrawerLeft } from './components';
import { Container } from '@material-ui/core';

function App() {
  return (
    <Container>
      <PersistentDrawerLeft /> 
      <Component1 />
    </Container>
  );
}

export default App;