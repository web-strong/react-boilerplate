import * as serviceWorker from './serviceWorker';

import React from 'react';
import ReactDOM from 'react-dom';
import Bootstrap from './Bootstrap';

ReactDOM.render(
    <Bootstrap/>,
    document.getElementById('root')
);

serviceWorker.unregister();