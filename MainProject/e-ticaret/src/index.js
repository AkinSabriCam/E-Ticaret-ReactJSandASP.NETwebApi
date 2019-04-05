import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Admin/css/sb-admin.min.css';
import '../src/Admin/vendor/fontawesome-free/css/all.min.css';
import '../src/Admin/vendor/datatables/dataTables.bootstrap4.css';
import '../src/Admin/css/sb-admin.css';
import './css/site.css';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();