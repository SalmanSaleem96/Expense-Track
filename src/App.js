import React from 'react'
import './App.css'
import { Header } from './Components/Header'
import { Balance } from './Components/Balance '
import { IncomeExpenses } from './Components/IncomeExpenses'
import { TransactionLIst } from './Components/TansactionList'
import { AddTransaction } from './Components/AddTransaction'

function App() {
  return (
    <div>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionLIst />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
