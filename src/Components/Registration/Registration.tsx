import React from 'react'
import { useForm } from 'react-hook-form'
import '../../App/App.css'
import { useAppDispatch } from '../Redux/Store/store'
import { UserRegistration } from '../Auth/Types/Types'
import { registration } from '../Auth/userSlice'



export const Registration = (): JSX.Element => {

  const { register, handleSubmit } = useForm<any>()
  const dispatch = useAppDispatch()

  const handleAdd = (user: UserRegistration): void => {
    dispatch(registration(user))
  }

  const onSubmit = (data: any): void => {
    handleAdd(data)
  }



  return <div className='content'>

      <form onSubmit={handleSubmit(onSubmit)} className='registration-form'>
        <input
          type='text'
          {...register('login')}
          placeholder='Login'
          required
        />
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
        <input 
          type='password'
          {...register('passwordRepeat')}
          placeholder='Repeat password'
          required
        />
        
        <button type='submit'>
          Войти
        </button>

      </form>
    </div>

}
