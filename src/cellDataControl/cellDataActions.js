export const replaceData = (cellData) => ({
    type: "replaceData",
    payload: cellData,
});
export const resizeData = (collumnsAmount, rowsAmount) => ({
    type: "resizeData",
    collumnsAmount: collumnsAmount,
    rowsAmount: rowsAmount,
});
export const initializeArray = (collumnsAmount, rowsAmount) => ({
    type: "initializeArray",
    collumnsAmount: collumnsAmount,
    rowsAmount: rowsAmount,
});
