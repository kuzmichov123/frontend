import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import userSlice from '../../Auth/userSlice'
import achievementsSlice from '../../Achievements/achievementsSlice'


const store = configureStore({
  reducer: {
    user: userSlice,
    achievements: achievementsSlice,
  },
});

export default store;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;