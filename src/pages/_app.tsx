// import { AppProps } from 'next/app';
// import { trpc } from '../utils/trpc';
// import { withTRPC } from '@trpc/next';
// import superjson from 'superjson';
// import { QueryClient, QueryClientProvider } from 'react-query';
// import type { AppRouter } from '../server/trpc/router';
//import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { httpBatchLink } from '@trpc/client';
import React, { useState } from 'react';
import { trpc } from '../utils/trpc';
import Home from "./index";

export default function MyApp() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: '/api/trpc',
         
        }),
      ],
    }),
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {/* Your app here */}
        <Home />
      </QueryClientProvider>
    </trpc.Provider>
  );
  //const queryClient = new QueryClient();

  // return (
  //   <QueryClientProvider client={queryClient}>
  //     <Component {...pageProps} />
  //   </QueryClientProvider>
  // );
};

// export default withTRPC<AppRouter>({
//   config() {
//     return {
//       transformer: superjson,
//       url: '/api/trpc',
//     };
//   },
//   ssr: true,
// })(MyApp);
