import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './index.css';
import App from './components/App';
import Home from './components/Home';
import NotFound from './components/NotFound';
import registerServiceWorker from './registerServiceWorker';

const Root = () =>
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/team/:teamId" component={App} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>;

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
