import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import SampleMain from './components/SampleMain';
import SampleSubRoute from './components/SampleSubRoute';

document.addEventListener('DOMContentLoaded', function() {
	ReactDOM.render(
	  <Router>
	      <div>
	        <Route exact path='/' component={SampleMain} />
					<Route path='/sub' component={SampleSubRoute} />
	      </div>
	  </Router>,
	  document.getElementById('root')
	);
});
