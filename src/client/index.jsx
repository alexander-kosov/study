import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {App} from '../App';

//чтобы срабатывало только в браузере(т.к. подключим SSR)
window.addEventListener('load',()=>{
	//ReactDOM.render(<Header />, document.getElementById('react-root'));
	ReactDOM.hydrate(<App />, document.getElementById('react-root'));
});
