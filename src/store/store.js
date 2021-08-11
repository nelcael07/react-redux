import {createStore, combineReducers} from 'redux'
// persistencia de dados
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

// reducers
import calculatorReducer from './Calculator/Calculator.reducer'
import productsReducer from './Products/Products.reducer'

const rootReducer = combineReducers ({
  calculator: calculatorReducer,
  products: productsReducer
})

const persistedReducer = persistReducer({
  key:'root', 
  storage
},rootReducer)

// persistencia de dados
export const store = createStore(persistedReducer)
export const persistedStore = persistStore(store)