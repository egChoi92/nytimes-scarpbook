import { Outlet } from 'react-router';

export default function App() {
	return (
		<div className="app">
			<div className="app-content">
				<Outlet />
			</div>
		</div>
	);
}
