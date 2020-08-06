export default async function castError(res: any): Promise<any> {
  const json = await res.json().catch(() => null)
  if (res.ok && json) { return json }

  if (res.status >= 500) {
    throw new Error(
      'Что-то пошло не так. Попробуйте позже',
    )
  }
}
