import { useState } from 'react';
import Modal from 'react-modal'
import { NewTransactionModal } from './components/NewTransactionModal';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';

import { GlobalStyle } from './styles/Global';
import { TransactionsProvider } from './hooks/userTransactions';

Modal.setAppElement('#root');

export function App() {
  const [isOpenModalNewTransactions, setIisOpenModalNewTransactions] = useState(false);
  const [title, setTitle] = useState('')  

  function handleOpenModal() {
    setIisOpenModalNewTransactions(true);
  }

  function handleCloseModal() {
    setIisOpenModalNewTransactions(false);
  }
  return (   
    <TransactionsProvider>

      <Header clickModal={ handleOpenModal } />
      <Dashboard/>
      <GlobalStyle/>   
      <NewTransactionModal 
      isOpen={isOpenModalNewTransactions} 
      onRequestClose={handleCloseModal}/>  

    </TransactionsProvider>
  );
}