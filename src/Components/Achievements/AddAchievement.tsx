import React, { useState } from 'react'
import { RootState, useAppDispatch } from '../Redux/Store/store'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { NewAchievement } from './Types/State'
import { addAsyncAchievement } from './achievementsSlice'

export const AddAchievement = (): JSX.Element => {

  const [isShowedForm, setIsShowedForm] = useState<boolean>(false)
  const { id } = useSelector((state: RootState) => state.user)
  const { register, handleSubmit } = useForm<any>()
  const dispatch = useAppDispatch()

  const handleAdd = (newAchievement: NewAchievement): void => {

    dispatch(addAsyncAchievement(newAchievement))

  }

  const onSubmit = (data: any): void => {
    handleAdd(data)
  }



  return <div className='content'>

    <h2
      onClick={() => setIsShowedForm((prev) => !prev)}
      style={{backgroundColor:'#1E5DD1', 
      cursor: 'pointer', 
      width: 'fit-content',
      border: 'none',
      borderRadius: '4px',
      padding: '10px',
      color: 'white',
      fontSize: '14pt'
    }}
    >
      {!isShowedForm
        ? 'Создать достижение'
        : 'Скрыть форму'
      }
    </h2>

    {isShowedForm &&
      <form onSubmit={handleSubmit(onSubmit)} className='auth-form'>
        <input
          type='text'
          {...register('user_id')}
          style={{ visibility: 'hidden', display: 'none' }}
          defaultValue={id}
          required
        />
        <input
          type='text'
          {...register('title')}
          placeholder='Заголовок'
          required
        />
        <input
          type='date'
          {...register('date')}
          placeholder='Выберите дату'
          required
        />
        <input
          type='text'
          {...register('format')}
          placeholder='Формат'
          required
        />
        <input
          type='text'
          {...register('direction')}
          placeholder='Направление'
          required
        />
        <select
          {...register('result')}
          required
        >
          <option value={'true'}>Выполнено</option>
          <option value={'false'}>Не выполнено</option>
        </select>
        <input
          type='text'
          {...register('points')}
          placeholder='Очки'
          maxLength={3}
          required
        />
        <button type='submit'>
          Добавить
        </button>

      </form>
    }
  </div>

}
