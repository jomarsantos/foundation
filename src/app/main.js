import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Sample from './components/Sample';

document.addEventListener('DOMContentLoaded', function() {
	ReactDOM.render(
	  <Router>
	      <div>
	        <Route exact path='/' component={Sample} />
	      </div>
	  </Router>,
	  document.getElementById('root')
	);
});
