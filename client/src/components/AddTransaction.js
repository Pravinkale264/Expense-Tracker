import React from 'react'
import { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState("");

    const{AddTransaction } =useContext(GlobalContext);

    const onSubmit = e =>{
      e.preventDefault();

      const newTransaction ={
        id: Math.floor(Math.random()*100000000),
        text,
        // amount+= amount,
        amount: +amount,
      }

      
      AddTransaction(newTransaction);
      // localStorage.getItem("atransaction");
      setText("");
      setAmount("");
    }

  return (
    <>
      <h3>Add New Transaction</h3>
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="text"><b> Reason:</b></label>
                <input type="text" value={text} onChange={(e)=>setText(e.target.value)} id='text' placeholder='Enter Text...'/>
            </div>
            <div className="form-control">
                <label htmlFor="amount">
                   <b>Amount:</b><br/>
                    (- value:Expense , + value:Income)
                </label>
                <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} id='amount' placeholder='Enter Amount...'/>
            </div>
            <button className='btn'><b>Add Transaction</b></button>
        </form>

    </>
  )
}

export default AddTransaction
