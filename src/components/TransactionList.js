import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

import { TransactionItem } from './TransactionItem'

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext)

  // console.log(context);

  return (
    <>
        <h3 className="my-2.5 text-lg font-semibold leading-7 text-gray-900">Line items</h3>
        {/* <ul className="list">
          {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction}/>))}
          
        </ul> */}

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-200 dark:text-slate-950">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Transaction name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" className="px-6 py-3">
                            edit
                        </th>
                    </tr>
                </thead>
                <tbody>
                  {transactions.map(transaction => (<TransactionItem key={transaction.id} transaction={transaction}/>))}
                </tbody>
            </table>
        </div>

    </>
  )
}
