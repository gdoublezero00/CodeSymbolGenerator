import { createStore, applyMiddleware, compose } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers/rootReducer'

export const history = createBrowserHistory()

export default function configureStore(preloadedState) {
    return createStore(
        createRootReducer(history),
        preloadedState,
        compose (
            applyMiddleware (
                routerMiddleware(history),
            )
        )
    )
}