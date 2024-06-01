import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

interface PokedexTableProps {
  pokemons: Array<{ id: number; name: string; types: string[]; sprite: string }>;
}

const PokedexTable: React.FC<PokedexTableProps> = ({ pokemons }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Sprite</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Types</TableCell>
            <TableCell>ID</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pokemons?.map((pokemon) => (
            <TableRow key={pokemon.id}>
              <TableCell><img src={pokemon.sprite}></img></TableCell>
              <TableCell>{pokemon.name}</TableCell>
              <TableCell>{pokemon.types.join(', ')}</TableCell>
              <TableCell>{pokemon.id}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PokedexTable;
