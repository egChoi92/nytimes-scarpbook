import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router';
import router from 'router';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from 'styles/GlobalStyles';
import theme from 'styles/theme';

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
		<ThemeProvider theme={theme}>
			<RouterProvider router={router} />
			<GlobalStyles />
			<ReactQueryDevtools initialIsOpen={false} />
		</ThemeProvider>
	</QueryClientProvider>,
	// </React.StrictMode>,
);
