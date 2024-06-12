import React from "react";
import { useSelectedDataItem } from '../context/AddressContext';

export default function DataDisplay() {
    const selectedDataItem = useSelectedDataItem();

    return (
        <div >
            <p className="mb-2.5 text-sm leading-6 text-gray-600">{selectedDataItem || "No client selected"}</p>
        </div>
    );
}