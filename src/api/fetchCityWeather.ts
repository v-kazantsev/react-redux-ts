import { BASE_URL } from 'consts'
import castError from './castError'

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY

export default function fetchCityWeather(name: string): Promise<IWeather> {
  return fetch(`${BASE_URL}?q=${name}&appid=${API_KEY}&units=metric`)
    .then(castError)
}