import React, {useContext} from "react";
import { GlobalContext } from '../context/GlobalState';



export const TransactionItem = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext)

    const sign = transaction.amount < 0 ? '-' : '+';

    if (!transaction) {
        return null; // or return some fallback UI
    }
    
    return (
        <>
            <tr key={transaction.amount < 0 ? 'minus' : 'plus'} className="odd:bg-white odd:dark:bg-white even:bg-gray-50 even:dark:bg-gray-100 dark:border-gray-700">
                <th  scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-gray-700">
                    {transaction.text} 
                </th>
                <td className="px-6 py-4">
                    {sign}${Math.abs(transaction.amount)}
                </td>
                <td className="px-6 py-4">
                    <button onClick={() => deleteTransaction(transaction.id)} key="delete-btn" className="font-medium text-blue-600 dark:text-red-500 hover:underline">Edit</button>
                </td>
                {/* <td>
                    <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">x</button>
                </td> */}
            </tr>
        </>
    )
}