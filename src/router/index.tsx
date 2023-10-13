import App from 'App';
import { createBrowserRouter } from 'react-router-dom';
import Home from 'views/home/Home';
import Scrap from 'views/scrap/Scrap';

const router = createBrowserRouter([
	{
		path: '',
		element: <App />,
		children: [
			{ path: '/', element: <Home /> },
			{ path: '/scrap', element: <Scrap /> },
		],
	},
]);

export default router;
