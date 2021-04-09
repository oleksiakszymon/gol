const collumnsAmountReducer = (state = 0, action) => {
    switch (action.type) {
        case "getCollumnsAmount":
            let width = window.innerWidth;
            let collumnsAmount = Math.round(width / 20);

            return collumnsAmount;
        default:
            return state;
    }
};
export default collumnsAmountReducer;
