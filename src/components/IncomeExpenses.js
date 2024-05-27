import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const IncomeExpenses = () => {

  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map(transaction => transaction.amount);

  const income = amounts 
    .filter(item => item > 0)
    .reduce((acc,item) => (acc += item), 0)
    .toFixed(2);
  
  const expense = (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) * -1
  
  ).toFixed(2);

  return (
    <div className="inc-exp-container">
        <div>
            <h3 className="text-base font-semibold leading-7 text-gray-900">Income</h3>
            <p className="text-base font-semibold leading-7 text-green-500">${income}</p>
        </div>
        <div>
          <h3 className="text-base font-semibold leading-7 text-gray-900">Expense</h3>
            <p className="text-base font-semibold leading-7 text-red-500">${expense}</p>
        </div>
    </div>
  )
}
