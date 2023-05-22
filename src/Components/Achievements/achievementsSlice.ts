import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { NewAchievement, State } from './Types/State'

const initialState: State = {
  achievements: [],
}



export const initAsyncAchievement = createAsyncThunk('achievements/initAsyncAchievement', () =>
fetch('http://localhost:4000/achievements/getall')
  .then((result) => result.json())
  .then((data) => data));

export const addAsyncAchievement = createAsyncThunk('achievements/addAsyncAchievement', (achievement: NewAchievement) =>
fetch('http://localhost:4000/achievements/add', {
  method: 'Post',
  headers: { 'Content-type': 'application/json' },
  body: JSON.stringify(achievement)
})
  .then((result) => result.json())
  .then((data) => data));

export const deleteAsyncAchievement = createAsyncThunk('achievements/deleteAsyncAchievement', (id: number) =>
fetch(`http://localhost:4000/achievements/${id}`, {
  method: 'Delete',
})
  .then((result) => result.json())
  .then((data) => data));

export const changeAsyncAchievement = createAsyncThunk('achievements/changeAsyncAchievement', (achievement: NewAchievement) =>
fetch(`http://localhost:4000/achievements/change/${achievement.id}`, {
  method: 'Put',
  body: JSON.stringify(achievement),
  headers: { 'Content-type': 'application/json' },
})
  .then((result) => result.json())
  .then((data) => data));

  

const achievementsSlice = createSlice({
  name: 'achievements',
  initialState,
  reducers: {
    addAchievement: (state, action) => {
      console.log(action.payload);
      
      state.achievements.push(action.payload);
    },
    initAchievement: (state, action) => {
      state.achievements = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(initAsyncAchievement.fulfilled, (state, action) => {
        state.achievements = action.payload;
      })
      .addCase(addAsyncAchievement.fulfilled, (state, action) => {
        const { id, user_id, title, date, format, direction, result, points } = action.payload;
        state.achievements.push({
          id,
          user_id: Number(user_id),
          title,
          date,
          format,
          direction,
          result,
          points
        });
      })
      .addCase(deleteAsyncAchievement.fulfilled, (state, action) => {
        state.achievements = state.achievements.filter((req) => req.id !== Number(action.payload));
      })
      // .addCase(changeAsyncRequest.fulfilled, (state, action) => {
      //   state.achievements = state.achievements.map((req) => {
      //     if (req.id === action.payload.id) {
      //       return {
      //         ...req,
      //         status: action.payload.status
      //       };
      //     }
      //     return req;
      //   });
      // });
  },
});

export const { addAchievement, initAchievement } = achievementsSlice.actions;
export default achievementsSlice.reducer;