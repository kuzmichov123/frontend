import React from 'react'
import type { FC } from 'react'

interface AchievementColProps {
  col: string;
}

export const AchievementCol: FC<AchievementColProps> = ({ col }): JSX.Element => {
  return <div className='achievement-col'>
    {col}
  </div>
}
