import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { State, UserRegistration } from './Types/Types'
import * as api from './AuthApi'
import { UserLogin } from '../Auth/Types/Types'



export const registration = createAsyncThunk('/registration', async (user: UserRegistration) => api.registration(user));

export const login = createAsyncThunk('/login', async (user: UserLogin) => api.login(user));

export const logout = createAsyncThunk('/logout', () => api.logout());

// export const update = createAsyncThunk('users/user/profile', async (user: User) => api.updateprofile(user));

export const getUser = createAsyncThunk('/user', () => api.getuser());


export const initialState: State = {
  id: '',
  login: '',
  email: '',
  role: '',
  emailError: '',
  loginError: '',
  passwordError: '',
  authChecked: false
}



const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    clearLoginError: (state) => { state.loginError = ''; },
    clearEmailError: (state) => { state.emailError = ''; },
    clearPasswordError: (state) => { state.passwordError = ''; },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registration.fulfilled, (state, action) => {
        if (action.payload.status === 'error login') {
          state.loginError = action.payload.message;
          state.emailError = '';
        }
        if (action.payload.status === 'error password') {
          state.passwordError = action.payload.message;
          state.emailError = '';
        }
        if (action.payload.status === 'error confirm') {
          state.passwordError = action.payload.message;
          state.emailError = '';
        }

        if (action.payload.status === 'error empty') {
          state.loginError = action.payload.message;
          state.emailError = '';
        }
        if (action.payload.status === 'error phone') {
          state.emailError = action.payload.message;
        }

        if (action.payload.user) {
          state.id = action.payload.user.id;
          state.login = action.payload.user.login;
          state.email = action.payload.user.email;
          state.authChecked = true;
          state.emailError = '';
          state.loginError = '';
          state.passwordError = '';
        }
      })
      .addCase(registration.rejected, (state, action) => {
        console.log(action.error.message);
      })
      .addCase(login.fulfilled, (state, action) => {
        if (action.payload.status === 'user not found') {
          state.emailError = action.payload.message;
          state.loginError = '';
          state.passwordError = '';
          return
        }
        if (action.payload.status === 'error') {
          state.passwordError = action.payload.message;
          state.emailError = '';
          state.loginError = '';
          return
        }
        if (action.payload.user) {
          state.id = action.payload.user.id;
          state.login = action.payload.user.login;
          state.email = action.payload.user.email;
          state.role = action.payload.user.role;
          state.authChecked = true;
          state.emailError = '';
          state.loginError = '';
          state.passwordError = '';
        }
      }
      )
      .addCase(logout.fulfilled, (state, action) => {
        if (action.payload.message === 'Session destroy') {
          state.login = '';
          state.email = '';
          state.role = '';
          state.authChecked = false;
        }
      })
      // .addCase(update.fulfilled, (state, action) => {
      //   if (action.payload) {
      //     state.login = action.payload.login;
      //     state.email = action.payload.email;
      //   }
      // })
      .addCase(getUser.fulfilled, (state, action) => {
        if (!action.payload.isLoggedIn) {
          state = initialState;
        } else {
          state.id = action.payload.user.id;
          state.login = action.payload.user.login;
          state.email = action.payload.user.email;
          state.role = action.payload.user.role;
          state.authChecked = action.payload.isLoggedIn;
        }
      })
  },
})


export const { clearEmailError, clearLoginError, clearPasswordError } = userSlice.actions;
export default userSlice.reducer;