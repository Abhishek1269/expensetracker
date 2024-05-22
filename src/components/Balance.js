import React from 'react'
import { Box, Typography, styled } from '@mui/material'

export default function Balance({transactionList}) {

const amount = transactionList.map(item => item.amount);
const total = amount.reduce((acc, item) => (acc += item), 0).toFixed(2);
const emoji = total > 1000 ? <i class="fa-solid fa-face-smile"></i> : <i class="fa-solid fa-face-sad-tear"></i>;


const BalanceText = styled(Typography)`
    font-size: 25px;
    margin-bottom: 20px;
`
  return (
    <Box>
      <BalanceText>{emoji}Balance: ₹{total}</BalanceText>
    </Box>
  )
}
