import React, { useState } from 'react'
import { Box, Button, TextField, Typography, styled } from '@mui/material'

const Container = styled(Box)`
display: flex;
flex-direction: column;
& > h5, & > div, & > Button{
    margin-top: 30px;
}
`
export default function Transaction({setTransactionList}) {

const [text, setText] = useState('');
const [amount, setAmount] = useState('');



const addTransaction = () => {
    const trans ={
        id: Math.floor(Math.random() * 1000000),
        text: text,
        amount: +amount
    }
    setTransactionList(prevState => [trans, ...prevState]);
    setText('');
    setAmount('');
    
}

  return (
    <Container>
      <Typography variant='h5'>New Transaction</Typography>
      <TextField label="Enter Expense" value={text} onChange={(e) => setText(e.target.value)}></TextField>
      <TextField label="Enter Amount" value={amount} onChange={(e) => setAmount(e.target.value)}></TextField>
      <Button variant='contained'onClick={addTransaction}>Add Transaction</Button>
    </Container>
  )
}

