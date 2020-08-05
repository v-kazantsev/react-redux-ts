import { AnyAction } from 'redux'
import { ADD_CITY, ENABLE_CITY, DISABLE_CITY, IAddCityAction, IToggleCityAction } from './actions'
import recalculatePositions from './utils/recalculatePositions'

export interface ICitiesStore {
  all: ICity[],
  active: ICity[],
  deleted: ICity[]
}

const initialState = {
  all: [] as ICity[],
  active: [] as ICity[],
  deleted: [] as ICity[]
}

export function reducer(state: ICitiesStore = initialState, action: IAddCityAction | IToggleCityAction | AnyAction) {
  const { payload, type } = action
  const { all, active, deleted } = state
  switch (type) {
    case ADD_CITY:
      {
        const cityIndex = all.findIndex((city) => city.id === payload?.id)
        if (cityIndex !== -1) {
          return { ...state,
            all: all.map((city) => city.id === payload?.id
              ? ({...payload, position: city.position, status: city.status})
              : city),
            active: recalculatePositions(all, payload?.id),
            deleted: recalculatePositions(all, payload?.id)
          }
        }
        return { ...state,
          all: [...all, {...payload, position: all.length + 1, status: 'active'}],
          active: all.filter((city) => city.status !=='deleted') 
        }
      } 
    case DISABLE_CITY:
      const cityToDelete = all.findIndex((city) => city.id === payload)
      if (cityToDelete === -1) { return state }
      return {
        ...state,
        all: all.map((city) => city.id === payload ? ({ ...city, status: 'deleted'}) : city),
        active: recalculatePositions(active, payload),
        deleted: [...deleted, {...all[cityToDelete], status: 'deleted', position: deleted.length}]
      }
    case ENABLE_CITY:
      const cityToEnable = all.findIndex((city) => city.id === payload)
      if (cityToEnable === -1) { return state }
      return {
        ...state,
        all: all.map((city) => city.id === payload ? ({ ...city, status: 'active'}) : city),
        active: [...active, { ...all[cityToEnable], status: 'active', position: active.length}],
        deleted: recalculatePositions(deleted, payload)
      }
    default: return state
  }
}