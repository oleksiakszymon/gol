import React from "react";
import "../App.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { replaceData } from "../cellDataControl/cellDataActions";

export default function Cell(props) {
    const { row, collumn } = props;
    const cellDataState = useSelector((state) => state.cellDataReducer);
    const dispatch = useDispatch();

    function toggleAlive(row, collumn) {
        let cellData = { ...cellDataState };
        cellData[row][collumn].isAlive = !cellData[row][collumn].isAlive;
        if (cellData[row][collumn].isAlive) {
            cellData[row][collumn].isNew = true;
        }
        dispatch(replaceData(cellData));
    }

    return (
        <td
            onClick={() => toggleAlive(row, collumn)}
            className={
                cellDataState[row][collumn]
                    ? cellDataState[row][collumn].isAlive
                        ? cellDataState[row][collumn].isNew
                            ? "changed-cell"
                            : "alive-cell"
                        : "death-cell"
                    : "undefined-cell"
            }
            id={row.toString() + collumn}
        ></td>
    );
}
