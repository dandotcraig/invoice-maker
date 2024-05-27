import React from 'react'
import './App.css';
import { Header } from './components/Header';
import { Balance } from './components/Balance'
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import { GlobalProvider } from './context/GlobalState';
// import DropDown from './components/DropDown';
import DateOf from './components/DateOf';
import InvoiceNumber from './components/InvoiceNumber';

function App() {

  
  return (
    <GlobalProvider>
      <Header />
      <div className='h-12'/>
      {/* <div className="container"></div> */}
      <AddTransaction />
      <div className='h-12'/>
      <div className='flex justify-between'>
        <InvoiceNumber />
        <DateOf />
      </div>
      <TransactionList />
      <div className='h-12'/>
      <IncomeExpenses />
      <Balance />
    </GlobalProvider>

  );
}

export default App;