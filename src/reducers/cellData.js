const createArray = (rowsAmount, collumnsAmount) => {
    //Initialize 2D array
    let array = new Array(rowsAmount);
    for (let i = 0; i < array.length; i++) {
        array[i] = new Array(collumnsAmount);
    }
    //Fill with false
    for (let i = 0; i < rowsAmount; i++) {
        for (let j = 0; j < collumnsAmount; j++) {
            array[i][j] = { isAlive: false, isNew: false };
        }
    }
    return array;
};

const cellDataReducer = (state = createArray(48, 96), action) => {
    switch (action.type) {
        case "replaceData":
            return action.payload;
        default:
            return state;
    }
};
export default cellDataReducer;
