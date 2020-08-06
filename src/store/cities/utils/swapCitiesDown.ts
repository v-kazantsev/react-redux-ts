export default function swapCitiesDown(cities: ICity[], index: number): ICity[] {
  if (index === cities.length) { return cities }
  const citiesCopy = [...cities]
  cities[index].position += 1
  cities[index + 1].position -= 1
  return citiesCopy
}
