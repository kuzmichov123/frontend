import React from 'react'
import type { FC } from 'react'
import { useState } from 'react'
import { AchievementCol } from './AchievementCol'

interface SingleRow {
  user_id?: number | string;
  title: string;
  date: string;
  format: string;
  direction: string;
  result: boolean;
  points: number;
}

interface AchievementsProps {
  row: SingleRow;
}

export const Achievements: FC<AchievementsProps> = ({ row }): JSX.Element => {

  return <>

        <AchievementCol col={row.title} key={row.title} />

        <AchievementCol col={row.date} key={row.date} />

        <AchievementCol col={row.format} key={row.format} />

        <AchievementCol col={row.direction} key={row.direction} />

        <AchievementCol col={row.result.toString()} key={row.result.toString()} />

        <AchievementCol col={row.points.toString()} key={row.points.toString()} />
    
  </>
}
