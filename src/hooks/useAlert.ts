import { alertModalStore } from 'store/modal';

export default function useAlert() {
	const setIsShow = alertModalStore((state) => state.setIsShow);
	const setText = alertModalStore((state) => state.setText);
	const alertMessage = (text: string) => {
		setIsShow(true);
		setText(text);
		setTimeout(() => {
			setIsShow(false);
		}, 800);
	};
	return alertMessage;
}
