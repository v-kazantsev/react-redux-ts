import { combineReducers } from 'redux'
import { reducer as citiesReducer } from 'store/cities'

const rootReducer = combineReducers({
  cities: citiesReducer,
})

export default rootReducer
