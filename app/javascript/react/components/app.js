import React from 'react'
import { Route, IndexRoute, Router, browserHistory } from 'react-router'
import PostIndexContainer from '../containers/PostIndexContainer'
import PostFormContainer from '../containers/PostFormContainer'

export const App = (props) => {
  return (

    <Router history={browserHistory}>
      <Route path='/' component={PostIndexContainer} />
      <Route path='/homefeed' component={PostIndexContainer} />
      <Route path='/posts/new' component={PostFormContainer} />
    </Router>
  );
}

export default App
