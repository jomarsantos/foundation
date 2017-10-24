import React from 'react';
import ReactDOM from 'react-dom';
import Sample from './components/Sample';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Sample),
    document.getElementById('mount')
  );
});
