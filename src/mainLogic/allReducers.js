import tickSpeedReducer from "../speedControl/tickSpeedReducer";
import cellDataReducer from "../cellDataControl/cellDataReducer";
import isPlayingReducer from "../playControl/isPlayingReducer";
import collumnsAmountReducer from "../sizeControl/collumnsAmountReducer";
import rowsAmountReducer from "../sizeControl/rowsAmountReducer";
import { combineReducers } from "redux";
const allReducers = combineReducers({
    tickSpeedReducer,
    cellDataReducer,
    isPlayingReducer,
    collumnsAmountReducer,
    rowsAmountReducer,
});
export default allReducers;
