import get from 'lodash/get'
import { useSelector } from 'react-redux'
import { ICitiesStore } from 'store/cities'

interface IStore {
  cities: ICitiesStore
}

const useStoreSelector = <T>(path: string): T => useSelector((store: IStore) => get(store, path))

export default useStoreSelector
