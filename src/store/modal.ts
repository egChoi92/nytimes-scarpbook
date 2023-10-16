import { create } from 'zustand';

interface ModalStoreType {
	isShow: boolean;
	setIsShow: (isShow: boolean) => void;
}

export const modalStore = create<ModalStoreType>()((set) => ({
	isShow: false,
	setIsShow: (isShow: boolean) => set({ isShow }),
}));
