export interface NewAchievement {
  id?: number;
  user_id?: number | string;
  title: string;
  date: string;
  format: string;
  direction: string;
  result: boolean;
  points: number;
}

export interface State {
  achievements: NewAchievement[];
}

export type AchievementId = NewAchievement['id'];

export type Action =
  | { type: 'achievements/initAchievement'; payload: NewAchievement[] }
  | { type: 'achievements/addAchievement'; payload: NewAchievement }
  | { type: 'achievements/deleteAchievement'; payload: number }
  | { type: 'achievements/changeAchievement'; payload: number };