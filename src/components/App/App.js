import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import LinkList from '../Link/LinkList'
import CreateLink from '../Link/CreateLink'
import Header from '../Header/Header'

const App = () => {
  return (
    <BrowserRouter>
      <div className="center w85">
        <Header />
        <div className="ph3 pv1 background-gray">
          <Switch>
            <Route exact path="/" component={LinkList} />
            <Route exact path="/create" component={CreateLink} />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
