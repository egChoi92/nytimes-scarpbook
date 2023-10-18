import { create } from 'zustand';

interface ModalStoreType {
	isShow: boolean;
	setIsShow: (isShow: boolean) => void;
}

interface AlertModalStoreType extends ModalStoreType {
	text: string;
	setText: (text: string) => void;
}

export const filterModalStore = create<ModalStoreType>()((set) => ({
	isShow: false,
	setIsShow: (isShow: boolean) => set({ isShow }),
}));

export const alertModalStore = create<AlertModalStoreType>()((set) => ({
	isShow: false,
	setIsShow: (isShow: boolean) => set({ isShow }),
	text: '',
	setText: (text: string) => set({ text }),
}));
