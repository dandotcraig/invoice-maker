import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
        <h2 className="my-2.5 text-lg font-semibold leading-7 text-gray-900">Balance due</h2>
        <h2 className="my-2.5 text-lg font-semibold leading-7 text-gray-900">${total}</h2>
    </>
    
  )
}
