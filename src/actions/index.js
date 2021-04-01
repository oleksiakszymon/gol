export const incrementByAmount = (nr) => {
    return {
        type: "incrementByAmount",
        payload: nr,
    };
};
export const decrementByAmount = (nr) => {
    return {
        type: "decrementByAmount",
        payload: nr,
    };
};
export const replaceData = (cellData) => {
    return {
        type: "replaceData",
        payload: cellData,
    };
};
export const startInterval = (intervalFunction, tickSpeed) => {
    return {
        type: "startInterval",
        intervalFunction: intervalFunction,
        tickSpeed: tickSpeed,
    };
};
export const stopInterval = () => {
    return {
        type: "stopInterval",
    };
};
