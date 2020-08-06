export default function swapCitiesDown(cities: ICity[], id: number): ICity[] {
  const index = cities.findIndex((city) => city.id === id)
  if (index === -1 || index === cities.length - 1) { return cities }
  cities[index].position += 1
  cities[index + 1].position -= 1
  return cities
}
