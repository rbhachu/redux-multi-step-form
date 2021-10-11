import { createSlice } from '@reduxjs/toolkit'

// Slice
const rootSlice = createSlice({
  
  name: "root",

  initialState: {
    FormStage: 1, // default page stage to show on page load
    FormUserSignup: "",
    FormUserPrivacy: ""
  },

  reducers: {
    formStage: (state, action) => { state.FormStage = action.payload },
    formSignup: (state, action) => { state.FormUserSignup = action.payload },
    formPrivacy: (state, action) => { state.FormUserPrivacy = action.payload }
  }

})

// Actions
export const { formStage, formSignup, formPrivacy } = rootSlice.actions
export const reducer = rootSlice.reducer;
