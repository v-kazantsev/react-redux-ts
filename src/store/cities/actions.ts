import { Action } from 'redux'

export const ADD_CITY = 'ADD_CITY'
export const DISABLE_CITY = 'DISABLE_CITY'
export const ENABLE_CITY = 'ENABLE_CITY'
export const MOVE_UP = 'MOVE_UP'
export const MOVE_DOWN = 'MOVE_DOWN'

export interface IAddCityAction extends Action {
  type: string,
  payload: IWeather
}

export interface IToggleCityAction extends Action {
  type: string,
  payload: number
}

interface IMoveCityPayload {
  group: 'all' | 'active' | 'deleted',
  id: number
}

export interface IMoveCityAction extends Action {
  type: string,
  payload: IMoveCityPayload
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

export const moveUp = (payload: IMoveCityPayload) => ({
  type: MOVE_UP,
  payload,
})

export const moveDown = (payload: IMoveCityPayload) => ({
  type: MOVE_DOWN,
  payload,
})
