import React, { useState } from 'react'
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
import { AddTransactionHeader } from './components/AddTransactionHeader';
import DropDown from './components/DropDown';
import AddressDisplay from './components/AddressDisplay';

function App() {

  const [clientSent, setClientSent] = useState("Please add client address");

  return (
    <GlobalProvider>
      <Header />
      <div className='h-12'/>
      {/* <div className="container"></div> */}
      <AddTransactionHeader />
      <div className=' flex justify-end'>
        <DropDown setClientSent={setClientSent}/>
      </div>
      <AddTransaction />
      <div className='h-12'/>
      <div className='flex justify-between'>
        <InvoiceNumber />
        <DateOf />
      </div>
      <AddressDisplay clientSent={clientSent}/>
      <TransactionList />
      <div className='h-12'/>
      <IncomeExpenses />
      <Balance />
    </GlobalProvider>

  );
}

export default App;