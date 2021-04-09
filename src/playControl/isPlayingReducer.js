const isPlayingReducer = (state = false, action) => {
    switch (action.type) {
        case "start":
            return true;
        case "stop": {
            return false;
        }
        case "startStop":
            return !state;
        default:
            return state;
    }
};
export default isPlayingReducer;
