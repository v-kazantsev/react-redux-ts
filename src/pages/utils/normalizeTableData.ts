import { ITableData } from '../types'

export default function normalizeTableData(cities: ICity[]): any {
  return cities.map((city) => ({ ...city,
    key: city?.id.toString(),
    temperature: city ? city.main.temp.toFixed(0) : '',
  }))
}
