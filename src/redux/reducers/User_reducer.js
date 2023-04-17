import { createSlice } from "@reduxjs/toolkit";


const usersSlice = createSlice({
    name: 'users',
    initialState:{ 
        user:[
            {name:"Bediako", gen:23,id:2345},
            {name:"Ivan", gen:23, id:357},
            {name:"Menah", gen:23, id:256744}, 
            {name:"Kofi", gen:23, id:23567},
            {name:"Boadi", gen:23, id:246663},
            {name:"Kojo", gen:33, id:2245426}
    ],
    }, 
    reducers: {
        createUser:(state) => {

        },
        updateUser: () => {},
        deleteUser:() => {}
    } 
})


export const {createUser,updateUser,deleteUser}=usersSlice.actions

export default usersSlice.reducer