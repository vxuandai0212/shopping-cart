import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from './reducers'
import { getAllProducts } from './actions'
import App from './containers/App'
import ChickenScreen from './containers/chicken/Chicken'
import LionScreen from './containers/lion/Lion'
import ShootingStarScreen from './containers/shooting-star/ShootingStar'
import ChairModel from './containers/dynamic-style-model/DynamicStyleModel'
import Helicopter from './containers/helicopter/Helicopter'
import NotFoundPage from './components/404-page/404-page'
import { composeWithDevTools } from 'redux-devtools-extension'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(...middleware)
  )
)

store.dispatch(getAllProducts())

render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/chicken" component={ChickenScreen} />
        <Route path="/lion" component={LionScreen} />
        <Route path="/shooting-star" component={ShootingStarScreen} />
        <Route path="/chair" component={ChairModel} />
        <Route path="/helicopter" component={Helicopter} />
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
)