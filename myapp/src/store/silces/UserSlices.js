import { createSlice } from '@reduxjs/toolkit'
// const initialState = {
//     value: [],
//   }
const userSlice = createSlice({
    name:"user",
    initialState : [],
    reducers:{
        addUser:(state,action)=>{
            state.push(action.payload);
        },
        removeUser(state={},action){
            // console.log("id" , action.payload)
            state.splice(action.payload,1)
        },
        deleteUser(state={},action){

        }

    }
});

// console.log(userSlice.actions)

export default userSlice.reducer;
export const {addUser,removeUser} = userSlice.actions;