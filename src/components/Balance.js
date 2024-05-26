import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
        <h3 className="text-base font-semibold leading-7 text-gray-900">Balance due</h3>
        <h1>${total}</h1>
    </>
    
  )
}
