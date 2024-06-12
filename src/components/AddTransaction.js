import React, {useState, useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';
// import DropDown from './DropDown';



export const AddTransaction = () => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text, 
            amount: +amount
        }
        console.log(newTransaction);
        addTransaction(newTransaction);
    }

    return (
        <div>
            
            
            
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">Description</label>
                    {/* <input type="type" value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text..." /> */}
                    <div className="relative mt-2 rounded-md shadow-sm">
                        {/* <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <span className="text-gray-500 sm:text-sm"></span>
                        </div> */}
                        <input
                            type="type"
                            name="price"
                            id="price"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            className="block w-full rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            placeholder="Enter text..."
                        />
                    </div>
                </div>
                <div className="form-control">
                    <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                        Amount
                    </label>
                    {/* <label htmlFor="amount">
                        <p>(negative - Expense, positive - income)</p> 
                    </label> */}
                    <div className="relative mt-2 rounded-md shadow-sm">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                            <span className="text-gray-500 sm:text-sm">$</span>
                         </div>
                        <input
                        // type="number"
                        name="price"
                        id="price"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="0.00"
                        />
                    </div>
                    <label htmlFor="price" className="block text-xs font-medium leading-6 text-gray-500">
                        (negative = Expense or positive = income)
                    </label>
                    {/* <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter text..." /> */}
                </div>
                <button
                    // href="#"
                    className="rounded-md bg-green-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                    Add line item
                </button>
                {/* <button className='btn'>Add line item</button> */}
            </form>
        </div>
    )
}
