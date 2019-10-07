import React, {useEffect} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import Searchbar from './components/pages/Searchbar';
import Logs from './components/logs/Logs';
import AddButton from './components/pages/AddButton';
import AddLogModal from './components/logs/AddModalLog';
import EditLogModal from './components/logs/EditModalLog';
import TechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';
import AddTechModal from './components/techs/AddTechModal';

import { Provider } from 'react-redux';
import store from './store';

import './App.css';


function App() {
  useEffect(() => M.AutoInit());
  return (
    <Provider store={store}>
    <div className="App">
        <Searchbar />
        <div className="container">
          <AddButton />
          <AddLogModal />
          <EditLogModal />
          <TechModal />
          <TechListModal />
          <Logs />
        </div>
    </div>
    </Provider>
  );
}

export default App;
