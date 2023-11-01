import { configureStore} from '@reduxjs/toolkit'
import authSliceReducer from './Slice/AuthSlice'

const Store = configureStore({
    reducer: {
        name: authSliceReducer,
    },
    devTools: true

})

export default Store