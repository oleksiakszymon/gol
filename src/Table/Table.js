import React from "react";
import "../App.css";
import GridRows from "./GridRows";
import { useSelector } from "react-redux";

export default function Table() {
    const rowsAmount = useSelector((state) => state.rowsAmountReducer);

    let collumnsTable = [];
    for (let i = 0; i < rowsAmount; i++) {
        collumnsTable.push(
            <tr key={i} id={"r" + i}>
                <GridRows row={i} />
            </tr>
        );
    }

    return (
        <table>
            <tbody>{collumnsTable}</tbody>
        </table>
    );
}
