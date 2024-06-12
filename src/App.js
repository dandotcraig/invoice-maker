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
import { DataArrayProvider } from './context/AddressContext';

function App() {

  const [clientSent, setClientSent] = useState("Please add client address");

  return (
    <GlobalProvider>
      <DataArrayProvider>
      <div className='h-8'/>
        <Header />
        <div className='h-12'/>
        {/* <div className="container"></div> */}
        <AddTransactionHeader />
        <p className="my-2.5 text-sm leading-6 text-gray-600">Add client:</p>
        <DropDown setClientSent={setClientSent}/>
        
        {/* <div className='my-2.5 flex justify-between'>
          
        </div> */}
        <AddTransaction />
        <div className='h-8'/>
        <div className='flex justify-between'>
          <InvoiceNumber />
          <DateOf />
        </div>
        <AddressDisplay clientSent={clientSent}/>
        <TransactionList />
        <div className='h-8'/>
        <IncomeExpenses />
        <Balance />
        <div className='h-24'/>
      </DataArrayProvider>
    </GlobalProvider>

  );
}

export default App;