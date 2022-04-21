import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { createServer, Model } from 'miragejs';

createServer({

  models: {
    transaction: Model,
  },

  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Trabalho',
          amount: 1550,
          type: 'deposit',
          category: 'Loja',
          createdAt: '2021-02-12 08:20:00'
        },
        {
          id: 2,
          title: 'Aluguel',
          amount: 350,
          type: 'withdraw',
          category: 'Casa',
          createdAt: '2021-01-02 09:00:00'
        },  

      ]
    })
  },

  routes(){
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data)
    })
  }
})

const root = ReactDOM.createRoot(  
document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);