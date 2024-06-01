import { initTRPC } from '@trpc/server';
import { z } from 'zod';
import { Context } from './context';

const t = initTRPC.context<Context>().create();
 
export const router = t.router;
export const publicProcedure = t.procedure;

export const appRouter =  router({
  getPokemon: publicProcedure.input( z.object({
    name: z.string(),
  }),).query(async ({input,ctx}) => {
    const pokemon = await ctx.prisma.pokemon.findUnique({
            where: { name: input.name },
          });
          if (pokemon) {
            pokemon.types = pokemon.types; // Split types into an array
          }
          return pokemon;
  }),
  
  getPokemonArray: publicProcedure.input( z.object({
    names: z.array(z.string()),}),).query(async ({input,ctx}) => {
    const pokemons = await ctx.prisma.pokemon.findMany({
            where: { name: { in: input.names } },
          });
        return pokemons?.map((p: any) => ({ ...p, types: p.types.split(',') })); // Split types into an array
  }),
  
  getPokemonByType: publicProcedure.input(z.object({
    selectedType: z.string().optional(),}),).query(async ({input,ctx}) => {
    if (!input) return [];
      const pokemons = await ctx.prisma.pokemon.findMany({
        where: {
          types: {
            contains: input.selectedType,
          },
        },
      });
    return pokemons?.map((p:any) => ({ ...p, types: p.types.split(',') }));  // Split types into an array
  }),
})
  
  

export type AppRouter = typeof appRouter;
