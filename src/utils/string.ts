export const validateEmail = (email: string) => {
  const pattern = /[a-zA-Z0-9]+[.]?([a-zA-Z0-9]+)?[@][a-z]{3,9}[.][a-z]{2,5}/g
  return pattern.test(email)
}
