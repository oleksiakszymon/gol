import React, { useEffect, useState, useRef } from "react";
import "./App.css";
import NextStepButton from "./NextStepButton";
import SpeedButtons from "./SpeedButtons";
import StartStopButton from "./StartStopButton";
import Table from "./Table";

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
const rowsAmount = 48;
const collumnsAmount = 96;
export default function AppLogic() {
    const [cellDataState, setCellDataState] = useState(
        createArray(rowsAmount, collumnsAmount)
    );
    const [playInterval, setPlayInterval] = useState(null);
    const [tickSpeed, setTickSpeed] = useState(1000);
    const initialRender = useRef(true);
    function toggleAlive(row, collumn) {
        let cellData = { ...cellDataState };
        cellData[row][collumn].isAlive = !cellData[row][collumn].isAlive;
        if (cellData[row][collumn].isAlive) {
            cellData[row][collumn].isNew = true;
        }
        setCellDataState(cellData);
    }
    const neightboursAmountCounter = (x, y) => {
        let counter = 0;
        let copyX = x;
        let copyY = y;
        //LEFT
        if (copyY === 0) copyY = collumnsAmount;
        if (cellDataState[copyX][copyY - 1].isAlive) counter++;
        copyY = y;
        //LEFTTOP
        if (copyX === 0) copyX = rowsAmount;
        if (copyY === 0) copyY = collumnsAmount;
        if (cellDataState[copyX - 1][copyY - 1].isAlive) counter++;
        copyX = x;
        copyY = y;
        //TOP
        if (copyX === 0) copyX = rowsAmount;
        if (cellDataState[copyX - 1][copyY].isAlive) counter++;
        copyX = x;
        //RIGHTTOP
        if (copyX === 0) copyX = rowsAmount;
        if (copyY === collumnsAmount - 1) copyY = -1;
        if (cellDataState[copyX - 1][copyY + 1].isAlive) counter++;
        copyX = x;
        copyY = y;
        //RIGHT
        if (copyY === collumnsAmount - 1) copyY = -1;
        if (cellDataState[copyX][copyY + 1].isAlive) counter++;
        copyY = y;
        //RIGHTBOTTOM
        if (copyX === rowsAmount - 1) copyX = -1;
        if (copyY === collumnsAmount - 1) copyY = -1;
        if (cellDataState[copyX + 1][copyY + 1].isAlive) counter++;
        copyX = x;
        copyY = y;
        //BOTTOM
        if (copyX === rowsAmount - 1) copyX = -1;
        if (cellDataState[copyX + 1][copyY].isAlive) counter++;
        copyX = x;
        //LEFTBOTTOM
        if (copyY === 0) copyY = collumnsAmount;
        if (copyX === rowsAmount - 1) copyX = -1;
        if (cellDataState[copyX + 1][copyY - 1].isAlive) counter++;

        return counter;
    };

    const oneTick = () => {
        //Copying cell data state
        let cellData = { ...cellDataState };
        //Creating array of neightbours amount for every cell
        let neightboursAmountTable = new Array(rowsAmount);
        for (let i = 0; i < 48; i++) {
            neightboursAmountTable[i] = new Array(collumnsAmount);
        }
        for (let i = 0; i < rowsAmount; i++) {
            for (let j = 0; j < collumnsAmount; j++) {
                neightboursAmountTable[i][j] = neightboursAmountCounter(i, j);
                cellData[i][j].isNew = false;
            }
        }
        //Changing is Alive
        for (let i = 0; i < rowsAmount; i++) {
            for (let j = 0; j < collumnsAmount; j++) {
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

    function togglePlay() {
        if (!playInterval) {
            setPlayInterval(setInterval(oneTick, tickSpeed));
        } else {
            clearInterval(playInterval);
            setPlayInterval(null);
        }
    }
    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false;
        } else {
            if (playInterval !== null) {
                clearInterval(playInterval);
                setPlayInterval(setInterval(oneTick, tickSpeed));
            }
        }
    }, [tickSpeed]);
    return (
        <>
            <div className="nav-bar">
                <StartStopButton
                    startStopFunction={togglePlay}
                    isStarted={playInterval}
                />
                <NextStepButton nextStepFunction={oneTick} />
                <div id="title">GAME OF LIFE</div>
                <SpeedButtons
                    currentSpeed={tickSpeed}
                    changeSpeed={setTickSpeed}
                />
            </div>
            <Table
                rowsAmount={rowsAmount}
                collumnsAmount={collumnsAmount}
                cellData={cellDataState}
                toggleAlive={toggleAlive}
            />
        </>
    );
}
