import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function Item({itemProp}) {
  const reduceString= (str)=>{
    return str.length > 200? str.slice(0,118).concat('...'):str;
  };

  const {id,image,title,description,price} = itemProp
  const navegar = useNavigate()
  return (
    <div>
      <br/>
    <Card sx={{ maxWidth: 345, height:500, display:'flex' , flexDirection:'column', justifyContent:'space-between'}}>
      <CardMedia
        component="img"
        height="240"
        image={image}
        alt="Item"
        style={{objectFit:'contain'}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {reduceString(description)}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          ${price}
        </Typography>
      </CardContent>
      <CardActions >
        <Button size="medium" variant="contained" style={{backgroundColor:'rgb(39, 39, 43)', Color:'#ECE8E1',}} onClick={()=>navegar( `/detalle/${id}`)} >Ver Más</Button>
      </CardActions>
    </Card>
    <br />
    </div>
  )
}