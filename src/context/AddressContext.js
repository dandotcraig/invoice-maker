import React, { useContext, useState } from 'react';

const DataArrayContext = React.createContext();
const upDateFromDropdownContext = React.createContext();
const SelectedDataItemContext = React.createContext();
const UpdateSelectedDataItemContext = React.createContext();

// Holds the context
export function useHoldDataContext() {
    return useContext(DataArrayContext);
}

// Sets the data from the drop
export function useUpdateFromDropdown() {
    return useContext(upDateFromDropdownContext);
}

// Selected data option from dropdown
export function useSelectedDataItem() {
    return useContext(SelectedDataItemContext);
}

// maps the clients array
export function useUpdateSelectedDataItem() {
    return useContext(UpdateSelectedDataItemContext);
}

export function DataArrayProvider({ children }) {
    const clients = [
        {company: "Client 1", value: 1, address: "Client 1 - 32 First st NSW 200"},
        {company: "Client 2", value: 2, address: "Client 2 - 65 Second st NSW 200"},
        {company: "Client 3", value: 3, address: "Client 3 - 19 Third st NSW 200"}
    ];

    const [selectedDataItem, setSelectedDataItem] = useState([""]);

    return (
        <DataArrayContext.Provider value={clients}>
            <upDateFromDropdownContext.Provider value={clients}>
                <SelectedDataItemContext.Provider value={selectedDataItem}>
                    <UpdateSelectedDataItemContext.Provider value={setSelectedDataItem}>
                        {children}
                    </UpdateSelectedDataItemContext.Provider>
                </SelectedDataItemContext.Provider>
            </upDateFromDropdownContext.Provider>
        </DataArrayContext.Provider>
    );
}