export default function recalculatePositions(cities: ICity[], id: number): ICity[] {
  return cities.reduce((acc, city, index) => (city.id === id ? acc : [...acc, { ...city, position: index + 1 }]), [] as ICity[])
}
