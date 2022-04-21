import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface TransactionsProps {
  id: number,
  title: string,
  type: string,
  category: string,
  amount: number,
  createdAt: string,
}
type TransactionsInput = Omit<TransactionsProps, 'id' | 'createdAt'>

interface TransactionsPropsChildren{
  children: ReactNode
}

interface TransactionsArray{
  transactions: TransactionsProps[],
  createTransaction: (transaction: TransactionsInput) => Promise<void>
}

const TransactionsContext = createContext<TransactionsArray>(
  {} as TransactionsArray
);

export function TransactionsProvider({ children } : TransactionsPropsChildren){    
  const [transactions, setTransactions] = useState<TransactionsProps[]>([]);

  useEffect(()=> {
    api.get('/transactions')
    .then(response => setTransactions(response.data.transactions))  
  }, []);

  //cria uma transactions
  async function createTransaction(transactionId: TransactionsInput){
    const response =await api.post('/transactions', {
      ...transactionId,
      createdAt: new Date()
    })
    const { transaction } = response.data;

    setTransactions([
      ...transactions,
      transaction,
    ])
  }


  return (
    <TransactionsContext.Provider value={ { transactions, createTransaction} }>
      {children}
    </TransactionsContext.Provider>

  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);
  return context; 
}

