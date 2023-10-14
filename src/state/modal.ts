import { create } from 'zustand';

interface FilterModalStateType {
	isShow: boolean;
	setIsShow: (isShow: boolean) => void;
}

export const filterModalStore = create<FilterModalStateType>()((set) => ({
	isShow: false,
	setIsShow: (by: boolean) => set({ isShow: by }),
}));
