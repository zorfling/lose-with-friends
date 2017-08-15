import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { injectGlobal } from 'styled-components';

import App from './components/App';
import Home from './components/Home';
import NotFound from './components/NotFound';
import registerServiceWorker from './registerServiceWorker';

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  }
`;

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
