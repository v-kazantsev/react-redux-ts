import * as React from 'react'
import configureStore from 'store/configureStore'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { Provider } from 'react-redux'

const { store, persistor } = configureStore()

const Store: React.FC = ({ children }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  </Provider>
)
export default Store

export { store }
