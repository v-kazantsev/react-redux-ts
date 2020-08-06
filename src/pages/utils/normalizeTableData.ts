import { ITableData } from '../types'

export default function normalizeTableData(cities: ICity[]): any {
  return cities.map((city) => ({
    ...city,
    key: city?.name,
    temperature: city ? city.main?.temp.toFixed(0) : '',
  }))
}
