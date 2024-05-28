import { createContext, useReducer } from "react";
// import appReducer from "./AppReducer";
import AddressReducer from "./AddressReducer";

const initialAddressState = {
    clients: [
        {company: "Client 1", value: 1, address: "32 First st NSW 200"},
        {company: "Client 2", value: 2, address: "65 Second st NSW 200"},
        {company: "Client 3", value: 3, address: "19 Third st NSW 200"}
    ]
}

export const AddressContext = createContext(initialAddressState);

export const AddressProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AddressReducer, initialAddressState);

    return (<AddressContext.Provider value={{
        clients: state.clients
    }}>
        {children}
    </AddressContext.Provider>);
}

