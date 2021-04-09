import React from "react";
import "../App.css";
import Cell from "./Cell";
import { useSelector } from "react-redux";

export default function GridRows(props) {
    const { row, toggleAlive } = props;
    const collumnsAmount = useSelector((state) => state.collumnsAmountReducer);

    const generateRows = () => {
        let rowsTable = [];
        for (let i = 0; i < collumnsAmount; i++) {
            rowsTable.push(
                <Cell
                    key={toString(row) + i}
                    row={row}
                    collumn={i}
                    toggleAlive={toggleAlive}
                />
            );
        }
        return rowsTable;
    };
    return <>{generateRows()}</>;
}
