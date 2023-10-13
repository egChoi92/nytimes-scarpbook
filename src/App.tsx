import BottomBar from 'components/bottomBar/BottomBar';
import TopBar from 'components/topBar/TopBar';
import { Outlet } from 'react-router';

export default function App() {
	return (
		<div className="app">
			<div className="app-content">
				<TopBar />
				<Outlet />
				<BottomBar />
			</div>
		</div>
	);
}
