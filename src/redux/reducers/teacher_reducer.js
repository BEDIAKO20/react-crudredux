import { createSlice } from "@reduxjs/toolkit";


const teacherReducer = createSlice({
    name: "teachers",
    initialState:{ 
        teachers:[
            {name:"Ama", gen:23,id:2345},
            {name:"Abigiail", gen:23, id:357},
            {name:"Zeinab", gen:23, id:256744},
            {name:"Abena", gen:23, id:23567},
            {name:"Adwoa", gen:23, id:246663}
    ],
    },
    reducers: {
        createteacher:(state) => {},
        updateteacher: () => {},
        deleteteacher:() => {}
    } 
})


export const {createteacher,updateteacher,deleteteacher}= teacherReducer.actions

export default teacherReducer.reducer