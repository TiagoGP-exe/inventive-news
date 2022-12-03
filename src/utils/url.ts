export const verifyUrl = (url: string, pathname: string) => {
  const numberOfBar = url.lastIndexOf('/')
  const urlWithoutBar = url.slice(numberOfBar)
  return pathname === urlWithoutBar
}
