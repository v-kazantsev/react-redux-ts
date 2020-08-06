import { AnyAction } from 'redux'
import {
  ADD_CITY,
  ENABLE_CITY,
  DISABLE_CITY,
  MOVE_UP,
  MOVE_DOWN,
  UPDATE_CITY,
  IAddCityAction,
  IToggleCityAction,
  IMoveCityAction,
} from './actions'
import { changeCity, recalculatePositions } from './utils'

export interface ICitiesStore {
  all: ICity[],
  active: ICity[],
  deleted: ICity[]
}

const initialState = {
  all: [] as ICity[],
  active: [] as ICity[],
  deleted: [] as ICity[],
}

export function reducer(state: ICitiesStore = initialState,
  action: IAddCityAction | IToggleCityAction | IMoveCityAction | AnyAction) {
  const { payload, type } = action
  const { all, active, deleted } = state
  switch (type) {
    case ADD_CITY:
    {
      const cityIndex = all.findIndex((city) => city.id === payload?.id)
      if (cityIndex !== -1) {
        return {
          ...state,
          all: all.map((city) => (city.id === payload?.id
            ? ({ ...payload, position: city.position, status: city.status })
            : city)),
          active: payload?.status === 'active' ? [...active, { ...payload, position: active.length + 1 }] : active,
          deleted: payload?.status === 'deleted' ? [...deleted, { ...payload, position: deleted.length + 1 }] : deleted,
        }
      }
      return {
        ...state,
        all: [...all, { ...payload, position: all.length + 1, status: 'active' }],
        active: [...active, { ...payload, position: active.length + 1, status: 'active' }],
      }
    }
    case DISABLE_CITY:
      const cityToDelete = all.findIndex((city) => city.id === payload)
      if (cityToDelete === -1) { return state }
      return {
        ...state,
        all: all.map((city) => (city.id === payload ? ({ ...city, status: 'deleted' }) : city)),
        active: recalculatePositions(active, payload),
        deleted: [...deleted, { ...all[cityToDelete], status: 'deleted', position: deleted.length }],
      }
    case ENABLE_CITY:
      const cityToEnable = all.findIndex((city) => city.id === payload)
      if (cityToEnable === -1) { return state }
      return {
        ...state,
        all: all.map((city) => city.id === payload ? ({ ...city, status: 'active' }) : city),
        active: [...active, { ...all[cityToEnable], status: 'active', position: active.length }],
        deleted: recalculatePositions(deleted, payload),
      }
    case MOVE_UP:
    case MOVE_DOWN:
      return {
        ...state,
        [payload.tab]: payload.group,
      }
    case UPDATE_CITY:
      return {
        ...state,
        all: changeCity(payload, all),
        active: changeCity(payload, active),
        deleted: changeCity(payload, deleted),
      }

    default: return state
  }
}
