import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Affix, Layout } from 'antd'
import { Container } from 'components'
import { ActiveCities, AllCities, DeletedCities } from 'pages'
import AppHeader from 'widgets/AppHeader'
import AppContent from 'widgets/AppContent'
import Store from 'store'

function App() {
  return (
    <Store>
      <Container>
        <Router>
          <Layout>
            <Affix offsetTop={0}>
              <AppHeader />
            </Affix>
            <Switch>
              <AppContent>
                <Route exact path='/' component={AllCities} />
                <Route exact path='/active' component={ActiveCities} />
                <Route exact path='/deleted' component={DeletedCities} />
              </AppContent>
              <Route render={() => <div>404 Not Found</div>} />
            </Switch>
          </Layout>
        </Router>
      </Container>
    </Store>
  )
}

export default App
