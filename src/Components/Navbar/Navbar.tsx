import React from 'react'
import '../../App/App.css'
import { NavLink, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '../Redux/Store/store'
import { logout } from '../Auth/userSlice'


export const Navbar = (): JSX.Element => {

  const { authChecked, role, login } = useSelector((state: RootState) => state.user)
  const dispatch = useAppDispatch()

  return <>
    <div className='navbar'>
      <nav className='navmenu'>
        <NavLink className='logo' to="/">
          <svg width="104" height="65" viewBox="0 0 128 76" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
          <rect width="104" height="65" fill="url(#pattern0)"/>
          <defs>
          <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_2_5" transform="matrix(0.00507479 0 0 0.00854701 -0.00747863 0)"/>
          </pattern>
          <image id="image0_2_5" width="200" height="117" xlinkHref="data:image/png;base64,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"/>
          </defs>
          </svg>
        </NavLink>
        <div className='header-links'>

          {authChecked !== true ? (
            <>
              <NavLink to="/login">
                Войти
              </NavLink>
              <NavLink to="/registration">
                Зарегистрироваться
              </NavLink>
            </>
          ) : (
            <>
            {/* <div>
              Здарова, { login }
            </div> */}
              <NavLink to="/" onClick={() => dispatch(logout())}>
                Выйти
              </NavLink>
              <NavLink to="/profile">
                Профиль
              </NavLink>
            </>
          )}

          {authChecked === true && role === 'admin' && (
            <NavLink to="/admin">
              Панель управления
            </NavLink>
          )}
        </div>
      </nav>
    </div>
    <Outlet />
  </>
}
