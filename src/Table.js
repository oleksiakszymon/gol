import React from "react";
import "./App.css";
import GridRows from "./GridRows";

export default function Table(props) {
    const { collumnsAmount, cellData, rowsAmount, toggleAlive } = props;

    let collumnsTable = [];
    for (let i = 0; i < rowsAmount; i++) {
        collumnsTable.push(
            <tr key={i} id={"r" + i}>
                <GridRows
                    row={i}
                    collumnsAmount={collumnsAmount}
                    cellData={cellData}
                    toggleAlive={toggleAlive}
                />
            </tr>
        );
    }

    return (
        <table>
            <tbody>{collumnsTable}</tbody>
        </table>
    );
}
