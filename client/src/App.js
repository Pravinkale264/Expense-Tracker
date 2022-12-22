import Header from "./components/Header";
import Balance from "./components/Balance";
import Incomeexpense from "./components/Incomeexpense";
import Transactionlist from "./components/Transactionlist";
import AddTransaction from "./components/AddTransaction";
import {GlobalProvider} from "./context/GlobalState";

import './App.css';

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <Header/>
        <Balance/>
        <Incomeexpense/>
        <Transactionlist/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
