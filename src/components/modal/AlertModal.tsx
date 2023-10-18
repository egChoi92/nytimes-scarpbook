import { alertModalStore } from 'store/modal';
import styled from 'styled-components';

const StyledAlertModal = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	padding: 1rem 0.5rem;
	background-color: #ff4545;
	font-size: 0.875rem;
	color: #fff;
	text-align: center;
	transform: translateY(-100%);
	transition: transform 0.15s ease-out;
	&.is-show {
		transform: translateY(0);
	}
`;

export default function AlertModal() {
	const isShow = alertModalStore((state) => state.isShow);
	const text = alertModalStore((state) => state.text);
	const className = isShow ? 'is-show' : '';

	return <StyledAlertModal className={className}>{text}</StyledAlertModal>;
}
