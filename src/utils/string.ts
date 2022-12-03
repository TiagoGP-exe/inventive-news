export const getNameAndLastName = (name: string) => {
  const [firstName, lastName] = name.split(' ')
  return { firstName, lastName }
}
