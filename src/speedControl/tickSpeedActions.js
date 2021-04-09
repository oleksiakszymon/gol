export const incrementByAmount = (nr) => ({
    type: "incrementByAmount",
    payload: nr,
});

export const decrementByAmount = (nr) => ({
    type: "decrementByAmount",
    payload: nr,
});
