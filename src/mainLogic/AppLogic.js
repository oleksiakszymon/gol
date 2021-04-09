import React, { useEffect, useRef } from "react";
import "../App.css";
import NextStepButton from "../playControl/NextStepButton";
import SpeedButtons from "../speedControl/SpeedButtons";
import StartStopButton from "../playControl/StartStopButton";
import Table from "../Table/Table";
import { useSelector, useDispatch } from "react-redux";
import {
    initializeArray,
    replaceData,
    resizeData,
} from "../cellDataControl/cellDataActions";
import { getCollumnsAmount, getRowsAmount } from "../sizeControl/sizeActions";

export default function AppLogic() {
    const dispatch = useDispatch();
    const initialRender = useRef(true);
    const collumnsAmount = useSelector((state) => state.collumnsAmountReducer);
    const rowsAmount = useSelector((state) => state.rowsAmountReducer);
    if (initialRender.current) {
        dispatch(getRowsAmount());
        dispatch(getCollumnsAmount());
        dispatch(initializeArray(collumnsAmount, rowsAmount));
    }

    const cellDataState = useSelector((state) => state.cellDataReducer);
    const tickSpeed = useSelector((state) => state.tickSpeedReducer);
    const isPlaying = useSelector((state) => state.isPlayingReducer);

    window.addEventListener("resize", () => {
        dispatch(getRowsAmount());
        dispatch(getCollumnsAmount());
    });
    useEffect(() => {
        dispatch(resizeData(collumnsAmount, rowsAmount));
    }, [collumnsAmount, rowsAmount]);
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
        for (let i = 0; i < rowsAmount; i++) {
            neightboursAmountTable[i] = new Array(collumnsAmount);
        }
        console.log(neightboursAmountTable);
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
        dispatch(replaceData(cellData));
    };

    let intervalId = useRef(null);
    useEffect(() => {
        if (isPlaying) {
            intervalId.current = setInterval(oneTick, tickSpeed);
        } else {
            clearInterval(intervalId.current);
        }
    }, [isPlaying]);

    useEffect(() => {
        if (initialRender.current) {
            initialRender.current = false;
        } else {
            if (isPlaying) {
                clearInterval(intervalId.current);
                intervalId.current = setInterval(oneTick, tickSpeed);
            }
        }
    }, [tickSpeed]);
    return (
        <>
            <div className="nav-bar">
                <StartStopButton />
                <NextStepButton nextStepFunction={oneTick} />
                <div id="title">GAME OF LIFE</div>
                <SpeedButtons />
            </div>
            <Table />
        </>
    );
}
