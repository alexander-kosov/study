import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Header} from './Header';

//чтобы срабатывало только в браузере(т.к. подключим SSR)
window.addEventListener('load',()=>{
	ReactDOM.render(<Header />, document.getElementById('react-root'));
});
