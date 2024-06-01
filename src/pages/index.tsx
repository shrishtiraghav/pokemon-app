import { useState } from 'react';
import { trpc } from '../utils/trpc';
import PokemonRow from '../components/PokemonRow';
import PokedexTable from '../components/PokedexTable';
import PokemonTypeSelection from '../components/PokemonTypeSelection';
import { TextField, Button } from '@mui/material';

//import styles
import "../global.css";

const Home = () => {
  const [name, setName] = useState('');
  const [names, setNames] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string | undefined>(undefined);

  const pokemonQuery = trpc.getPokemon.useQuery({"name":name });
  const pokemonArrayQuery = trpc.getPokemonArray.useQuery({names: names})
  const filteredPokemonQuery = trpc.getPokemonByType.useQuery({selectedType: selectedType})
  console.log("pokemonQuery", pokemonQuery.data)

  const handleSingleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Fetch single Pokemon
  };

  const handleMultipleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Fetch multiple Pokemon
  };

  return (
    <div className="container">
      <form onSubmit={handleSingleSubmit} className="pokemon-form">
        <TextField label="Pokemon Name" value={name} onChange={(e) => setName(e.target.value)} />
        <Button type="submit" variant="contained" color="primary">
          Search
        </Button>
      </form>

      {pokemonQuery.data && (
        <PokemonRow
          id={pokemonQuery.data.id}
          name={pokemonQuery.data.name}
          types={pokemonQuery.data.types}
          sprite={pokemonQuery.data.sprite}
        />
      )}

      <form onSubmit={handleMultipleSubmit} className="pokemon-form">
        <TextField
          label="Pokemon Names (comma separated)"
          value={names.join(', ')}
          onChange={(e) => setNames(e.target.value.split(',')?.map((s) => s.trim()))}
        />
        <Button type="submit" variant="contained" color="primary">
          Search
        </Button>
      </form>

      {pokemonArrayQuery.data && <PokedexTable pokemons={pokemonArrayQuery.data} />}

      <PokemonTypeSelection selectedType={selectedType} selectType={setSelectedType} />

      {filteredPokemonQuery.data && <PokedexTable pokemons={filteredPokemonQuery.data} />}
    </div>
  );
};

export default Home;
