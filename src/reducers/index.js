import tickSpeedReducer from "./tickSpeed";
import cellDataReducer from "./cellData";
import playIntervalReducer from "./playInterval";
import { combineReducers } from "redux";
const allReducers = combineReducers({
    tickSpeedReducer,
    cellDataReducer,
    playIntervalReducer,
});
export default allReducers;
