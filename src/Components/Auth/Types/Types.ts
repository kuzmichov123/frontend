export interface UserLogin {
  email: string
  password: string
}

export interface Response {
  message?: string
  user?: User
  status?: string
}

export interface User {
  id: string
  login: string
  email: string
  role: string
}
export interface State {
  id: string,
  login: string,
  email: string,
  role: string,
  emailError?: string,
  loginError?: string,
  passwordError?: string,
  authChecked: boolean
}

export interface UserRegistration {
  login: string
  email: string
  password: string
  passwordRepeat: string
}