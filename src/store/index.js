import {createSlice,configureStore} from '@reduxjs/toolkit'



const greetingSlice = createSlice({
  name:'greeting',
  initialState: [],
  reducers: {
    sayHi(){
      console.log('say hi!')
    }
  }
})


const store = configureStore({
  reducer: {greeting: greetingSlice.reducer}
})


export const greetingActions = greetingSlice.actions;

export default store;