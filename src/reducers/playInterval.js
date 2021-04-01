const playIntervalReducer = (state = null, action) => {
    switch (action.type) {
        case "startInterval":
            return setInterval(action.intervalFunction, action.tickSpeed);
        case "stopInterval": {
            clearInterval(state);
            return null;
        }
        default:
            return state;
    }
};
export default playIntervalReducer;
