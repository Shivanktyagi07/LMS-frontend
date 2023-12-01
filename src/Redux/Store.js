import { configureStore} from '@reduxjs/toolkit'
import authSliceReducer from './Slice/AuthSlice'
import courseSliceReducer from './Slice/CourseSlice'

const Store = configureStore({
    reducer: {
        name: authSliceReducer,
        course: courseSliceReducer
    },
    devTools: true

})

export default Store