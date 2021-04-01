const tickSpeedReducer = (state = 1000, action) => {
    switch (action.type) {
        case "incrementByAmount":
            return state + action.payload;
        case "decrementByAmount":
            return state - action.payload;
        default:
            return state;
    }
};
export default tickSpeedReducer;
