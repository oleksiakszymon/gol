const rowsAmountReducer = (state = 0, action) => {
    switch (action.type) {
        case "getRowsAmount":
            let height = window.innerHeight;
            let rowsAmount = Math.round(height / 20);

            return rowsAmount;
        default:
            return state;
    }
};
export default rowsAmountReducer;
