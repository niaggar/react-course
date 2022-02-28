// Es opcional importar react en a partir de la version 17
// import React from 'react';
// import ReactDOM from 'react-dom';

import Greeting from './components/Greeting';
import Counter from './components/Counter';


// Functional component
const App = () => {

  return (
    <>
      <Greeting name='Juan' yearsOld={21} />

      <Counter value={1} />
    </>
  );
}


export default App;
