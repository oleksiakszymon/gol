import React from "react";
import "./App.css";
import Cell from "./Cell";

export default function GridRows(props) {
    const { row, collumnsAmount, toggleAlive } = props;

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
