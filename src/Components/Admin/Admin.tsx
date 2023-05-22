import React, { useEffect, useState } from 'react'
import { RootState } from '../Redux/Store/store'
import { useSelector } from 'react-redux'
import { Achievements } from '../Achievements/Achievements'
import { AchievementCol } from '../Achievements/AchievementCol'
import { AchievementId, NewAchievement } from '../Achievements/Types/State'
import { AddAchievement } from '../Achievements/AddAchievement'

export const Admin = ():JSX.Element => {

  const { login, id } = useSelector((state: RootState) => state.user)
  const { achievements } = useSelector((state: RootState) => state.achievements)
  const [ userAchievments, setUserAchievements] = useState<NewAchievement[]>()


  useEffect(() => {

    setUserAchievements(

      achievements.filter((achievement: NewAchievement): NewAchievement | undefined => {
        if (achievement.user_id === Number(id)) {
          return achievement
        }
      })

    )

  }, [achievements, id])

  
  
  const [headers, setHeaders] = useState<string[]>([
    'Название',
    'Дата',
    'Формат',
    'Направление',
    'Результат',
    'Очки',
  ])


  return <div className='content'>
    <h1>Все достижения</h1>

    <div className='achievements-table-head'>

      {headers.map((title, index) =>

        <AchievementCol col={title} key={index} />

      )}

    </div>

    <div className='achievements-table'>
      

      {userAchievments?.map((achievement, index) =>

        <Achievements
          row={achievement}
          key={index}
        />

      )}

    </div>
    

  </div>

}
