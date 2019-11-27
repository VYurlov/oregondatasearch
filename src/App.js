import React from 'react';
import './App.css';
import { Route, Link } from 'react-router-dom';

import Home from './home/home';

function App() {
  return (
    <div className="App">
      <Route to="/" component={Home} />
      <Route to="/search" component={Home} />
      <Route to="/createreport" component={Home} />
      <Route to="/viewattrlog" component={Home} />
      <Route to="/viewattrvaluekeys" component={Home} />
      <Route to="/editattrtypesvalues" component={Home} />
      <Route to="/createlistwithattr" component={Home} />
      <Route to="/bulkuploads" component={Home} />
      <Route to="/help" component={Home} />
    </div>
  );
}

export default App;
