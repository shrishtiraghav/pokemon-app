// import { createReactQueryHooks } from '@trpc/react';
// import { AppRouter } from '../server/trpc/router';

// export const trpc = createReactQueryHooks<AppRouter>();

import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '../server/trpc/router';
 
export const trpc = createTRPCReact<AppRouter>();