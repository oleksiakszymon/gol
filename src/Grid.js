import React, { useState } from "react";
import "./App.css";
import Button from "./Button";
import Table from "./Table";

const createArray = (rowsAmount, colsAmount) => {
    //Initialize 2D array
    let arr = new Array(rowsAmount);
    for (let i = 0; i < arr.length; i++) {
        arr[i] = new Array(colsAmount);
    }
    //Fill with false
    for (let i = 0; i < rowsAmount; i++) {
        for (let j = 0; j < colsAmount; j++) {
            arr[i][j] = { isAlive: false, isNew: false };
        }
    }
    //Test true assignments
    arr[20][40].isAlive = true;
    arr[20][41].isAlive = true;
    arr[20][48].isAlive = true;
    arr[20][49].isAlive = true;
    arr[21][39].isAlive = true;
    arr[21][42].isAlive = true;
    arr[22][39].isAlive = true;
    arr[22][42].isAlive = true;
    arr[23][39].isAlive = true;
    arr[23][42].isAlive = true;
    arr[24][40].isAlive = true;
    arr[24][41].isAlive = true;
    arr[21][47].isAlive = true;
    arr[21][50].isAlive = true;
    arr[22][47].isAlive = true;
    arr[22][50].isAlive = true;
    arr[23][47].isAlive = true;
    arr[23][50].isAlive = true;
    arr[24][49].isAlive = true;
    arr[24][48].isAlive = true;

    return arr;
};
const rowsAmount = 48;
const colsAmount = 96;
export default function Grid() {
    const [cellDataState, setCellDataState] = useState(
        createArray(rowsAmount, colsAmount)
    );
    // function toggleAlive(x, y) {
    //     let cellData = { ...cellDataState };
    //     cellData[x][y].isAlive = !cellData[x][y].isAlive;
    //     setCellDataState(cellData);
    // }
    const neightboursAmountCounter = (x, y) => {
        let counter = 0;
        let a = x;
        let b = y;
        //LEFT
        if (b === 0) b = colsAmount;
        if (cellDataState[a][b - 1].isAlive) counter++;
        b = y;
        //LEFTTOP
        if (a === 0) a = rowsAmount;
        if (b === 0) b = colsAmount;
        if (cellDataState[a - 1][b - 1].isAlive) counter++;
        a = x;
        b = y;
        //TOP
        if (a === 0) a = rowsAmount;
        if (cellDataState[a - 1][b].isAlive) counter++;
        a = x;
        //RIGHTTOP
        if (a === 0) a = rowsAmount;
        if (b === colsAmount - 1) b = 0;
        if (cellDataState[a - 1][b + 1].isAlive) counter++;
        a = x;
        b = y;
        //RIGHT
        if (b === colsAmount - 1) b = 0;
        if (cellDataState[a][b + 1].isAlive) counter++;
        b = y;
        //RIGHTBOTTOM
        if (a === rowsAmount - 1) a = 0;
        if (b === colsAmount - 1) b = 0;
        if (cellDataState[a + 1][b + 1].isAlive) counter++;
        //BOTTOM
        if (a === rowsAmount - 1) a = 0;
        if (cellDataState[a + 1][b].isAlive) counter++;
        a = x;
        //LEFTBOTTOM
        if (b === 0) b = colsAmount;
        if (a === rowsAmount - 1) a = 0;
        if (cellDataState[a + 1][b - 1].isAlive) counter++;
        a = x;
        b = y;

        return counter;
    };

    const oneTick = () => {
        //Copying cell data state
        let cellData = { ...cellDataState };
        //Creating array of neightbours amount for every cell
        let neightboursAmountTable = new Array(rowsAmount);
        for (let i = 0; i < 48; i++) {
            neightboursAmountTable[i] = new Array(colsAmount);
        }
        for (let i = 0; i < rowsAmount; i++) {
            for (let j = 0; j < colsAmount; j++) {
                neightboursAmountTable[i][j] = neightboursAmountCounter(i, j);
                cellData[i][j].isNew = false;
            }
        }
        //Changing is Alive
        for (let i = 0; i < rowsAmount; i++) {
            for (let j = 0; j < colsAmount; j++) {
                if (
                    cellData[i][j].isAlive &&
                    neightboursAmountTable[i][j] !== 2 &&
                    neightboursAmountTable[i][j] !== 3
                ) {
                    cellData[i][j].isAlive = false;
                }
                if (
                    !cellData[i][j].isAlive &&
                    neightboursAmountTable[i][j] === 3
                ) {
                    cellData[i][j].isAlive = true;
                    cellData[i][j].isNew = true;
                }
            }
        }
        setCellDataState(cellData);
    };

    let play;

    function togglePlay() {
        if (!play) {
            play = window.setInterval(oneTick, 1000);
        } else {
            window.clearInterval(play);
            play = null;
        }
    }
    return (
        <>
            <Button play={togglePlay} />
            <Table
                rowsAmount={rowsAmount}
                colsAmount={colsAmount}
                cellData={cellDataState}
                // toggleAlive={toggleAlive}
            />
        </>
    );
}
