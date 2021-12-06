import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { WapApp } from './pages/WapApp'
import { WapEdit } from './pages/WapEdit'
import { WapDetails } from './pages/WapDetails'
import { AppHeader } from './cmps/app/AppHeader'

export function App() {



  return (
    <div className="app main-container">
      <Router>
        <AppHeader />
        <Switch>
          <Route path="/wap/create/:wapId" component={WapEdit} />
          <Route path="/wap/create" component={WapEdit} />
          <Route path="/wap/:wapId" component={WapDetails} />
          <Route path="/wap" component={WapApp} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}
