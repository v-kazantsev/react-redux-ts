import { Action } from 'redux'

export const ADD_CITY = 'ADD_CITY'
export const DISABLE_CITY = 'DISABLE_CITY'
export const ENABLE_CITY = 'ENABLE_CITY'

export interface IAddCityAction extends Action {
  type: string,
  payload: IWeather
}

export interface IToggleCityAction extends Action {
  type: string,
  payload: number
}

export const addCity = (payload: IWeather) => ({
  type: ADD_CITY,
  payload,
})

export const disableCity = (id: number) => ({
  type: DISABLE_CITY,
  payload: id,
})

export const enableCity = (id: number) => ({
  type: ENABLE_CITY,
  payload: id,
})