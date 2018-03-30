import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import { addCharacterById} from './actions';



const store = createStore(reducers);
console.log('store.getState()',store.getState());
store.subscribe(() => console.log('store', store.getState()));
store.dispatch(addCharacterById(3));


ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
,document.getElementById('root')

);

