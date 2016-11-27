import React from 'react';
import ReactDOM from 'react-dom';
import App from './test';
import Map from './Map'
import SimpleMapPage from './GoogleMap'
import Search from './Search'
import Tag from './Tag'

ReactDOM.render(<Search />, document.getElementById('search'));
ReactDOM.render(<SimpleMapPage />, document.getElementById('app'));
//ReactDOM.render(<Tag />, document.getElementsByClassName('tagClass'));


