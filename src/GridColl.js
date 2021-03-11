import React from "react";
import "./App.css";

export default function GridColl(props) {
    const { row, colsAmount, cellData, toggleAlive } = props;

    const generateColls = () => {
        let collsTable = [];
        for (let i = 0; i < colsAmount; i++) {
            collsTable.push(
                <td
                    // onClick={toggleAlive(row, i)}
                    className={
                        cellData[row][i].isAlive
                            ? cellData[row][i].isNew
                                ? "changed-cell"
                                : "alive-cell"
                            : "death-cell"
                    }
                    id={row.toString() + i}
                    key={row.toString() + i}
                ></td>
            );
        }
        return collsTable;
    };
    return <>{generateColls()}</>;
}
