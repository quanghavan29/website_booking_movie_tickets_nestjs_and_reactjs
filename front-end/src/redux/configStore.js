import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import CarouselReducer from './reducers/CarouselReducer'
import MovieReducer from './reducers/MovieReducer'
import CinemaReducer from './reducers/CinemaReducer'

const rootReducer = combineReducers({
    CarouselReducer,
    MovieReducer,
    CinemaReducer,
})

export const store = createStore(rootReducer, applyMiddleware(thunk));