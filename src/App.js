import React, {useEffect} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import Searchbar from './components/pages/Searchbar';
import Logs from './components/logs/Logs';
import AddButton from './components/pages/AddButton';


import './App.css';

function App() {
  useEffect(() => M.AutoInit());
  return (
    <div className="App">
        <Searchbar />
        <div className="container">
          <AddButton />
          <Logs />
        </div>
    </div>
  );
}

export default App;
