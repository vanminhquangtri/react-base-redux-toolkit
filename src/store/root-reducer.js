import { combineReducers } from "redux";
import NumberReducer from "./number/reducers";

const rootReducers = combineReducers({
    Number: NumberReducer
})

export default rootReducers