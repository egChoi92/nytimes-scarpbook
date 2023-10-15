import BottomBar from 'components/bottomBar/BottomBar';
import FilterModal from 'components/filter/FilterModal';
import TopBar from 'components/topBar/TopBar';
import { Outlet } from 'react-router';
import styled from 'styled-components';
import { StyledSection } from 'styles/compoents';

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
				<StyledSection>
					<Outlet />
				</StyledSection>
				<BottomBar />
			</StyledAppContents>
			<FilterModal />
		</div>
	);
}
