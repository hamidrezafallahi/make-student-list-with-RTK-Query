import{configureStore} from '@reduxjs/toolkit';
import{StudentsApi} from './services/StudentsApi';
export const store = configureStore({
    reducer:{
        [StudentsApi.reducerPath]:StudentsApi.reducer,
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(StudentsApi.middleware)
})