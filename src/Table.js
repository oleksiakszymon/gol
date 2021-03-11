import React from "react";
import "./App.css";
import GridColl from "./GridColl";

export default function Table(props) {
    let rowsTable = [];
    for (let i = 0; i < props.rowsAmount; i++) {
        rowsTable.push(
            <tr key={i} id={"r" + i}>
                <GridColl
                    row={i}
                    colsAmount={props.colsAmount}
                    cellData={props.cellData}
                    // toggleAlive={props.toggleAlive}
                />
            </tr>
        );
    }

    return (
        <>
            <table>
                <tbody>{rowsTable}</tbody>
            </table>
        </>
    );
}
