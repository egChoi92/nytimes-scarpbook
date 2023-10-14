import BottomBar from 'components/bottomBar/BottomBar';
import TopBar from 'components/topBar/TopBar';
import { Outlet } from 'react-router';
import styled from 'styled-components';

const StyledAppContents = styled.main`
	display: flex;
	flex-direction: column;
	height: 100vh;
`;

export default function App() {
	return (
		<div className="app">
			<StyledAppContents>
				<h1 className="hidden">뉴욕 타임즈</h1>
				<TopBar />
				<Outlet />
			</StyledAppContents>
			<BottomBar />
		</div>
	);
}
