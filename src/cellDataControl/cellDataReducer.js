const cellDataReducer = (state = null, action) => {
    switch (action.type) {
        case "initializeArray": {
            let array = new Array(action.rowsAmount);
            for (let i = 0; i < array.length; i++) {
                array[i] = new Array(action.collumnsAmount);
            }
            for (let i = 0; i < action.rowsAmount; i++) {
                for (let j = 0; j < action.collumnsAmount; j++) {
                    array[i][j] = { isAlive: false, isNew: false };
                }
            }
            if (array !== undefined) {
                return array;
            } else return state;
        }

        case "replaceData":
            return action.payload;
        case "resizeData": {
            let array = new Array(action.rowsAmount);
            for (let i = 0; i < array.length; i++) {
                array[i] = new Array(action.collumnsAmount);
            }
            for (let i = 0; i < action.rowsAmount; i++) {
                for (let j = 0; j < action.collumnsAmount; j++) {
                    if (state[i][j]) {
                        array[i][j] = state[i][j];
                    } else {
                        array[i][j] = { isAlive: false, isNew: false };
                    }
                }
            }
            return array;
        }
        default:
            return state;
    }
};
export default cellDataReducer;
