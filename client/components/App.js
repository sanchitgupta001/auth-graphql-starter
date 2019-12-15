/**
 * Created by sanchitgupta001 on 15/12/2019
 */
import React from 'react';

// components
import Header from './Header';

const App = props => {
  return (
    <div className="container">
      <Header />
      {props.children}
    </div>
  );
};

export default App;
