import React from 'react'
import { Component } from 'react'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import Main from './main'

const store = configureStore()

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Main />
            </Provider>
        );
    }
}
