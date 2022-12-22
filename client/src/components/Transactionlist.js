import React,{useContext,useEffect} from 'react'
import { GlobalContext } from '../context/GlobalState'
import Transaction from './Transaction';

const Transactionlist = () => {
  const {transactions,getTransactions} = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
    // console.log(context);
  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        {
          transactions.map(transaction =>(
            <Transaction key={transaction.id} transaction={transaction}/>
            ))
        }
      </ul>
    </>
  )
}

export default Transactionlist;
