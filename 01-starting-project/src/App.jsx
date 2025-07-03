import { Fragment } from 'react';
import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcepts.jsx';
import Examples from './components/Example.jsx'; 



function App() {
  return (
    <Fragment>
      <Header />
      <main> 
        <CoreConcepts />
        <Examples />
      </main>
    </Fragment>
  );
}

export default App;
