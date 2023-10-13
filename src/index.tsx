import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import router from 'router';

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			staleTime: 10000,
			keepPreviousData: true,
			refetchOnWindowFocus: true,
		},
	},
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
	// <React.StrictMode>
	<QueryClientProvider client={queryClient}>
		<RouterProvider router={router} />
		{/* <App /> */}
		<ReactQueryDevtools initialIsOpen={false} />
	</QueryClientProvider>,
	// </React.StrictMode>,
);
