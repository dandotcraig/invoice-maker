import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { Transaction } from './Transaction'

export const TransactionList = () => {
  const { transactions } = useContext(GlobalContext)

  // console.log(context);

  return (
    <>
        <h3 className="text-base font-semibold leading-7 text-gray-900">History</h3>
        <ul className="list">
          {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction}/>))}
          
        </ul>
    </>
  )
}
