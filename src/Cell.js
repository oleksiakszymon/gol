import React from "react";
import "./App.css";

export default function Cell(props) {
    const { row, cellData, toggleAlive, collumn } = props;

    return (
        <td
            onClick={() => toggleAlive(row, collumn)}
            className={
                cellData[row][collumn].isAlive
                    ? cellData[row][collumn].isNew
                        ? "changed-cell"
                        : "alive-cell"
                    : "death-cell"
            }
            id={row.toString() + collumn}
        ></td>
    );
}
