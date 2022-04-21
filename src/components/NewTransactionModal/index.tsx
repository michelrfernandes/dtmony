import { FormEvent, useState } from 'react';
import Modal from 'react-modal'
import { useTransactions } from '../../hooks/userTransactions';

import { Container, RadioBox, TransactionBox } from "./styles" 

import imgClose  from "../../assets/close.svg"
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

interface TransactionsModalProp {
  isOpen : boolean;
  onRequestClose: () => void;
}
export function NewTransactionModal({ isOpen, onRequestClose }:TransactionsModalProp) {

const { createTransaction } = useTransactions();

const [title, setTitle] = useState('');
const [category, setCategory] = useState('');
const [type, setType] = useState('deposit');
const [amount, setAmount] = useState(0);

async function handleCreateTransaction(event: FormEvent) {
  event.preventDefault(); 

  await createTransaction({
    title, category, type, amount
  });
  onRequestClose()

  setTitle('');
  setCategory('');
  setType('deposit');
  setAmount(0);
} 

  return (
    <Modal 
    isOpen={isOpen} 
    onRequestClose={onRequestClose}  
    overlayClassName="react-modal-overlay" 
    className="react-modal-content"      
    > 
    <button onClick={onRequestClose} className="react-button-close">
      <img src={imgClose} alt="Fechar" />
    </button>

        <Container onSubmit={ handleCreateTransaction } >          
        <h2>Cadastra transação</h2>         

        <input 
        placeholder='Titulo'
        value={title}
        onChange={event => setTitle(event.target.value)}
        />

        <input type='number'
        placeholder='Valor'
        value={amount}
        onChange={event => setAmount(Number(event.target.value))}
        />        
         
         <TransactionBox> 
           <RadioBox
                type="button"
                onClick={()=> setType('deposit')}
                isActive={type === 'deposit'}
                activeColor='green'
           >    
                <img src={incomeImg} alt="entradas" />
                <span>Entradas</span>
           </RadioBox>

           <RadioBox
                type="button"
                onClick={()=> setType('withdraw')}
                isActive={type === 'withdraw'}
                activeColor='red'
           >     
                <img src={outcomeImg} alt="saídas" />
                <span>Saídas</span>
           </RadioBox>
         </TransactionBox>

        <input 
        placeholder='Categoria'
        value={category}
        onChange={event => setCategory(event.target.value)}
        />
        
        <button type="submit">
          Cadastrar
        </button>

    </Container>   

      </Modal>
  )  
}