import React,{ createContext, useReducer} from "react";
import AppReducer from './AppReducer';
import axios from 'axios';

// { id: 1, text:'Bank' , amount: -20},
// { id: 2, text:'salary' , amount: 220},
// { id: 3, text:'grocery' , amount: -520},
// { id: 4, text:'car' , amount: 500},
const initialState ={
    transactions: [],
    error:null,
    loading:true
}

//Create context
export const GlobalContext = createContext(initialState);

// Provider components
export const GlobalProvider = ({children})=>{
    const [state, dispatch] = useReducer(AppReducer, initialState);

//Actions
 async function getTransactions(){
    try {
        const res = await axios.get('/api/v1/transactions');

        dispatch({
            type: 'GET_TRANSACTIONS',
            payload: res.data.data
        });
    } catch (err) {
        dispatch({
            type: 'TRANSACTION_ERROR',
            payload: err.response.data.error
        });
    }
 }


async function deleteTransaction(id){
    try {
        await axios.delete(`/api/v1/transactions/${id}`);

        dispatch({
            type:'DELETE_TRANSACTION',
            payload:id
        });
    } catch (err) {
        dispatch({
            type: 'TRANSACTION_ERROR',
            payload: err.response.data.error
        });
    } 
}

async function AddTransaction(transaction){
    const config ={
        headers:{
            'Content-Type':'application/json'
        }
    }

    try {
        const res = await axios.post('/api/v1/transactions',transaction,config);

        dispatch({
            type:'ADD_TRANSACTION',
            payload:res.data.data
        });

    } catch (err) {
        dispatch({
            type: 'TRANSACTION_ERROR',
            payload: err.response.data.error
        });
    }
}

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        error:state.error,
        loading: state.loading,
        getTransactions,
        deleteTransaction,
        AddTransaction,
    }}>
        {children}
    </GlobalContext.Provider>);
}