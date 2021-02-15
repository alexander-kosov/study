//const express = require('express');
import express from 'express';
import ReactDOM from 'react-dom/server';
import {App} from '../App';
import { indexTemplate } from './indexTemplate';
import axios from 'axios';

const app = express();

app.use('/static', express.static('./dist/client'));


app.get('/',(req, res)=>{
	res.header("Access-Control-Allow-Origin", "*");
	res.send(
		indexTemplate(ReactDOM.renderToString(App()))
	);
});

app.get('/auth',(req, res)=>{
	res.header("Access-Control-Allow-Origin", "*");
	axios.post(
		'https://www.reddit.com/api/v1/access_token',		`grant_type=authorization_code&code=${req.query.code}&redirect_uri=http://localhost:3000/auth`,
		{
			auth: {username: process.env.CLIENT_ID, password:'oYcwI-3QvrfPkEiW9o_6nf3cqtBfnA'},
			headers: {'Content-type': 'application/x-www-form-urlencoded'}
		}							   
	)
	.then(({data})=>{
		res.send(
			indexTemplate(ReactDOM.renderToString(App()), data['access_token'])
		);
	})
	.catch(console.log);
});

app.listen(3000, ()=>{
	console.log('Server started on http://localhost:3000');
});
