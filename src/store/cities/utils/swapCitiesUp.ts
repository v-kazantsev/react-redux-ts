export default function swapCitiesUp(cities: ICity[], index: number): ICity[] {
  if (index === 1) { return cities }
  const citiesCopy = [...cities]
  citiesCopy[index].position -= 1
  citiesCopy[index - 1].position += 1
  return citiesCopy
}
