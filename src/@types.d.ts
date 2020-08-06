declare module 'redux-persist/lib/stateReconciler/autoMergeLevel2'
declare module 'redux-persist/lib/integration/react'

declare interface IWeather {
  id: number
  name: string
  main: {
    temp: number
  }
}

declare interface ICity extends IWeather {
  position: number
  status: 'active' | 'deleted'
}
