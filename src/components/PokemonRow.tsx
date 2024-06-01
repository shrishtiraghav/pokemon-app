import React from 'react';
import { Paper, Typography, Grid } from '@mui/material';

interface PokemonRowProps {
  id: number;
  name: string;
  types: string;
  sprite: string;
}

const PokemonRow: React.FC<PokemonRowProps> = ({ id, name, types, sprite }) => {
  return (
    <Paper className='card'>
      <Grid container alignItems="center" spacing={2}>
        <Grid item className='item'>
        <Typography variant="h6"><img src={sprite}></img></Typography>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="body2">ID: {id}</Typography>
          <Typography variant="body2">Type: {types}</Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default PokemonRow;
