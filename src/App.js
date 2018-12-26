import React from 'react';
import './App.css';

import { BrowserRouter, Route, Switch} from 'react-router-dom';

import Header from './components/Header';
import List from './components/list/index'
import Notfound from './components/NotFound/Notfound';
import Detail from './components/Detail/Detail';

const App = () => {
  
    return (
      
      <BrowserRouter>
      <div>
      
      <Header />
      
      <Switch>
        <Route path="/" component={List} exact/>
        <Route path="/currency/:id" component={Detail} exact/>
       
        <Route  component={Notfound} />
        
      </Switch>

      </div>
      </BrowserRouter>
      
    );
  
}

export default App;
