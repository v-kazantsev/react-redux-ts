export default function changeCity(city: ICity, cities: ICity[]) {
  return cities.map((item) => item.id === city.id ? ({ ...city, position: item.position }) : item)
}
