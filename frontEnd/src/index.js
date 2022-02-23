import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter , Route, Redirect, Switch } from 'react-router-dom';
// components
import ProductsResults from './components/Products/ProductsResults';
import ProductDetail   from './components/Products/ProductDetail';
// store
import store from './redux/store';
// base CSS
import './assets/styles/App.scss';

const App = (
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route exact path="/items" component={ProductsResults} />
				<Route exact path="/items/:id" component={ProductDetail} />
				<Redirect from="/" to="/items" />
			</Switch>
		</BrowserRouter>
	</Provider>
);

ReactDOM.render(App, document.getElementById('app'));