import React from 'react'
import { useForm } from 'react-hook-form'
import { UserRegistration } from './Types/Types'
import { useAppDispatch } from '../Redux/Store/store'
import { login } from './userSlice'


export const Auth = (): JSX.Element => {

  const { register, handleSubmit } = useForm<any>()
  const dispatch = useAppDispatch()

  const handleAdd = (user: UserRegistration): void => {
    dispatch(login(user))
  }

  const onSubmit = (data: any): void => {
    handleAdd(data)
  }



  return <div className='content'>

    <form onSubmit={handleSubmit(onSubmit)} className='auth-form'>

      <input
        type='email'
        {...register('email')}
        placeholder='E-mail'
        required
      />
      <input
        type='password'
        {...register('password')}
        placeholder='Password'
        required
      />

      <button type='submit'>
        Войти
      </button>

    </form>

  </div>
}
