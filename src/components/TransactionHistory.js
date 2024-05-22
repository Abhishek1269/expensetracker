import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Box, Divider, List, ListItem, ListItemIcon, ListItemText, Typography, styled } from '@mui/material'
import React from 'react'

const ListDetail = styled(ListItem)`
margin-top: 10px;
`

export default function TransactionHistory({transactionList, setTransactionList}) {

const deleteTransaction = (id) => {
    setTransactionList(transactionList.filter(item => item.id !== id))
}

  return (
    <div>
      <Box>
        <Typography variant='h5'>Transaction History</Typography>
        <Divider/>
        <List>
            {
                transactionList.map((item) => {
                    const bgcolor = item.amount > 0 ? 'Green' : 'Red';
                    return (
                      <ListDetail style={{background: `${bgcolor}`, color: '#fff'}}>
                        <ListItemText>{item.text}</ListItemText>
                        <ListItemText>{item.amount}</ListItemText>
                        <ListItemIcon>
                            <DeleteForeverIcon onClick ={() => deleteTransaction(item.id)}/>
                        </ListItemIcon>
                      </ListDetail>
                    );
                  })
            }
        </List>
      </Box>
    </div>
  )
}
