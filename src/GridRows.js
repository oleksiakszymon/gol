import React from "react";
import "./App.css";
import Cell from "./Cell";

export default function GridRows(props) {
    const { row, collumnsAmount, cellData, toggleAlive } = props;

    const generateRows = () => {
        let rowsTable = [];
        for (let i = 0; i < collumnsAmount; i++) {
            rowsTable.push(
                <Cell
                    key={toString(row) + i}
                    row={row}
                    collumn={i}
                    cellData={cellData}
                    toggleAlive={toggleAlive}
                />
            );
        }
        return rowsTable;
    };
    return <>{generateRows()}</>;
}
