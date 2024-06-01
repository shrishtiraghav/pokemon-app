const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const pokemonData = [
    { name: 'Pokemon1', types: 'grass', sprite: '/assets/bulbasaur.png' },
    { name: 'Pokemon2', types: 'fire', sprite: '/assets/charmander.png' },
    // Add more mock data here...
  ];

  for (const p of pokemonData) {
    await prisma.pokemon.create({
      data: p,
    });
  }
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
