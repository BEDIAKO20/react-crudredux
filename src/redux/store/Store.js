import { configureStore } from "@reduxjs/toolkit";
import User_reducer from "../reducers/User_reducer";
import teacher_reducer from "../reducers/teacher_reducer";



export default configureStore({
    reducer:{
        students: User_reducer,
        teachers: teacher_reducer,
    }
})

