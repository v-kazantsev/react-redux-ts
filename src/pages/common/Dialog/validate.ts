interface IValues {
  temperature: string
}

interface IErrors {
  temperature: string
}

export default function validate(values: IValues): IErrors {
  const errors = {} as IErrors
  if (!values.temperature) { errors.temperature = 'Необходимо ввести значение' }
  return errors
}
