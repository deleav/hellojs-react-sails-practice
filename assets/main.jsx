var UserPage = require('User/UserPage.jsx');

import { Router, Route, browserHistory } from 'react-router'

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={UserPage}/>
  </Router>
), document.getElementById('root'));
