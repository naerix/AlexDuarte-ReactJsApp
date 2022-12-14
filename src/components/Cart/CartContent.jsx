import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useCart } from '../../context/CartContext';
import { Button,Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#27272b',
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export default function CartContext() {
    const {cart, removeItem, cartTotal, clear}= useCart()
    const navegar =useNavigate()
  return (
    <>
    <br />
    <Typography variant="h6" sx={{
            fontWeight: 500}}>Tu carrito:</Typography>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="customized table">
        {<TableHead>
          <TableRow>
            <StyledTableCell>Producto</StyledTableCell>
            <StyledTableCell align="right">Cantidad</StyledTableCell>
            <StyledTableCell align="right">Precio</StyledTableCell>
            <StyledTableCell align="right">Eliminar producto</StyledTableCell>
            <StyledTableCell align="right">{''}</StyledTableCell>
          </TableRow>
  </TableHead>}
        <TableBody>
          {cart.map((compra) => (
            <StyledTableRow key={compra.id}>
              <StyledTableCell component="th" scope="row"><div className='cartInfo'><img className='CartImage' src={compra.image}/>
                <h4>{compra.title}</h4></div>
              </StyledTableCell>
              <StyledTableCell align="right">{compra.cantidad}</StyledTableCell>
              <StyledTableCell align="right">${compra.price}</StyledTableCell>
              <StyledTableCell align="right">{
                <IconButton aria-label="delete"  onClick={()=>removeItem(compra.id)}>
                  <DeleteIcon fontSize="medium" className='Delete' />
                </IconButton>}
              </StyledTableCell>
              <StyledTableCell align="right">{''}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <div>
        <Typography variant='h6'>Total a pagar: ${cartTotal().toFixed(3)}</Typography>
        <div>
            <Button onClick={()=> clear()} variant='contained' style={{marginRight:'1.5rem',backgroundColor:'rgba(0, 0, 0, 0.87)'}}>Vaciar carrito</Button>
            <Button variant='contained' style={{backgroundColor:'rgba(0, 0, 0, 0.87)'}} onClick={()=>navegar('/checkout')}>Terminar Compra</Button>
        </div>
    </div>
    <br />
    </>
  );
}
