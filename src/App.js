import './App.css';
import { Typography, styled, Box } from '@mui/material';
import Balance from './components/Balance';
import Expense from './components/Expense';
import Transaction from './components/Transaction';
import TransactionHistory from './components/TransactionHistory';
import { useState } from 'react';

const Header = styled(Typography)`
font-size: 40px;
color: black;
text-transform: uppercase;
font-weight: bold;
`
const ComponentBox = styled(Box)`
display: flex;
background: #fff;
width: 800px;
padding: 10px;
border-radius: 20px;
margin: auto;

& > div {
  height: 70vh;
  width: 50%;
  padding: 10px;
}
`

function App() {

const [transactionList, setTransactionList] = useState([
  {id: 1, text: 'Rent', amount: -18000},
  {id: 2, text: 'Salary', amount: 30000},
  {id: 3, text: 'Book', amount: -180},
  {id: 4, text: 'Grocery', amount: -5000},
  {id: 5, text: 'Bonus', amount: 5000},
  {id: 6, text: 'Recharge', amount: -299}
])

  return (
    <Box className='App'>
      <Header>Expense Tracker</Header>
      <ComponentBox>
      <Box>
        <Balance transactionList = {transactionList}/>
        <Expense transactionList = {transactionList}/>
        <Transaction setTransactionList = {setTransactionList}/>
      </Box>
      <Box>
        <TransactionHistory transactionList = {transactionList} setTransactionList = {setTransactionList}/>
      </Box>
      </ComponentBox>
    </Box>
  );
}

export default App;
